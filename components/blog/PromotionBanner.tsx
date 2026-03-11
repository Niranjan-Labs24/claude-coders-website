import Image from 'next/image';
import Link from 'next/link';
import { CADLENLY_URL } from '@/app/constants';
import { Activity } from 'lucide-react';

export default function PromotionBanner() {
  return (
    <section className="w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
      <div 
        className="relative overflow-hidden border border-[#0000000F] w-full max-w-[353px] lg:max-w-[1242px] xl:max-w-[1400px] 2xl:max-w-[1600px] rounded-[24px] h-[581px] lg:h-[427px] xl:h-[500px] 2xl:h-[550px] flex flex-col lg:block"
        style={{
          background: 'linear-gradient(93.7deg, #FFFFFF -11.3%, #FFEDE7 118.49%)',
        }}
      >
        {/* Content Container - Vertically Centered */}
        <div className="flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-6 lg:py-0 relative z-10 h-[325px] lg:h-full lg:items-start items-center text-center lg:text-left flex-shrink-0">
          <div className="flex flex-col gap-[17px] max-w-full lg:w-[473px] xl:w-[600px]">
            <h3 className="font-sans font-semibold text-[32px] sm:text-[40px] xl:text-[48px] 2xl:text-[56px] leading-tight tracking-[-3%] text-black m-0">
              You know what's the <br className="hidden sm:block" />
              smartest move?
            </h3>
            <p className="font-sans font-medium text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-relaxed tracking-[-1%] text-[#00000099] m-0 max-w-[426px] xl:max-w-[550px]">
              Hire n8n experts at n8ndevelopers to build, manage and scale your automation pipeline.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col lg:items-start items-center gap-4 w-full">
            <Link 
              href={CADLENLY_URL}
              target="_blank"
              className="inline-flex items-center justify-center bg-[#FF7442] hover:bg-[#ff6a42] text-white transition-all text-base sm:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold text-center whitespace-nowrap border border-black rounded-[16px] shadow-[0px_4px_0px_0px_#000000] w-full max-w-[280px] h-[64px] xl:h-[72px] 2xl:h-[80px]"
            >
              Book free automation call
            </Link>
            <div className="flex items-center gap-2 lg:ml-4">
               <div className="w-[18px] h-[18px] flex items-center justify-center">
                 <Image
                  src="/icons/15 min.png"
                  alt="15 min"
                  width={18}
                  height={18}
                  className="object-contain"
                />
               </div>
              <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] text-black font-semibold">
                Starts at $30 per hour
              </p>
            </div>
          </div>
        </div>

        {/* Team Photo Container */}
        <div className="relative lg:absolute lg:right-0 lg:bottom-0 h-[256px] lg:h-full w-full lg:w-[631px] xl:w-[750px] 2xl:w-[850px] mt-0 lg:mt-0 z-5">
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
