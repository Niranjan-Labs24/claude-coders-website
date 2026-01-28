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
    <section className="mt-16 space-y-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-black border-b-2 border-black pb-2 inline-block">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-gray-900 pr-4">{index + 1}. {faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0 text-pink-500" />
              ) : (
                <ChevronDown className="flex-shrink-0 text-gray-400" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="p-4 pt-0 border-t border-gray-100 bg-gray-50/50">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
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
