import Image from 'next/image';
import Link from 'next/link';
import { CADLENLY_URL } from '@/app/constants';
import { Activity } from 'lucide-react';

export default function PromotionBanner() {
  return (
    <section className="bg-[#FFF5F2] w-full border-t border-[#FFE7E0] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
              You know what's the <br />
              <span className="text-[#FF7A59]">smartest move?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-lg">
              Hire n8n experts at n8ndevelopers to build, manage and scale your automation pipeline.
            </p>
            
            <div className="space-y-4">
              <Link 
                href={CADLENLY_URL}
                target="_blank"
                className="inline-block bg-[#FF7A59] hover:bg-[#ff6a42] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black text-lg"
              >
                Book free automation call
              </Link>
              <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
                <Activity className="h-4 w-4" /> 15-min discovery call
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full h-[200px] md:h-[280px]">
            <Image
              src="/team-photo.webp"
              alt="n8n Developers Team"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
