export interface BenefitItem {
  package: string;
  labels: string[];
  bestFor?: string;
}

export const benefitItems: BenefitItem[] = [
  {
    package: 'STARTER',
    labels: ['Direct access to n8n certified developers', 'Basic workflow creation and modification', 'Standard documentation', 'Email support (48-hour response time)', 'Up to 2 revision rounds per workflow']
  },
  {
    package: 'PLUS',
    labels: ['Batch tasking and multiple workflows',
      'API integration projects',
      'Multi-step automation sequences',
      'Dedicated project manager assignment',
      'Comprehensive documentation package',
      'Priority email + Teams support (24-hour response)',
      'Performance optimization review'],
    bestFor: 'Best Suited for Growing companies, established businesses, agencies with multiple automation needs'
  },
  {
    package: 'PRO',
    labels: [
      'Monthly strategy and optimization calls',
      'Dedicated development team (2-3 developers)',
      'Priority support (10-hour response, 3-hour for urgent)',
      'Advanced monitoring and alerting setup',
      'Monthly performance reporting',
      'Advanced security implementations',
      'Database integration expertise',
      'Enterprise-grade workflow systems',
      'Advanced error handling and recovery',
      '15% discount on additional services',
      'Dedicated Project Teams Channel'
    ],
    bestFor: 'Best suited for Enterprises, SaaS companies, agencies with complex automation needs, businesses requiring ongoing development support'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingFAQs: FAQItem[] = [
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

export default benefitItems;