
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

      const headers: HeadersInit = {};
      if (username && password && status !== 'publish') {
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${token}`;
      }

      const response = await fetch(url.toString(), {
        headers,
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const data = await response.json();

      return {
        posts: data,
        totalPages: parseInt(response.headers.get('x-wp-totalpages') || '1'),
        total: parseInt(response.headers.get('x-wp-total') || '0')
      };
    } catch (error: any) {
      console.error('Error fetching WordPress posts:', error);
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
      const headers: HeadersInit = {};

      if (username && password && status !== 'publish') {
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${token}`;
      }

      try {
        const response = await fetch(url.toString(), {
          headers,
          next: { revalidate: 3600 }
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            return data[0];
          }
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
      const url = new URL(`${this.baseURL}/posts`);
      url.searchParams.append('categories', categoryId.toString());
      url.searchParams.append('_embed', 'true');

      const response = await fetch(url.toString(), {
        next: { revalidate: 3600 }
      });

      if (!response.ok) return [];
      return await response.json();
    } catch (error: any) {
      return [];
    }
  }

  async getAdjacentPosts(date: string): Promise<{ prev: BlogPost | null; next: BlogPost | null }> {
    try {
      const prevUrl = new URL(`${this.baseURL}/posts`);
      prevUrl.searchParams.append('before', date);
      prevUrl.searchParams.append('per_page', '1');
      prevUrl.searchParams.append('orderby', 'date');
      prevUrl.searchParams.append('order', 'desc');
      prevUrl.searchParams.append('_embed', 'true');

      const nextUrl = new URL(`${this.baseURL}/posts`);
      nextUrl.searchParams.append('after', date);
      nextUrl.searchParams.append('per_page', '1');
      nextUrl.searchParams.append('orderby', 'date');
      nextUrl.searchParams.append('order', 'asc');
      nextUrl.searchParams.append('_embed', 'true');

      const [prevRes, nextRes] = await Promise.all([
        fetch(prevUrl.toString()),
        fetch(nextUrl.toString())
      ]);

      const prevData = prevRes.ok ? await prevRes.json() : [];
      const nextData = nextRes.ok ? await nextRes.json() : [];

      return {
        prev: prevData[0] || null,
        next: nextData[0] || null,
      };
    } catch (error: any) {
      console.error('Error fetching adjacent posts:', error);
      return { prev: null, next: null };
    }
  }
}

export const wordpressService = new WordPressService();
