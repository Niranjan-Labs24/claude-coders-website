/// <reference types="node" />
import { createClient, type Entry, type Asset } from 'contentful';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
    // console.warn('Contentful environment variables missing');
}

export const contentfulClient = createClient({
    space: SPACE_ID || '',
    accessToken: ACCESS_TOKEN || '',
});

export interface BlogPost {
    sys: {
        id: string;
        createdAt: string;
    };
    fields: {
        title: string;
        slug: string;
        date: string;
        author: string;
        excerpt: string;
        content: any; // Rich Text object
        featuredImage: Asset;
        tags?: string[];
    };
}

export interface CaseStudy {
    sys: {
        id: string;
        createdAt: string;
    };
    fields: {
        title: string;
        client: string;
        duration?: string;
        task: string;
        description: string;
        image: Asset;
        slug: string;
    };
}

export class ContentfulService {
    async getAllPosts(page = 1, perPage = 10): Promise<{
        posts: BlogPost[];
        totalPages: number;
        total: number;
    }> {
        try {
            const response = await contentfulClient.getEntries<any>({
                content_type: 'blogPost',
                skip: (page - 1) * perPage,
                limit: perPage,
                order: ['-fields.date'],
            });

            const total = response.total;
            const totalPages = Math.ceil(total / perPage);

            return {
                posts: response.items as unknown as BlogPost[],
                totalPages,
                total,
            };
        } catch (error: any) {
            console.error('Error fetching Contentful posts:', error);
            return {
                posts: [],
                totalPages: 0,
                total: 0,
            };
        }
    }

    async getPostBySlug(slug: string): Promise<BlogPost | null> {
        try {
            const response = await contentfulClient.getEntries<any>({
                content_type: 'blogPost',
                'fields.slug': slug,
                limit: 1,
            });

            if (response.items && response.items.length > 0) {
                return response.items[0] as unknown as BlogPost;
            }
            return null;
        } catch (error) {
            console.error(`Error fetching Contentful post with slug ${slug}:`, error);
            return null;
        }
    }

    async getAllCaseStudies(): Promise<CaseStudy[]> {
        try {
            const response = await contentfulClient.getEntries<any>({
                content_type: 'caseStudy',
                order: ['-sys.createdAt'],
            });

            return response.items as unknown as CaseStudy[];
        } catch (error) {
            console.error('Error fetching Contentful case studies:', error);
            return [];
        }
    }

    async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
        try {
            const response = await contentfulClient.getEntries<any>({
                content_type: 'caseStudy',
                'fields.slug': slug,
                limit: 1,
            });

            if (response.items && response.items.length > 0) {
                return response.items[0] as unknown as CaseStudy;
            }
            return null;
        } catch (error) {
            console.error(`Error fetching Contentful case study with slug ${slug}:`, error);
            return null;
        }
    }
}

export const contentfulService = new ContentfulService();
