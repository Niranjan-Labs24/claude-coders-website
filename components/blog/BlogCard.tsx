import Link from 'next/link';
import { BlogPost as ContentfulPost } from '@/lib/contentful';
import { formatDate } from 'date-fns';
import BlogCardImage from './BlogCardImage';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: ContentfulPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { fields, sys } = post;

  const featuredImageUrl = fields.featuredImage?.fields?.file?.url 
    ? 'https:' + fields.featuredImage.fields.file.url 
    : null;
    
  const authorName = fields.author || 'n8n developer';

  return (
    <article className="group transition-all duration-300">
      <div className="mb-6 overflow-hidden rounded-[2rem]">
        <BlogCardImage 
          src={featuredImageUrl} 
          alt={fields.title} 
        />
      </div>
      
      <div className="space-y-3">
        {/* Meta Info */}
        <div className="flex items-center gap-1 text-sm font-semibold text-[#FF7A59]">
          <span>By {authorName}</span>
          <span>•</span>
          <span>{formatDate(new Date(fields.date), 'do MMM, yyyy')}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-black group-hover:text-[#FF7A59] transition-colors leading-tight">
          <Link href={`/blogs/${fields.slug}`}>
            {fields.title}
          </Link>
        </h2>
        
        {/* Excerpt */}
        <div 
          className="text-gray-500 line-clamp-2 text-base md:text-lg leading-relaxed"
        >
          {fields.excerpt}
        </div>
        
        {/* Read More */}
        <Link 
          href={`/blogs/${fields.slug}`}
          className="inline-flex items-center gap-2 text-lg font-bold text-black border-none bg-transparent p-0 transition-all"
        >

          <span className="border-b-2 border-black leading-tight">Read more</span>
          <div className="relative transition-transform">
            <div className="absolute inset-0 bg-[#FF7A59] rounded-full translate-x-[1.5px] translate-y-[1.5px]" />
            <div className="relative bg-black rounded-full p-1.5">
              <ArrowRight className="h-6 w-6 text-white -rotate-[60deg]" />
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
