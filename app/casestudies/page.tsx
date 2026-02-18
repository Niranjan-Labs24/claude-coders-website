import { Metadata } from 'next';
import CaseStudyCard from '@/components/blog/CaseStudyCard';
import PromotionBanner from '@/components/blog/PromotionBanner';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Case Studies | n8n developers',
  description: 'Explore our latest n8n automation and MVP case studies.',
};

const CaseStudiesPage: FC = () => {
  const caseStudies = [
    {
      title: "n8n Automation & MVP",
      client: "CloudZero",
      duration: "4 months",
      task: "WP, Rest, JSON",
      description: "n8n 2.0 with a major emphasis on workflow execution reporting and performance, scalability, and developer experience enhancements.",
      image: "/placeholder.svg",
      slug: "automation-mvp-1"
    },
    {
      title: "n8n Automation & MVP",
      client: "Hashi Corp",
      duration: "08 months",
      task: "WP, Rest, JSON",
      description: "n8n 2.0 with a major emphasis on workflow execution reporting and performance, scalability, and developer experience enhancements.",
      image: "/placeholder.svg",
      slug: "automation-mvp-2"
    },
    {
      title: "n8n Automation & MVP",
      client: "CloudZero",
      duration: "4 months",
      task: "WP, Rest, JSON",
      description: "n8n 2.0 with a major emphasis on workflow execution reporting and performance, scalability, and developer experience enhancements.",
      image: "/placeholder.svg",
      slug: "automation-mvp-3"
    },
    {
      title: "n8n Automation & MVP",
      client: "Hashi Corp",
      duration: "08 months",
      task: "WP, Rest, JSON",
      description: "n8n 2.0 with a major emphasis on workflow execution reporting and performance, scalability, and developer experience enhancements.",
      image: "/placeholder.svg",
      slug: "automation-mvp-4"
    },
    {
      title: "n8n Automation & MVP",
      client: "CloudZero",
      duration: "4 months",
      task: "WP, Rest, JSON",
      description: "n8n 2.0 with a major emphasis on workflow execution reporting and performance, scalability, and developer experience enhancements.",
      image: "/placeholder.svg",
      slug: "automation-mvp-5"
    },
    {
      title: "n8n Automation & MVP",
      client: "Hashi Corp",
      duration: "08 months",
      task: "WP, Rest, JSON",
      description: "n8n 2.0 with a major emphasis on workflow execution reporting and performance, scalability, and developer experience enhancements.",
      image: "/placeholder.svg",
      slug: "automation-mvp-6"
    }
  ];

  return (
    <div className="flex flex-col pt-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16 md:mb-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-tight mb-6">
          Our <span className="text-[#FF7A59]">case studies</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Insights, tutorials, and the latest news from the n8n developers team
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-16 md:mb-24">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard 
              key={index}
              {...cs}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <PromotionBanner />
    </div>
  );
};

export default CaseStudiesPage;
