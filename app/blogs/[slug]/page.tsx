import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { contentfulService } from '@/lib/contentful';
import { formatDate } from 'date-fns';
import PromotionBanner from '@/components/blog/PromotionBanner';
import { draftMode } from 'next/headers';
import { ArrowLeft, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await contentfulService.getPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.fields.title} | n8n developers`,
    description: post.fields.excerpt?.substring(0, 160),
  };
}

const mockKeywords = ["Automation", "Workflow", "Tasks", "Performance", "Evolution"];

// Options for rendering Contentful Rich Text
const richTextOptions = {
  renderBlock: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target?.fields || {};
      if (!file?.url) return null;
      
      const imageUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url;

      return (
        <div className="my-8 relative aspect-video rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={imageUrl}
            alt={title || 'Blog image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          />
        </div>
      );
    },
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-3xl font-extrabold mb-6 text-black">{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-2xl font-bold mt-12 mb-6 text-black">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-xl font-bold mt-10 mb-5 text-black">{children}</h3>,
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-6 leading-relaxed text-gray-600 text-base md:text-lg">{children}</p>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc pl-8 mb-6 space-y-3">{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal pl-8 mb-6 space-y-3">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="text-gray-600 text-base md:text-lg">{children}</li>,
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-6 border-[#FF7A59] pl-8 py-4 my-8 bg-gray-50 italic text-xl text-gray-700 rounded-r-2xl">
        {children}
      </blockquote>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-bold text-black">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => <code className="bg-gray-100 rounded px-1.5 py-0.5 font-mono text-sm">{text}</code>,
  },
  renderInlines: {
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-[#FF7A59] font-bold hover:underline">
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  
  const post = await contentfulService.getPostBySlug(
    resolvedParams.slug, 
    isEnabled
  );

  if (!post) notFound();

  const adjacentPosts = await contentfulService.getAdjacentPosts(post.fields.date);

  const featuredImage = post.fields.featuredImage;
  const author = post.fields.author;

  return (
    <div className="flex flex-col min-h-screen">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 w-full">
        {/* Breadcrumb / Back Link */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-sm font-bold text-black mb-8 hover:gap-3 transition-all"
        >
          <div className="bg-black rounded-full p-1">
            <ArrowLeft className="h-3 w-3 text-white" />
          </div>
          Back to all blog posts
        </Link>

        {/* Hero Section: Title and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 md:mb-10 items-start">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              {post.fields.title}
            </h1>

            {/* Meta Labels */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Time</span>
                <p className="text-black font-extrabold text-lg">{formatDate(new Date(post.fields.date), "do MMM, yyyy")}</p>
              </div>
              {author && (
                <div className="space-y-1">
                  <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Author</span>
                  <p className="text-black font-extrabold text-lg">{author}</p>
                </div>
              )}
            </div>
          </div>

          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-gray-100 border-none shadow-none">
            {featuredImage?.fields?.file?.url ? (
              <Image
                src={`https:${featuredImage.fields.file.url}`}
                alt={post.fields.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
            )}
          </div>
        </div>

        {/* Content Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-lg max-w-none 
              prose-headings:text-black prose-headings:font-extrabold 
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg
              prose-strong:text-black prose-strong:font-bold
              prose-a:text-[#FF7A59] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-[2rem] prose-img:border-none prose-img:shadow-none
            ">
              {documentToReactComponents(post.fields.content, richTextOptions)}
            </div>

            {/* Article Navigation */}
            <div className="flex items-center justify-between py-12 border-t border-gray-100 mt-16">
              {adjacentPosts.prev ? (
                <Link 
                  href={`/blogs/${adjacentPosts.prev.fields.slug}`} 
                  className="inline-flex items-center gap-3 text-base font-bold text-gray-400 hover:text-black transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Previous
                </Link>
              ) : (
                <div /> // Spacer
              )}
              {adjacentPosts.next ? (
                <Link 
                  href={`/blogs/${adjacentPosts.next.fields.slug}`} 
                  className="inline-flex items-center gap-3 text-base font-bold text-black hover:gap-4 transition-all"
                >
                  Next Article
                  <ArrowRight className="h-5 w-5" />
                </Link>
              ) : (
                <div /> // Spacer
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12 sticky top-24 h-fit">
            <div className="space-y-4">
              <h4 className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {post.fields.tags ? post.fields.tags.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600 hover:border-black hover:text-black transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                )) : mockKeywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600 hover:border-black hover:text-black transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-black text-sm font-bold uppercase tracking-wider">Share this article</h4>
              <div className="flex items-center gap-4">
                {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <Link key={i} href="#" className="p-2 text-gray-400 hover:text-black transition-colors transform hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Promotion Banner */}
      <PromotionBanner />
    </div>
  );
}
