import { Metadata } from 'next';
import { wordpressService } from '@/lib/wordpress';
import BlogCard from '@/components/blog/BlogCard';
import Pagination from '@/components/blog/Pagination';
import PromotionBanner from '@/components/blog/PromotionBanner';

export const metadata: Metadata = {
  title: 'Blog | N8N Developers',
  description: 'Latest insights, tutorials, and news from N8N Developers',
};

export const revalidate = 3600; // Revalidate every hour

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  const { posts, totalPages } = await wordpressService.getAllPosts(currentPage, 9);

  return (
    <div className="flex flex-col pt-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16 md:mb-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-tight mb-6">
          Latest <span className="text-[#FF7A59]">blog</span> posts
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Insights, tutorials, and the latest news from the n8n developers team
        </p>
      </div>

      {posts.length > 0 ? (
        <>
          {/* Blog Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-8 md:mb-12">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mb-8 md:mb-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  baseUrl="/blogs"
                />
              </div>
            )}
          </div>

          {/* Bottom CTA Banner */}
          <PromotionBanner />
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-xl text-gray-600">No blog posts found.</p>
        </div>
      )}
    </div>
  );
}