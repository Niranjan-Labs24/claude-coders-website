interface BenefitItem {
  package: string;
  labels: string[];
  bestFor?: string;
}

const benefitItems: BenefitItem[] = [
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
]

export default benefitItems