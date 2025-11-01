import { wordpressService } from '@/lib/wordpress';

export default async function DebugPage() {
  const { posts } = await wordpressService.getAllPosts(1, 3);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Debug WordPress API</h1>
      
      {posts.map((post, index) => (
        <div key={post.id} className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">{post.title.rendered}</h2>
          <p>Post ID: {post.id}</p>
          <p>Featured Media ID: {post.featured_media}</p>
          <p>Has Embedded Data: {!!post._embedded ? 'Yes' : 'No'}</p>
          
          {post._embedded && (
            <>
              <p>Featured Media Array: {JSON.stringify(post._embedded['wp:featuredmedia'])}</p>
              <p>Author Array: {JSON.stringify(post._embedded.author)}</p>
            </>
          )}
          
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <strong>Full Post Data:</strong>
            <pre className="text-xs overflow-auto">
              {JSON.stringify(post, null, 2)}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}