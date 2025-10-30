// // import axios from 'axios';

// // //const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://public-api.wordpress.com/wp/v2/sites/ayushdot123-aozkb.wordpress.com';
// // const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/myblog/wp-json/wp/v2';
// // export interface BlogPost {
// //   id: number;
// //   slug: string;
// //   title: {
// //     rendered: string;
// //   };
// //   content: {
// //     rendered: string;
// //   };
// //   excerpt: {
// //     rendered: string;
// //   };
// //   date: string;
// //   featured_media: number;
// //   author: number;
// //   categories: number[];
// //   tags: number[];
// //   _embedded?: {
// //     'wp:featuredmedia'?: Array<{
// //       source_url: string;
// //       alt_text: string;
// //     }>;
// //     author?: Array<{
// //       name: string;
// //       avatar_urls: {
// //         '96': string;
// //       };
// //     }>;
// //   };
// // }

// // export class WordPressService {
// //   private baseURL = WORDPRESS_API_URL;
// //   private useMockData = false; 

// //   // Empty mock data array since we're using real WordPress data
// //   private mockBlogPosts: BlogPost[] = [];

// //   async getAllPosts(page = 1, perPage = 10): Promise<{
// //     posts: BlogPost[];
// //     totalPages: number;
// //     total: number;
// //   }> {
// //     if (this.useMockData) {
// //       const startIndex = (page - 1) * perPage;
// //       const endIndex = startIndex + perPage;
// //       const paginatedPosts = this.mockBlogPosts.slice(startIndex, endIndex);
      
// //       return {
// //         posts: paginatedPosts,
// //         totalPages: Math.ceil(this.mockBlogPosts.length / perPage),
// //         total: this.mockBlogPosts.length
// //       };
// //     }

// //     try {
// //       console.log('Fetching posts from:', `${this.baseURL}/posts`);
      
// //       const response = await axios.get(`${this.baseURL}/posts`, {
// //         params: {
// //           page,
// //           per_page: perPage,
// //           _embed: true,
// //           status: 'publish'
// //         },
// //         timeout: 10000, // 10 second timeout
// //       });

// //       console.log('Posts fetched successfully:', response.data.length);
// //       if (response.data.length > 0) {
// //         console.log('First post featured media:', response.data[0]._embedded?.['wp:featuredmedia']);
// //       }

// //       return {
// //         posts: response.data,
// //         totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
// //         total: parseInt(response.headers['x-wp-total'] || '0')
// //       };
// //     } catch (error: any) {
// //       console.error('Error fetching posts:', error.message);
// //       console.error('Error details:', error.response?.data);
      
// //       // Return empty array instead of mock data to avoid confusion
// //       return {
// //         posts: [],
// //         totalPages: 0,
// //         total: 0
// //       };
// //     }
// //   }

// //   async getPostBySlug(slug: string): Promise<BlogPost | null> {
// //     if (this.useMockData) {
// //       return this.mockBlogPosts.find(post => post.slug === slug) || null;
// //     }

// //     try {
// //       const response = await axios.get(`${this.baseURL}/posts`, {
// //         params: {
// //           slug,
// //           _embed: true,
// //           status: 'publish'
// //         },
// //         timeout: 10000,
// //       });

// //       return response.data[0] || null;
// //     } catch (error: any) {
// //       console.error('Error fetching post:', error.message);
// //       return null;
// //     }
// //   }

// //   async getPostsByCategory(categoryId: number): Promise<BlogPost[]> {
// //     if (this.useMockData) {
// //       return this.mockBlogPosts.filter(post => post.categories.includes(categoryId));
// //     }

// //     try {
// //       const response = await axios.get(`${this.baseURL}/posts`, {
// //         params: {
// //           categories: categoryId,
// //           _embed: true,
// //           status: 'publish'
// //         },
// //         timeout: 10000,
// //       });

// //       return response.data;
// //     } catch (error: any) {
// //       console.error('Error fetching posts by category:', error.message);
// //       return [];
// //     }
// //   }

// //   async searchPosts(query: string): Promise<BlogPost[]> {
// //     if (this.useMockData) {
// //       return this.mockBlogPosts.filter(post => 
// //         post.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
// //         post.content.rendered.toLowerCase().includes(query.toLowerCase())
// //       );
// //     }

// //     try {
// //       const response = await axios.get(`${this.baseURL}/posts`, {
// //         params: {
// //           search: query,
// //           _embed: true,
// //           status: 'publish'
// //         },
// //         timeout: 10000,
// //       });

// //       return response.data;
// //     } catch (error: any) {
// //       console.error('Error searching posts:', error.message);
// //       return [];
// //     }
// //   }
// // }

// // export const wordpressService = new WordPressService();
// import axios from 'axios';

// // Use environment variable
// const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/myBlog/wp-json/wp/v2';

// export interface BlogPost {
//   id: number;
//   slug: string;
//   title: {
//     rendered: string;
//   };
//   content: {
//     rendered: string;
//   };
//   excerpt: {
//     rendered: string;
//   };
//   date: string;
//   featured_media: number;
//   author: number;
//   categories: number[];
//   tags: number[];
//   _embedded?: {
//     'wp:featuredmedia'?: Array<{
//       source_url: string;
//       alt_text: string;
//     }>;
//     author?: Array<{
//       name: string;
//     }>;
//   };
// }

// export class WordPressService {
//   private baseURL = WORDPRESS_API_URL;

//   async getAllPosts(page = 1, perPage = 10): Promise<{
//     posts: BlogPost[];
//     totalPages: number;
//     total: number;
//   }> {
//     try {
//       const response = await axios.get(`${this.baseURL}/posts`, {
//         params: {
//           page,
//           per_page: perPage,
//           _embed: true,
//         },
//       });

//       return {
//         posts: response.data,
//         totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
//         total: parseInt(response.headers['x-wp-total'] || '0')
//       };
//     } catch (error: any) {
//       console.error('Error fetching posts:', error.message);
//       return {
//         posts: [],
//         totalPages: 0,
//         total: 0
//       };
//     }
//   }

//   async getPostBySlug(slug: string): Promise<BlogPost | null> {
//     try {
//       const response = await axios.get(`${this.baseURL}/posts`, {
//         params: {
//           slug,
//           _embed: true,
//         },
//       });

//       return response.data[0] || null;
//     } catch (error: any) {
//       console.error('Error fetching post:', error.message);
//       return null;
//     }
//   }

//   async getPostsByCategory(categoryId: number): Promise<BlogPost[]> {
//     try {
//       const response = await axios.get(`${this.baseURL}/posts`, {
//         params: {
//           categories: categoryId,
//           _embed: true,
//         },
//       });

//       return response.data;
//     } catch (error: any) {
//       console.error('Error fetching posts by category:', error.message);
//       return [];
//     }
//   }
// }

// export const wordpressService = new WordPressService();
// lib/wordpress.ts
import axios from 'axios';

// Use environment variable
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/myBlog/wp-json/wp/v2';

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
    }>;
  };
}

export class WordPressService {
  private baseURL = WORDPRESS_API_URL;

  async getAllPosts(page = 1, perPage = 10): Promise<{
    posts: BlogPost[];
    totalPages: number;
    total: number;
  }> {
    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          page,
          per_page: perPage,
          _embed: true,
        },
      });

      return {
        posts: response.data,
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error: any) {
      console.error('Error fetching posts:', error.message);
      return {
        posts: [],
        totalPages: 0,
        total: 0
      };
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const response = await axios.get(`${this.baseURL}/posts`, {
        params: {
          slug,
          _embed: true,
        },
      });

      return response.data[0] || null;
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