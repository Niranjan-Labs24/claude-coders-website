'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Is N8N more flexible than Zapier and Make?",
    answer: "Yes, N8N allows full code-level control, custom logic, and self-hosting options, making it significantly more flexible for complex workflows."
  },
  {
    question: "Do N8N developers help reduce automation costs?",
    answer: "Yes, using N8N can cut recurring subscription fees because it's open-source or self-hosted, and our developers optimize workflows to minimize resource usage."
  },
  {
    question: "Can N8N handle complex enterprise workflows better?",
    answer: "Absolutely. N8N supports advanced integrations, direct database connections, and large-scale automations that traditional no-code tools often struggle with."
  },
  {
    question: "Is hiring an N8N developer good for long-term automation growth?",
    answer: "Yes, N8N developers build workflows that are easy to expand, maintain, and adapt as your business grows, ensuring your automation stack remains robust."
  }
];

interface FAQSectionProps {
  customFAQs?: FAQItem[] | string;
}

export default function FAQSection({ customFAQs }: FAQSectionProps) {
  let faqs: FAQItem[] = defaultFAQs;

  if (customFAQs) {
    if (Array.isArray(customFAQs) && customFAQs.length > 0) {
      faqs = customFAQs;
    } else if (typeof customFAQs === 'string' && customFAQs.trim() !== '') {
      const blocks = customFAQs.split(/\n\s*\n/);
      const parsedFAQs: FAQItem[] = blocks.map(block => {
        const lines = block.trim().split('\n');
        if (lines.length >= 2) {
          return {
            question: lines[0].trim(),
            answer: lines.slice(1).join('\n').trim()
          };
        }
        if (block.includes(':')) {
          const [q, ...a] = block.split(':');
          return { question: q.trim(), answer: a.join(':').trim() };
        }
        return null;
      }).filter((faq): faq is FAQItem => faq !== null && !!faq.question && !!faq.answer);

      if (parsedFAQs.length > 0) {
        faqs = parsedFAQs;
      }
    }
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-24 space-y-16 flex flex-col items-center w-full px-4">
      {/* Heading */}
      <div 
        className="flex items-center justify-center"
        style={{ width: '100%', maxWidth: '558px', height: '63px' }}
      >
        <h2 
          className="font-sans font-semibold text-[48px] leading-[63px] tracking-[-4%] text-black text-center m-0"
        >
          Frequently asked questions
        </h2>
      </div>
      
      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-[1242px] w-full justify-items-center">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="transition-all duration-300 border border-[#F1F2F9] rounded-[24px] overflow-hidden bg-white relative"
            style={{ 
              width: '100%',
              maxWidth: '607px',
              minHeight: openIndex === index ? 'auto' : '104px',
              backdropFilter: 'blur(32px)',
              boxShadow: 'none'
            }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between pl-8 pr-6 text-left hover:bg-gray-50/50 transition-colors"
              style={{ height: '104px' }}
            >
              <span 
                className="font-manrope font-semibold text-[20px] leading-[48px] tracking-[-4%] text-black"
                style={{ width: '419px' }}
              >
                {faq.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50/50 border border-[#F1F2F9]">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div 
                className="pl-8 pr-6 pb-8"
                style={{ width: '100%', maxWidth: '543px' }}
              >
                <p className="font-sans font-medium text-[16px] leading-[32px] tracking-[-1%] text-[#00000099] whitespace-pre-line m-0 not-italic">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
