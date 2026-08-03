import { assets } from './assets'

export type BrandPanel = {
  id: 'infra' | 'hotels'
  title: string
  titleLines: [string, string]
  description: string
  href: string
  ctaLabel: string
  ctaStyle?: 'filled' | 'outline'
  imageUrl: string
  iconUrl: string
  variant: 'infra' | 'hotels'
  highlights: Array<{ icon: string; label: string }>
}

export type HighlightStat = {
  icon?: string
  iconUrl?: string
  label: string
}

export const heroContent = {
  title: {
    line1: 'Building',
    highlight1: 'Destinations.',
    line2: 'Creating',
    highlight2: 'Experiences.',
  },
  subtitle:
    'GHD Group is a diversified Goa-based enterprise with expertise across luxury real estate development and hospitality, creating exceptional spaces for living, investing, and experiencing Goa.',
}

export const brandPanels: BrandPanel[] = [
  {
    id: 'infra',
    title: 'Luxury Infrastructure',
    titleLines: ['Luxury', 'Infrastructure'],
    description:
      "Thoughtfully designed real estate developments in Goa's most sought-after locations.",
    href: 'https://ghdinfra.com/',
    ctaLabel: 'Explore Luxury Infrastructure',
    ctaStyle: 'outline',
    imageUrl: assets.cards.infra,
    iconUrl: assets.icons.infra,
    variant: 'infra',
    highlights: [],
  },
  {
    id: 'hotels',
    title: 'Royal Hospitality',
    titleLines: ['Royal', 'Hospitality'],
    description:
      'World-class hospitality experiences crafted with elegance, care, and perfection.',
    href: 'https://ghdhotels.in/',
    ctaLabel: 'Explore Royal Hospitality',
    ctaStyle: 'outline',
    imageUrl: assets.cards.hotels,
    iconUrl: assets.icons.crown,
    variant: 'hotels',
    highlights: [],
  },
]

export const highlightStats: HighlightStat[] = [
  { iconUrl: assets.icons.leaves, label: 'Years of Excellence' },
  { iconUrl: assets.icons.location, label: 'Deep Roots in Goa' },
  { iconUrl: assets.icons.diamond, label: 'Quality You Can Trust' },
  { iconUrl: assets.icons.people, label: 'Committed to People & Places' },
]
