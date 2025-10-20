import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/wordpress';
import { formatDate } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const author = post._embedded?.author?.[0];

  return (
    <article className="bg-white border-2 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(128,128,128,1)] hover:shadow-[8px_8px_0px_0px_rgba(128,128,128,1)] transition-all">
      {featuredImage && (
        <div className="mb-4 aspect-video relative overflow-hidden rounded-xl">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-black hover:text-pink-500 transition-colors">
          <Link href={`/blogs/${post.slug}`}>
            {post.title.rendered}
          </Link>
        </h2>
        
        <div 
          className="text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {author?.name || 'N8N Developers'}</span>
          <span>{formatDate(new Date(post.date), 'MMM dd, yyyy')}</span>
        </div>
        
        <Link 
          href={`/blogs/${post.slug}`}
          className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}