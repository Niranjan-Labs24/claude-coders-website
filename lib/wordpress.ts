import axios from 'axios';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://public-api.wordpress.com/wp/v2/sites/ayushdot123-aozkb.wordpress.com';

export interface BlogPost {
  id: number;
  slug: string;
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
      avatar_urls: {
        '96': string;
      };
    }>;
  };
}


export class WordPressService {
  private baseURL = WORDPRESS_API_URL;
  private useMockData = false; 

  // Empty mock data array since we're using real WordPress data
  private mockBlogPosts: BlogPost[] = [];

  async getAllPosts(page = 1, perPage = 10): Promise<{
    posts: BlogPost[];
    totalPages: number;
    total: number;
  }> {
    
    if (this.useMockData) {
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedPosts = this.mockBlogPosts.slice(startIndex, endIndex);
      
      return {
        posts: paginatedPosts,
        totalPages: Math.ceil(this.mockBlogPosts.length / perPage),
        total: this.mockBlogPosts.length
      };
    }

    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          page,
          per_page: perPage,
          _embed: true, 
          status: 'publish'
        }
      });

      return {
        posts: response.data,
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      
      return {
        posts: this.mockBlogPosts.slice(0, perPage),
        totalPages: Math.ceil(this.mockBlogPosts.length / perPage),
        total: this.mockBlogPosts.length
      };
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    
    if (this.useMockData) {
      return this.mockBlogPosts.find(post => post.slug === slug) || null;
    }

    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          slug,
          _embed: true,
          status: 'publish'
        }
      });

      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching post:', error);
      
      return this.mockBlogPosts.find(post => post.slug === slug) || null;
    }
  }

  async getPostsByCategory(categoryId: number): Promise<BlogPost[]> {
    
    if (this.useMockData) {
      return this.mockBlogPosts.filter(post => post.categories.includes(categoryId));
    }

    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          categories: categoryId,
          _embed: true,
          status: 'publish'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return this.mockBlogPosts.filter(post => post.categories.includes(categoryId));
    }
  }

  async searchPosts(query: string): Promise<BlogPost[]> {
    
    if (this.useMockData) {
      return this.mockBlogPosts.filter(post => 
        post.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
        post.content.rendered.toLowerCase().includes(query.toLowerCase())
      );
    }

    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          search: query,
          _embed: true,
          status: 'publish'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error searching posts:', error);
      return this.mockBlogPosts.filter(post => 
        post.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
        post.content.rendered.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}

export const wordpressService = new WordPressService();