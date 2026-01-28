import axios from 'axios';

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
  acf?: {
    faqs?: Array<{
      question: string;
      answer: string;
    }> | string;
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
      const username = process.env.ADMIN_USERNAME;
      const password = process.env.ADMIN_PASSWORD;

      const url = new URL(`${this.baseURL}/posts`);
      url.searchParams.append('page', page.toString());
      url.searchParams.append('per_page', perPage.toString());
      url.searchParams.append('_embed', 'true');
      url.searchParams.append('status', status);

      const headers: any = {};
      if (username && password && status !== 'publish') {
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${token}`;
      }

      const response = await axios.get(url.toString(), { headers });

      return {
        posts: response.data,
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error: any) {
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
      return null;
    }
  }

  async getPostBySlug(slug: string, status: 'publish' | 'draft' | 'any' = 'publish'): Promise<BlogPost | null> {
    try {
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
      } catch (e) { }

      if (status === 'draft' || status === 'any') {
        const { posts } = await this.getAllPosts(1, 100, status);

        let post = posts.find(p => p.slug === slug);

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
      return [];
    }
  }
}

export const wordpressService = new WordPressService();
