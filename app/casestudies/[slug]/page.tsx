import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDate } from 'date-fns';
import PromotionBanner from '@/components/blog/PromotionBanner';
import { ArrowLeft, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Case Study Detail | n8n developers',
  description: 'Deep dive into our n8n automation and MVP solutions.',
};

const mockKeywords = ["Automation", "Workflow", "Tasks", "Performance", "Evolution"];

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CaseStudyDetailPage: FC<CaseStudyDetailPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  
  // Mock data for the specific case study
  const caseStudy = {
    title: "n8n 2.0 marks a major evolution in workflow automation, bringing performance, scalability",
    client: "CloudZero",
    duration: "04 months",
    date: new Date("2023-12-12"),
    content: `
      <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised"</p>
      
      <h3>Section Title here</h3>
      <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"</p>
      
      <h3>Section Title here</h3>
      <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised"</p>
      
      <h3>Section Title here</h3>
      <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"</p>
    `,
    image: "/placeholder.svg"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Breadcrumb / Back Link */}
        <Link 
          href="/casestudies" 
          className="inline-flex items-center gap-2 text-sm font-bold text-black mb-8 hover:gap-3 transition-all"
        >
          <div className="bg-black rounded-full p-1">
            <ArrowLeft className="h-3 w-3 text-white" />
          </div>
          Back to all case studies
        </Link>

        {/* Hero Section: Title and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
              {caseStudy.title}
            </h1>

            {/* Meta Labels */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Client</span>
                <p className="text-black font-extrabold text-lg">{caseStudy.client}</p>
              </div>
              {/* <div className="space-y-1">
                <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Duration</span>
                <p className="text-black font-extrabold text-lg">{caseStudy.duration}</p>
              </div> */}
              <div className="space-y-1">
                <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Time</span>
                <p className="text-black font-extrabold text-lg">{formatDate(caseStudy.date, "do MMM, yyyy")}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-none border-none">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-lg max-w-none 
              prose-headings:text-black prose-headings:font-extrabold 
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-strong:text-black prose-strong:font-bold
              prose-a:text-[#FF7A59] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-[2rem] prose-img:border-none
            "
              dangerouslySetInnerHTML={{ __html: caseStudy.content }}
            />

            {/* Navigation */}
            <div className="flex items-center justify-between py-12 border-t border-gray-100 mt-16">
              <Link href="#" className="inline-flex items-center gap-3 text-base font-bold text-gray-400 hover:text-black transition-colors">
                <ArrowLeft className="h-5 w-5" />
                Previous
              </Link>
              <Link href="#" className="inline-flex items-center gap-3 text-base font-bold text-black hover:gap-4 transition-all">
                Next Article
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12 sticky top-24 h-fit">
            <div className="space-y-4">
              <h4 className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {mockKeywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600 hover:border-black hover:text-black transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-black text-sm font-bold uppercase tracking-wider">Share this article</h4>
              <div className="flex items-center gap-4">
                {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <Link key={i} href="#" className="p-2 text-gray-400 hover:text-black transition-colors transform hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Promotion Banner */}
      <PromotionBanner />
    </div>
  );
};

export default CaseStudyDetailPage;
