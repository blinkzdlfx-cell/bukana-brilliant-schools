export const schoolProfile = {
  name: 'Bukana Brilliant Schools',
  shortName: 'BBS',
  tagline: 'Be a star @ BBS',
  domain: 'bukanabrilliantschools.com',
  address: 'Degbuyi Complex, 282, Jegun/Ikotun Road, Thomas Adeoye B/Stop, Ijegun, Lagos, Nigeria',
  addressPendingConfirmation: true,
  description:
    'Bukana Brilliant Schools offers Creche, Nursery and Primary education in Ijegun, Lagos, with a focus on helping every child grow in confidence, curiosity and character.',
  mission:
    'To nurture every child’s potential through caring, purposeful early-years and primary education, helping each pupil grow in confidence, curiosity and character.',
  vision: null,
  values: null,
  logo: null,
};

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about', dropdown: 'about' },
  { label: 'Academics', href: '/academics', dropdown: 'academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const navDropdowns = {
  about: [
    { label: 'About the school', href: '/about#overview' },
    { label: 'Our purpose and values', href: '/about#purpose' },
  ],
  academics: [
    { label: 'Curriculum Overview', href: '/academics#curriculum' },
    { label: 'Early Years (Pre-School & Nursery)', href: '/early-years' },
    { label: 'Primary School', href: '/primary' },
  ],
};

export const admissionsCta = {
  label: 'Enquire about admissions',
  href: '/admissions',
};

export const academicsCta = {
  label: 'Explore academics',
  href: '/academics',
};

export const contactCta = {
  label: 'Contact the school',
  href: '/contact',
};

export const languageOptions = [
  { label: 'EN', value: 'en', active: true },
  { label: 'FR', value: 'fr', active: false },
];
