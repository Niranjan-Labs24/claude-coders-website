// Forced re-compile
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#FF7A59] text-white rounded-xl font-bold hover:bg-[#ff6a42] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black"
      >
        Return Home
      </Link>
    </div>
  )
}
