export type AboutStat = {
  value: string
  label: string
}

export type AboutPillar = {
  title: string
  description: string
}

export type AboutTeamMember = {
  name: string
  role?: string
}

export const aboutContent = {
  eyebrow: 'About Us',
  headline: 'The Story of GHD Group',
  chapters: [
    {
      title: 'Every Journey Begins With A Vision',
      paragraphs: [
        'Some companies build structures. Others build relationships. The most enduring ones do both.',
        'GHD Group is a diversified Goa-based enterprise shaped by nearly two decades of careful growth. From the beginning, our work has been guided by a simple belief: every space begins with a story — a spark of possibility, and a quiet vision of the life people hope to create.',
        'We bring that vision to life with care, craft, and intention. We design with clarity. We build with precision. So the life people imagine has the space it deserves to unfold.',
      ],
    },
    {
      title: 'Building Homes. Creating Experiences.',
      paragraphs: [
        'Founded in 2006 through GHD Infra, we began by shaping Goa’s real estate landscape with a commitment to quality, trust, and thoughtful development. Over the years, that journey grew into a lasting legacy — 15+ projects, 700+ branded apartments, 100+ luxury villas, and 200+ plots successfully delivered across Goa.',
        'Behind every project lies the same philosophy: creating spaces where people don’t just live, but truly belong.',
        'As the Group evolved, one question kept emerging: what if we could create not only homes for people to live in, but destinations where they could experience the very best of Goa?',
        'That question became the foundation of GHD Hotels in 2026 — a natural chapter in the GHD Group story. With the same values of quality, attention to detail, and thoughtful design, hospitality became our next expression of care: welcoming guests into places where comfort, warmth, and world-class service meet.',
      ],
    },
    {
      title: 'One Group. Two Expressions.',
      paragraphs: [
        'Today, GHD Group stands for both luxury infrastructure and royal hospitality. Through GHD Infra, we craft premium real estate developments in Goa’s most sought-after locations. Through GHD Hotels, launched in 2026, we shape memorable stays across carefully designed properties.',
        'Together, they form one vision: to build with purpose, welcome with sincerity, and create places that leave a lasting impression.',
      ],
    },
  ],
  stats: [
    { value: '15+', label: 'Projects' },
    { value: '700+', label: 'Branded Apartments' },
    { value: '100+', label: 'Luxury Villas' },
    { value: '200+', label: 'Plots Delivered' },
  ] as AboutStat[],
  values: {
    eyebrow: 'Values that define',
    title: 'Our Way',
    body:
      'What defines GHD Group is not only the number of projects we deliver, but the standards we refuse to compromise on. We focus on getting the fundamentals right — by listening closely, planning carefully, and executing with precision across every home we build and every guest experience we create.',
  },
  uniqueness: {
    eyebrow: 'What sets us apart',
    title: 'The GHD Difference',
    pillars: [
      {
        title: 'Real Estate Expertise',
        description:
          'Our integrated approach brings engineering, design, strategy, and development together, allowing each project to move forward with continuity and clear oversight from start to finish.',
      },
      {
        title: 'A Diverse Portfolio',
        description:
          'From ultra-luxury villas and serviced suites to thoughtfully planned apartments and townships, our portfolio spans lifestyles, scales, and investment needs across Goa.',
      },
      {
        title: 'Engineered For Value',
        description:
          'Construction methods and material choices are guided by durability and efficiency, resulting in homes that perform well over time and hold lasting value.',
      },
      {
        title: 'Hospitality Meets Housing',
        description:
          'Experience from hospitality-led developments and serviced residences helps us plan homes and destinations with ease of use, everyday readiness, and genuine comfort in mind.',
      },
      {
        title: 'On-Time Project Delivery',
        description:
          'With dedicated in-house teams and coordinated workflows, projects are executed with discipline and consistency — meeting timelines without compromising quality.',
      },
    ] as AboutPillar[],
  },
  journey: {
    title: 'Our Journey',
    subtitle: 'From Vision To Legacy',
    years: ['2006', '2010', '2014', '2017', '2019', '2022', '2024', '2026'],
  },
  team: {
    eyebrow: 'Leadership',
    title: 'Guided By Vision',
    members: [
      { name: 'Mr. Bharat Thakran', role: 'Chairman & Managing Director' },
    ] as AboutTeamMember[],
  },
  closing: {
    title: 'This Is Just The Beginning',
    paragraphs: [
      'The story of GHD Group has always been about building with purpose — and welcoming people into spaces that feel meaningful.',
      'As we continue to grow across luxury infrastructure and hospitality, every new project is another opportunity to create lasting value, memorable experiences, and places where people feel at home.',
      'Two strong brands. One vision. Infinite possibilities.',
    ],
  },
}
