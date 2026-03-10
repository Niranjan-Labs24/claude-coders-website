import Image from 'next/image';
import Link from 'next/link';
import { CADLENLY_URL } from '@/app/constants';
import { Activity } from 'lucide-react';

export default function PromotionBanner() {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
      <div 
        className="relative overflow-hidden border border-[#0000000F]"
        style={{
          width: '100%',
          maxWidth: '1242px',
          height: '427px',
          borderRadius: '24px',
          background: 'linear-gradient(93.7deg, #FFFFFF -11.3%, #FFEDE7 118.49%)',
        }}
      >
        {/* Content Container - Vertically Centered */}
        <div className="h-full flex flex-col justify-center px-12 md:px-16 lg:px-24 relative z-10">
          <div className="flex flex-col" style={{ width: '473px', height: '157px', gap: '17px' }}>
            <h3 
              className="font-sans font-semibold text-[40px] leading-[42px] tracking-[-3%] text-black m-0"
              style={{ width: '473px', height: '84px' }}
            >
              You know what's the <br />
              smartest move?
            </h3>
            <p 
              className="font-sans font-medium text-[18px] leading-[28px] tracking-[-1%] text-[#00000099] m-0"
              style={{ width: '426px', height: '56px' }}
            >
              Hire n8n experts at n8ndevelopers to build, manage and scale your automation pipeline.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col items-start gap-4">
            <Link 
              href={CADLENLY_URL}
              target="_blank"
              className="inline-flex items-center justify-center bg-[#FF7442] hover:bg-[#ff6a42] text-white transition-all text-[18px] font-semibold text-center whitespace-nowrap"
              style={{
                width: '280px',
                height: '64px',
                borderRadius: '16px',
                boxShadow: '0px 4px 0px 0px #000000',
                border: '1px solid #000000'
              }}
            >
              Book free automation call
            </Link>
            <div className="flex items-center gap-2 ml-4">
               <div className="w-[18px] h-[18px] flex items-center justify-center">
                 <Image
                  src="/icons/15 min.png"
                  alt="15 min"
                  width={18}
                  height={18}
                  className="object-contain"
                />
               </div>
              <p className="text-[14px] text-black font-semibold">
                Starts at $30 per hour
              </p>
            </div>
          </div>
        </div>

        {/* Absolute Team Photo - Fitted inside */}
        <div 
          className="absolute hidden lg:block"
          style={{
            width: '631px',
            height: '427px', // Matches banner height
            top: '0px',
            right: '0px',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          <Image
            src="/team-photo.webp"
            alt="n8n Developers Team"
            fill
            className="object-contain object-bottom"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
