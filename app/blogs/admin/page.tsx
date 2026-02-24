// app/blogs/admin/page.tsx
import Link from 'next/link';

export default function AdminPage() {
  const contentfulUrl = `https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT || 'master'}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-black">
            Blog <span className="text-[#FF7A59]">Manager</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium">
            We have migrated from WordPress to Contentful. Manage your content directly on the Contentful platform.
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <a
            href={contentfulUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-black hover:bg-gray-900 transition-all shadow-xl hover:-translate-y-1"
          >
            Open Contentful Dashboard
          </a>
          
          <p className="text-xs text-gray-400 pt-4">
            Space ID: {process.env.CONTENTFUL_SPACE_ID}
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/blogs" 
            className="text-gray-400 hover:text-black font-bold text-sm transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
