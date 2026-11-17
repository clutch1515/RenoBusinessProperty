// Single source for contact and brokerage details used across the site.
export const site = {
  name: 'Reno Business Property',
  url: 'https://renobusinessproperty.com',
  agent: 'Peter Larsen, CCIM',
  title: 'Associate',
  license: 'Nevada license S.195204',
  phone: '(775) 762-5179',
  phoneHref: 'tel:+17757625179',
  email: 'plarsen@dicksoncg.com',
  brokerage: 'Dickson Commercial Group',
  brokerageUrl: 'https://dicksoncg.com',
  address: '6140 Plumas St., Suite 100, Reno, NV 89519',
};

export const nav = [
  { label: 'Property owners', href: '/property-owners/', children: [
    { label: 'Commercial property values', href: '/commercial-property-values/' },
  ] },
  { label: 'Tenants & buyers', href: '/tenants-buyers/' },
  { label: 'Property types', children: [
    { label: 'Retail & storefronts', href: '/retail-storefronts/' },
    { label: 'Flex & warehouse space', href: '/flex-warehouse-space/' },
    { label: 'Office space', href: '/office-space/' },
  ] },
  { label: 'Market insights', href: '/market-insights/' },
  { label: 'About & contact', href: '/about-contact/' },
];

export const topics = [
  { id: 'market-updates', label: 'Market updates', blurb: 'What changed in the Reno and Sparks market, with sources.' },
  { id: 'leasing', label: 'Leasing & business space', blurb: 'Compare locations, occupancy costs, and lease terms.' },
  { id: 'ownership', label: 'Property ownership', blurb: 'Work through value, renewals, improvements, and timing.' },
  { id: 'retail-industrial', label: 'Retail & flex', blurb: 'Check whether the space fits the operation.' },
] as const;
