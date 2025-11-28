import axios from 'axios';

// Use environment variable
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/myBlog/wp-json/wp/v2';

export interface BlogPost {
  id: number;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

export class WordPressService {
  private baseURL = WORDPRESS_API_URL;

  async getAllPosts(page = 1, perPage = 10, status: 'publish' | 'draft' | 'any' = 'publish'): Promise<{
    posts: BlogPost[];
    totalPages: number;
    total: number;
  }> {
    try {
      console.log('Fetching posts with status:', status);

      const username = process.env.ADMIN_USERNAME;
      const password = process.env.ADMIN_PASSWORD;

      const url = new URL(`${this.baseURL}/posts`);
      url.searchParams.append('page', page.toString());
      url.searchParams.append('per_page', perPage.toString());
      url.searchParams.append('_embed', 'true');
      url.searchParams.append('status', status);

      console.log('Requesting URL:', url.toString());

      const headers: any = {};
      if (username && password && status !== 'publish') {
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${token}`;
        console.log('Using Basic Auth for draft posts');
      }

      const response = await axios.get(url.toString(), { headers });

      console.log(`Received ${response.data.length} posts`);

      return {
        posts: response.data,
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error: any) {
      console.error('Error fetching posts:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', JSON.stringify(error.response.data, null, 2));
      }
      return {
        posts: [],
        totalPages: 0,
        total: 0
      };
    }
  }

  async getPostById(id: number, status: 'publish' | 'draft' | 'any' = 'any'): Promise<BlogPost | null> {
    try {
      const { posts } = await this.getAllPosts(1, 100, status);
      return posts.find(p => p.id === id) || null;
    } catch (error: any) {
      console.error('Error fetching post by ID:', error.message);
      return null;
    }
  }

  async getPostBySlug(slug: string, status: 'publish' | 'draft' | 'any' = 'publish'): Promise<BlogPost | null> {
    try {
      // Optimization: Always try to fetch by slug first, even for drafts
      // WordPress might find it if the slug matches exactly
      const url = new URL(`${this.baseURL}/posts`);
      url.searchParams.append('slug', slug);
      url.searchParams.append('_embed', 'true');
      url.searchParams.append('status', status);

      const username = process.env.ADMIN_USERNAME;
      const password = process.env.ADMIN_PASSWORD;
      const headers: any = {};

      if (username && password && status !== 'publish') {
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${token}`;
      }

      try {
        const response = await axios.get(url.toString(), { headers });
        if (response.data && response.data.length > 0) {
          return response.data[0];
        }
      } catch (e) {
        // Ignore error and fall back to manual search
        console.log('Direct slug fetch failed, falling back to manual search');
      }

      // Fallback: If direct fetch failed (e.g. slug mismatch), search in all posts
      // This is slower but necessary for drafts with auto-generated slugs
      if (status === 'draft' || status === 'any') {
        console.log('Searching for post by generated slug...');
        const { posts } = await this.getAllPosts(1, 100, status);

        // Try to find by slug first (in case it wasn't found by API for some reason)
        let post = posts.find(p => p.slug === slug);

        // If not found, try to match by generated slug from title
        if (!post) {
          post = posts.find(p => {
            const generatedSlug = p.title.rendered.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return generatedSlug === slug;
          });
        }
        return post || null;
      }

      return null;
    } catch (error: any) {
      console.error('Error fetching post:', error.message);
      return null;
    }
  }

  async getPostsByCategory(categoryId: number): Promise<BlogPost[]> {
    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          categories: categoryId,
          _embed: true,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error('Error fetching posts by category:', error.message);
      return [];
    }
  }
}

export const wordpressService = new WordPressService();