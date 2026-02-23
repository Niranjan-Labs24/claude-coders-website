import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  client: string;
  duration: string;
  task: string;
  description: string;
  image: string;
  slug: string;
}

export default function CaseStudyCard({
  title,
  client,
  duration,
  task,
  description,
  image,
  slug,
}: CaseStudyCardProps) {
  return (
    <article className="group transition-all duration-300">
      <div className="mb-8 overflow-hidden rounded-[2rem] relative aspect-video bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="space-y-4">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-black leading-tight group-hover:text-[#FF7A59] transition-colors">
          <Link href={`/casestudies/${slug}`}>
            {title}
          </Link>
        </h2>

        {/* Meta Info Grid */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="text-[#FF7A59]">Client:</span>
            <span className="text-black">{client}</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-[#FF7A59]">Duration:</span>
            <span className="text-black">{duration}</span>
          </div> */}
          <div className="flex items-center gap-2">
            <span className="text-[#FF7A59]">Task:</span>
            <span className="text-black">{task}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-500 text-lg leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {/* View Case Study Link */}
        <Link 
          href={`/casestudies/${slug}`}
          className="inline-flex items-center gap-2 text-lg font-bold text-black border-none bg-transparent p-0 transition-all"
        >
          <span className="border-b-2 border-black leading-tight">View case study</span>
          <div className="relative transition-transform">
            <div className="absolute inset-0 bg-[#FF7A59] rounded-full translate-x-[1.5px] translate-y-[1.5px]" />
            <div className="relative bg-black rounded-full p-1.5">
              <ArrowRight className="h-6 w-6 text-white -rotate-[60deg]" />
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
