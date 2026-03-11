export default function BlogLoading() {
  return (
    <div className="flex flex-col pt-12 animate-pulse">
      {/* Page Header Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16 md:mb-12">
        <div className="h-12 sm:h-16 md:h-20 bg-gray-200 rounded-xl w-3/4 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-100 rounded-lg w-1/2 mx-auto"></div>
      </div>

      {/* Filter Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Blog Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-8 md:mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col h-full">
              {/* Image Skeleton */}
              <div className="mb-6 aspect-video bg-gray-200 rounded-[2rem] w-full"></div>
              
              {/* Meta Info Skeleton */}
              <div className="flex items-center gap-2 mb-3">
                <div className="h-4 w-24 bg-gray-100 rounded"></div>
                <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                <div className="h-4 w-20 bg-gray-100 rounded"></div>
              </div>

              {/* Title Skeleton */}
              <div className="space-y-2 mb-3">
                <div className="h-7 bg-gray-200 rounded w-full"></div>
                <div className="h-7 bg-gray-200 rounded w-4/5"></div>
              </div>
              
              {/* Excerpt Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
              </div>
              
              {/* Read More Skeleton */}
              <div className="mt-auto h-6 w-32 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
