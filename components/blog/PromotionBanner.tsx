import Image from 'next/image';
import Link from 'next/link';
import { CADLENLY_URL } from '@/app/constants';

export default function PromotionBanner() {
  return (
    <div className="my-12 p-5 sm:p-8 bg-white border-[3px] border-black rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 overflow-hidden max-w-4xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex-1 space-y-4 px-2">
        <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight">
          You know what's the smartest move?
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Hire n8n experts at <span className="underline font-semibold text-black">n8ndevelopers</span> to build, 
          manage and scale your automation pipeline.
        </p>
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <span className="text-base sm:text-lg font-bold text-black whitespace-nowrap">
            starts at $30 per hour
          </span>
          <Link 
            href={CADLENLY_URL || "#"}
            target="_blank"
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-all border-2 border-black active:scale-95"
          >
            Discovery Call →
          </Link>
        </div>
      </div>
      <div className="relative w-full md:w-[220px] aspect-[4/3] md:aspect-square flex-shrink-0">
        <Image
          src="/team-photo.png"
          alt="n8n Developers Team"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}
