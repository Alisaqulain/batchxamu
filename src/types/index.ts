export type FeatureStatus = "live" | "available" | "coming-soon" | "planned";

export interface Developer {
  name: string;
  role: string;
  title: string;
  bio: string;
  avatar?: string;
  initials: string;
  accent: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: FeatureStatus;
}

export interface Course {
  id: string;
  name: string;
  programType: string;
  description: string;
  resources: string[];
  status: FeatureStatus;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  content: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FutureFeature {
  id: string;
  title: string;
  description: string;
  status: FeatureStatus;
  items: string[];
  workflow?: string;
}
