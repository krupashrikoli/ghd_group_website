export type NavItem = {
  id: 'about' | 'contact'
  label: string
  action: 'open-about' | 'open-contact'
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', action: 'open-about' },
  { id: 'contact', label: 'Contact', action: 'open-contact' },
]

export type ContactBrand = {
  id: 'infra' | 'hotels'
  name: string
  enquiry: string
  email: string
}

export const contactBrands: ContactBrand[] = [
  {
    id: 'infra',
    name: 'GHD Infra',
    enquiry: '0832 2913236',
    email: 'info@ghdinfra.com',
  },
  {
    id: 'hotels',
    name: 'GHD Hotels',
    enquiry: '83800 08687',
    email: 'info@ghdhotels.in',
  },
]
