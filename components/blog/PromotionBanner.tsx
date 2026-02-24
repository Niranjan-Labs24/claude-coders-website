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
            
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <Link 
                href={CADLENLY_URL}
                target="_blank"
                className="inline-flex items-center justify-center bg-[#FF7442] hover:bg-[#ff6a42] text-white transition-all text-base text-center whitespace-nowrap border-[1px] border-black"
                style={{
                  width: '280px',
                  height: '72px',
                  borderRadius: '12px',
                  padding: '20px 52px',
                  gap: '8px',
                  opacity: 1,
                  boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                }}
              >
                Book free automation call
              </Link>
              <div className="w-full max-w-[280px] flex justify-center">
                <p className="text-sm text-gray-500 font-bold flex items-center gap-2">
                  <Image
                    src="/icons/15 min.png"
                    alt="15 min"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                  15-min discovery call
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full aspect-video md:aspect-none md:h-[350px] md:flex-1 relative mb-8 md:mb-0">
            <Image
              src="/team-photo.webp"
              alt="n8n Developers Team"
              fill
              className="object-contain"
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
              }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
