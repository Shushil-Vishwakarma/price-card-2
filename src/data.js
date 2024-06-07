// src/data.js
export const cards = [
  {
    id: 1,
    title: "FREE",
    amount: "$0/month",
    features: [
      { text: 'Single User', enabled: true },
      { text: '50GB Storage', enabled: true },
      { text: 'Unlimited Public Projects', enabled: true },
      { text: 'Community Access', enabled: true },
      { text: 'Unlimited Private Projects', enabled: false },
      { text: 'Dedicated Phone Support', enabled: false },
      { text: 'Free Subdomain', enabled: false },
      { text: 'Monthly Status Reports', enabled: false }
    ]
  },
  {
    id: 2,
    title: "PLUS",
    amount: "$9/month",
    features: [
      { text: 'Single User', enabled: true },
      { text: '50GB Storage', enabled: true },
      { text: 'Unlimited Public Projects', enabled: true },
      { text: 'Community Access', enabled: true },
      { text: 'Unlimited Private Projects', enabled: true },
      { text: 'Dedicated Phone Support', enabled: true },
      { text: 'Free Subdomain', enabled: true },
      { text: 'Monthly Status Reports', enabled: false }
    ]
  },
  {
    id: 3,
    title: "PRO",
    amount: "$49/month",
    features: [
      { text: 'Single User', enabled: true },
      { text: '50GB Storage', enabled: true },
      { text: 'Unlimited Public Projects', enabled: true },
      { text: 'Community Access', enabled: true },
      { text: 'Unlimited Private Projects', enabled: true },
      { text: 'Dedicated Phone Support', enabled: true },
      { text: 'Free Subdomain', enabled: true },
      { text: 'Monthly Status Reports', enabled: true }
    ]
  }
];
