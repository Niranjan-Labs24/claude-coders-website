import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDate } from 'date-fns';
import PromotionBanner from '@/components/blog/PromotionBanner';
import { ArrowLeft, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import { contentfulService } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = await contentfulService.getCaseStudyBySlug(resolvedParams.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | n8n developers',
    };
  }

  return {
    title: `${caseStudy.fields.title} | n8n developers`,
    description: caseStudy.fields.description,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const resolvedParams = await params;
  const caseStudy = await contentfulService.getCaseStudyBySlug(resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  const { title, client, description, image } = caseStudy.fields;
  const imageUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : '/placeholder.svg';
  const date = new Date(caseStudy.sys.createdAt);

  return (
    <div className="flex flex-col min-h-screen">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 w-full">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 md:mb-10 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
              {title}
            </h1>

            {/* Meta Labels */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Client</span>
                <p className="text-black font-extrabold text-lg">{client}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#FF7A59] text-sm font-bold uppercase tracking-wider">Time</span>
                <p className="text-black font-extrabold text-lg">{formatDate(date, "do MMM, yyyy")}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-none border-none">
            <Image
              src={imageUrl}
              alt={title}
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
            ">
              {/* Assuming description might be rich text or string. If it's a string, we just render it. */}
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                documentToReactComponents(description as any)
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between py-12 border-t border-gray-100 mt-16">
              <Link href="/casestudies" className="inline-flex items-center gap-3 text-base font-bold text-gray-400 hover:text-black transition-colors">
                <ArrowLeft className="h-5 w-5" />
                Previous
              </Link>
              <Link href="/casestudies" className="inline-flex items-center gap-3 text-base font-bold text-black hover:gap-4 transition-all">
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
                {["Automation", "Workflow", "Tasks", "Performance", "Evolution"].map((keyword) => (
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
}
