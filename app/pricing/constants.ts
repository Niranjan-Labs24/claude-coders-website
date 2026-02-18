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
    question: "How fast is deployment ready?",
    answer: "Most deployments are ready within 24-48 hours after the initial discovery call and requirements gathering."
  },
  {
    question: "What about Team Monthly?",
    answer: "Our team monthly package provides dedicated support for larger operations requiring constant monitoring and scaling."
  },
  {
    question: "How fast is deployment ready?",
    answer: "Most deployments are ready within 24-48 hours after the initial discovery call and requirements gathering."
  },
  {
    question: "What about development quality?",
    answer: "We follow strict n8n best practices, ensuring all workflows are optimized, secure, and fully documented."
  },
  {
    question: "How fast is deployment ready?",
    answer: "Most deployments are ready within 24-48 hours after the initial discovery call and requirements gathering."
  },
  {
    question: "What about team monthly?",
    answer: "Teams-based we normally deploy next level of developing and processing velocity keeps in your fast paced and latest development trends and your priority our priority we always push on priorities list and you can easily with us."
  },
  {
    question: "Can we handle custom API?",
    answer: "Yes, our experts specialize in complex API integrations and custom node development for unique use cases."
  },
  {
    question: "Do you supply sub-agent?",
    answer: "Yes, we can provide sub-agents for specialized tasks within your automation pipeline."
  }
];

export default benefitItems;