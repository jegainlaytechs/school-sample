export interface SchoolDetails {
  name: string;
  tagline: string;
  subTagline: string;
  address: string;
  mobile: string;
  email: string;
  instagram: string;
  whatsapp: string;
  mapEmbedUrl: string;
  mapDirectLink: string;
}

export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  timing: string;
  description: string;
  highlights: string[];
  image: string;
  colorBg: string;
  colorBadge: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  badge: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Activities' | 'Events' | 'Outdoor' | 'Celebrations';
  imageUrl: string;
  caption: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  relation: string;
  childProgram: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  numberValue: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badgeColor: string;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bgColor: string;
  textColor: string;
}
