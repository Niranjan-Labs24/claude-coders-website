'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { pricingFAQs } from '../constants';

function FAQItem({
  faq,
  index,
  openIndex,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  onToggle: (i: number) => void;
}) {
  const isOpen = openIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-2xl transition-colors duration-300 ${
        isOpen ? 'bg-[#FFF5F2]' : 'bg-transparent'
      }`}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-bold text-gray-900 pr-8 leading-snug">{faq.question}</span>
        <span className="flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <Minus className="h-5 w-5 text-black" />
          ) : (
            <Plus className="h-5 w-5 text-black" />
          )}
        </span>
      </button>

      {/* Smooth height animation — no layout shift */}
      <div
        style={{ height, overflow: 'hidden', transition: 'height 0.3s ease' }}
      >
        <div ref={contentRef} className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function PricingFAQ() {
  // All closed by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Accordion: close previous when a new one opens
  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const leftColumn = pricingFAQs.slice(0, 2);
  const rightColumn = pricingFAQs.slice(2);

  return (
    <section className="py-10 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-8 md:mb-10">
        Frequently asked questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 items-start">
        {/* Left Column */}
        <div>
          {leftColumn.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightColumn.map((faq, index) => {
            const actualIndex = index + 2;
            return (
              <FAQItem
                key={actualIndex}
                faq={faq}
                index={actualIndex}
                openIndex={openIndex}
                onToggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
