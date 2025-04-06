export const menuItems = [
    {
        label: 'Dashboard',
        path: '/'
    },
    {
        label: 'Analytics',
        path: '/analytics',
    },
    {
        label: 'Connect',
        path: '/connect',
    },
    {
        label: 'Dealroom',
        path: '/dealroom',
    },
    {
        label: 'Profile',
        path: '/profile'
    },
    {
        label: 'Settings',
        path: '/settings'
    },
];

export const mobileNavItems = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: '/dashboard.svg'
    },
    {
        label: 'Analytics',
        path: '/analytics',
        icon: '/analytics.svg'
    },
    {
        label: 'Connect',
        path: '/connect',
        icon: '/connect.svg'
    },
    {
        label: 'Activity',
        path: '/activity',
        icon: '/activity.svg'
    },
    {
        label: 'Dealroom',
        path: '/dealroom',
        icon: '/dealroom.svg'
    },
];

export const profiles = [
    {   
        id: 1,
        name: 'Mr A',
        title: 'Co-Founder & CEO',
        company: 'Vertx',
        logo: '/logo.svg', // Replace with actual logo URL
        userType: 'Enterprise',
        verified: true,
        linkedin: 'https://linkedin.com/in/profile',
        twitter: 'https://twitter.com/profile',
        email: 'contact@example.com',
        avatar: '/profile_avatar.avif',
        isOnline: 'true',
        foundedCompanies: {
            title: 'Founded Companies',
            count: 2,
            items: [
              {
                name: 'Vertx',
                logo: '/logo.svg', // Replace with actual logo URL
                badge: { text: 'CEO', color: 'bg-green text-black' },
                description: 'Founded in 2023 in ',
                location: 'Fintech.',
                profileUrl: '/companies/vertx'
              },
              {
                name: 'Company',
                logo: null,
                badge: { text: 'PROPRIETOR', color: 'bg-[#B1BDEB] text-[#10074F]' },
                description: 'Founded in 2023. Acquired by abc.in ',
                location: 'QuickCommerce',
                profileUrl: '/companies/companyname'
              }
            ]        
        },
        experience: {
            title: 'Experience',
            count: 3,
            items: [
              {
                name: 'Company 1',
                logo: null,
                profileUrl: '/companies/company1'
              },
              {
                name: 'Company 2',
                logo: null,
                profileUrl: '/companies/company2'
              },
              {
                name: 'Company 3',
                logo: null,
                profileUrl: '/companies/company3'
              }
            ]
        },
    },
];

export const insights = [
    {
        title: 'Founders',
        count: '7.4K',
        growth: '+000%',
        loss: '(000)'
    },
    {
        title: 'Investors',
        count: '6.09K',
        growth: '+000%',
        loss: '(000)'
    }
]

export const metricsConfig = {
    visitors: { color: '#ffffff', label: 'Visitors', count: '24.85K', growth: '+215%', loss: '(1,234)' },
    connections: { color: '#a855f7', label: 'Connections', count: '13.49K', growth: '+469%', loss: '(897)' },
    interactions: { color: '#22d3ee', label: 'Interactions', count: '18.32K', growth: '+324%', loss: '(1,045)' },
    impressions: { color: '#facc15', label: 'Impressions', count: '32.76K', growth: '+128%', loss: '(2,356)' }
  };

export const insightsOptions = ['Visitors', 'Connections', 'Interactions', 'Impressions'];
export const days = ["Today", "Yesterday", "This week", "Last week", "Last 7 Days", "Last 30 Days"];

export const add = ["Connections", "Interactions", "Impressions"]
export const countries = [
    {
      name: 'INDIA',
      color: 'bg-blue',
      percentage: '40%',
      flag: '/India.svg',
    },
    {
      name: 'USA',
      color: 'bg-orange',
      percentage: '25%',
      flag: '/USA.svg',
    },
    {
      name: 'CANADA',
      color: 'bg-sandal',
      percentage: '10%',
      flag: '/Canada.svg',
    },
    {
      name: 'UAE',
      color: 'bg-green',
      percentage: '7%',
      flag: '/UAE.png',
    },
  ];

  export const chartData = [
    { date: 'Mar 1', visitors: 300, connections: 100, interactions: 180, impressions: 900 },
    { date: 'Mar 2', visitors: 600, connections: 250, interactions: 400, impressions: 1300 },
    { date: 'Mar 3', visitors: 800, connections: 400, interactions: 600, impressions: 1600 },
    { date: 'Mar 4', visitors: 1000, connections: 500, interactions: 700, impressions: 1800 },
    { date: 'Mar 5', visitors: 1200, connections: 650, interactions: 850, impressions: 2100 },
    { date: 'Mar 6', visitors: 1100, connections: 600, interactions: 820, impressions: 2000 },
    { date: 'Mar 7', visitors: 1150, connections: 550, interactions: 790, impressions: 1900 },
    { date: 'Mar 8', visitors: 900, connections: 480, interactions: 710, impressions: 1700 },
    { date: 'Mar 9', visitors: 850, connections: 430, interactions: 680, impressions: 1650 },
    { date: 'Mar 10', visitors: 1100, connections: 600, interactions: 820, impressions: 2000 },
    { date: 'Mar 11', visitors: 950, connections: 520, interactions: 770, impressions: 1850 },
    { date: 'Mar 12', visitors: 900, connections: 500, interactions: 750, impressions: 1800 },
    { date: 'Mar 13', visitors: 850, connections: 450, interactions: 720, impressions: 1750 },
    { date: 'Mar 14', visitors: 880, connections: 460, interactions: 730, impressions: 1780 },
    { date: 'Mar 15', visitors: 800, connections: 420, interactions: 690, impressions: 1700 },
    { date: 'Mar 16', visitors: 780, connections: 400, interactions: 670, impressions: 1650 },
    { date: 'Mar 17', visitors: 750, connections: 390, interactions: 660, impressions: 1600 },
    { date: 'Mar 18', visitors: 720, connections: 370, interactions: 640, impressions: 1580 },
    { date: 'Mar 19', visitors: 700, connections: 360, interactions: 620, impressions: 1500 },
    { date: 'Mar 20', visitors: 2000, connections: 950, interactions: 1200, impressions: 2800 },
    { date: 'Mar 21', visitors: 1200, connections: 600, interactions: 800, impressions: 2200 },
    { date: 'Mar 22', visitors: 600, connections: 300, interactions: 500, impressions: 1400 },
    { date: 'Mar 23', visitors: 1000, connections: 500, interactions: 750, impressions: 1900 },
    { date: 'Mar 24', visitors: 800, connections: 400, interactions: 680, impressions: 1700 },
    { date: 'Mar 25', visitors: 1300, connections: 650, interactions: 950, impressions: 2300 },
    { date: 'Mar 26', visitors: 900, connections: 450, interactions: 700, impressions: 1800 },
    { date: 'Mar 27', visitors: 1400, connections: 700, interactions: 1000, impressions: 2500 },
    { date: 'Mar 28', visitors: 1100, connections: 560, interactions: 880, impressions: 2000 },
    { date: 'Mar 29', visitors: 700, connections: 320, interactions: 600, impressions: 1500 },
    { date: 'Mar 30', visitors: 1700, connections: 850, interactions: 1100, impressions: 2700 },
  ];
  