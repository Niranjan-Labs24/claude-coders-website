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
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target?.fields || {};
      if (!file?.url) return null;
      
      const imageUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url;
      const width = file.details?.image?.width || 800;
      const height = file.details?.image?.height || 600;

      return (
        <div className="my-8 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={imageUrl}
            alt={title || 'Blog image'}
            width={width}
            height={height}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          />
        </div>
      );
    },
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-3xl font-extrabold mb-6 text-black">{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-2xl font-bold mt-12 mb-6 text-black">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-xl font-bold mt-10 mb-5 text-black">{children}</h3>,
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-8 font-gilroy font-medium text-[20px] leading-[34px] text-black">{children}</p>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc pl-8 mb-8 space-y-4">{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal pl-8 mb-8 space-y-4">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="font-gilroy font-medium text-[20px] leading-[34px] text-black">{children}</li>,
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-6 border-[#FF7A59] pl-8 py-4 my-8 bg-gray-50 italic text-xl text-gray-700 rounded-r-2xl">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-[#FF7A59] font-bold hover:underline">
        {children}
      </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-bold text-black">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => <code className="bg-gray-100 rounded px-1.5 py-0.5 font-mono text-sm">{text}</code>,
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
  
  const adjacentPosts = await contentfulService.getAdjacentPosts(post.fields.date, isEnabled);

  const featuredImage = post.fields.featuredImage;
  const author = post.fields.author;

  return (
    <div className="flex flex-col min-h-screen">
      <article className="w-full pt-16 pb-8">
        {/* Header Section: 1440px Container with 80px left padding */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            
            {/* Left Content Column: 586px width */}
            <div className="w-full lg:w-[586px] flex flex-col gap-12">
              
              {/* Back Link: Manrope, 18px, 600 weight, 30px leading */}
              <Link 
                href="/blogs" 
                className="inline-flex items-center gap-2 font-manrope font-semibold text-[18px] leading-[30px] tracking-[-2%] text-black hover:opacity-70 transition-opacity"
              >
                <div className="bg-black rounded-full p-1.5 flex items-center justify-center">
                  <ArrowLeft className="h-4 w-4 text-white" />
                </div>
                Back to all blog posts
              </Link>

              <div className="flex flex-col gap-12">
                {/* Title: Gilroy, 40px, 600 weight, 42px leading */}
                <h1 className="font-gilroy font-semibold text-[40px] leading-[42px] tracking-[-3%] text-black">
                  {post.fields.title}
                </h1>

                {/* Meta Section: Gilroy, 26px, 600 weight, 30px leading */}
                <div className="flex flex-wrap items-center gap-[28px] py-4 border-t border-gray-100">
                  {author && (
                    <div className="flex items-center gap-[28px]">
                      <div className="space-y-1">
                        <span className="text-[#FF7A59] text-sm font-bold tracking-wider">Author</span>
                        <p className="font-gilroy font-semibold text-[26px] leading-[30px] tracking-[-2%] text-black whitespace-nowrap">
                          {author}
                        </p>
                      </div>
                      {/* Separator Dot: 6x6, #FF7442 */}
                      <div className="w-[6px] h-[6px] rounded-full bg-[#FF7442] mt-6" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <span className="text-[#FF7A59] text-sm font-bold tracking-wider">Time</span>
                    <p className="font-gilroy font-semibold text-[26px] leading-[30px] tracking-[-2%] text-black whitespace-nowrap">
                      {formatDate(new Date(post.fields.date), "do MMM, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column: 630px width, 342px height, 1px border */}
            <div className="w-full lg:w-[630px] lg:h-[342px] relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
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
        </div>

        {/* Content Section: 1440px Container with 183px left alignment for content */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
            {/* Main Content: 722px width, shifted to match 183px from left (80px + 103px) */}
            <div className="lg:col-span-8 lg:pl-[103px] max-w-[825px]">
              <div className="w-full lg:w-[722px] space-y-12">
                <div className="prose prose-2xl max-w-none 
                  prose-headings:text-black prose-headings:font-extrabold 
                  prose-strong:text-black prose-strong:font-bold
                  prose-a:text-[#FF7A59] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-xl prose-img:border-none prose-img:shadow-none
                ">
                  {documentToReactComponents(post.fields.content, richTextOptions)}
                </div>

                {/* Article Navigation: match design from screenshot */}
                <div className="w-full lg:w-[722px] flex items-center justify-between py-12 border-t border-gray-100 mt-16">
                  {adjacentPosts.prev ? (
                    <Link 
                      href={`/blogs/${adjacentPosts.prev.fields.slug}`} 
                      className="inline-flex items-center gap-[16px] font-manrope font-semibold text-[18px] leading-[30px] tracking-[-1%] text-black hover:opacity-70 transition-opacity"
                    >
                      <div className="w-[40px] h-[40px] border border-gray-200 rounded-[10px] flex items-center justify-center">
                        <ArrowLeft className="h-4 w-4 text-black" />
                      </div>
                      Previous
                    </Link>
                  ) : (
                    <div />
                  )}
                  {adjacentPosts.next ? (
                    <Link 
                      href={`/blogs/${adjacentPosts.next.fields.slug}`} 
                      className="inline-flex items-center gap-[16px] font-manrope font-semibold text-[18px] leading-[30px] tracking-[-1%] text-black hover:opacity-70 transition-opacity"
                    >
                      Next Article
                      <div className="w-[40px] h-[40px] border border-gray-200 rounded-[10px] flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>

          {/* Sidebar: 252px width, precisely positioned at 1108px from left */}
          <div className="lg:col-span-4 flex justify-end">
            <aside className="w-[252px] flex flex-col gap-[107px]">
              <div className="flex flex-col gap-4">
                <h4 className="font-gilroy font-semibold text-[18px] leading-[20px] tracking-[-2%] text-[#FF7A59]">Keywords</h4>
                <div className="grid grid-cols-2 gap-2">
                  {post.fields.tags ? post.fields.tags.map((keyword) => (
                    <span 
                      key={keyword} 
                      className="px-2 py-2 rounded-full border border-gray-300 text-[13px] font-bold text-black hover:border-black transition-all cursor-default text-center whitespace-nowrap overflow-hidden text-ellipsis shadow-sm bg-white"
                    >
                      {keyword}
                    </span>
                  )) : mockKeywords.map((keyword) => (
                    <span 
                      key={keyword} 
                      className="px-2 py-2 rounded-full border border-gray-300 text-[13px] font-bold text-black hover:border-black transition-all cursor-default text-center whitespace-nowrap overflow-hidden text-ellipsis shadow-sm bg-white"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-manrope font-semibold text-[16px] leading-[20px] tracking-[-2%] text-black whitespace-nowrap">Share this article</h4>
                <div className="flex items-center gap-[12px]">
                  {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                    <Link 
                      key={i} 
                      href="#" 
                      className="w-[30px] h-[30px] border border-gray-100 rounded-[8px] flex items-center justify-center text-black hover:border-black transition-all transform hover:scale-105 shadow-sm bg-white"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>

    {/* Promotion Banner */}
    <PromotionBanner />
  </div>
);
}
