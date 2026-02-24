import Link from 'next/link';
import { BlogPost } from '@/lib/wordpress';
import { formatDate } from 'date-fns';
import BlogCardImage from './BlogCardImage';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getFeaturedImageUrl = () => {
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
    return featuredImage?.source_url || null;
  };

  const featuredImageUrl = getFeaturedImageUrl();
  const author = post._embedded?.author?.[0];

  return (
    <article className="group transition-all duration-300">
      <div className="mb-6 overflow-hidden rounded-[2rem]">
        <BlogCardImage 
          src={featuredImageUrl} 
          alt={post.title.rendered} 
        />
      </div>
      
      <div className="space-y-3">
        {/* Meta Info */}
        <div className="flex items-center gap-1 text-sm font-semibold text-[#FF7A59]">
          <span>By {author?.name || 'Gasha Ray'}</span>
          <span>•</span>
          <span>{formatDate(new Date(post.date), 'do MMM, yyyy')}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-black group-hover:text-[#FF7A59] transition-colors leading-tight">
          <Link href={`/blogs/${post.slug}`}>
            {post.title.rendered}
          </Link>
        </h2>
        
        {/* Excerpt */}
        <div 
          className="text-gray-500 line-clamp-2 text-sm md:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        
        {/* Read More */}
        <Link 
          href={`/blogs/${post.slug}`}
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
