export type SocialLink = {
  label: string;
  href: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type ProjectLinkSet = {
  live?: string;
  github?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectChallenge = {
  title: string;
  solution: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  year: string;
  featured: boolean;
  role: string;
  period: string;
  status: string;
  tech: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  challenges: ProjectChallenge[];
  links: ProjectLinkSet;
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  date: string;
  summary: string;
  points: string[];
  techStack: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Hobby = {
  title: string;
  description: string;
  note: string;
};

export type PortfolioContent = {
  updatedAt: string;
  meta: {
    siteTitle: string;
    siteDescription: string;
    siteUrl: string;
  };
  profile: {
    name: string;
    title: string;
    subtitle: string;
    intro: string;
    location: string;
    availability: string;
    email: string;
    profileImage: string;
    heroImage: string;
    aboutImage: string;
    resumeUrl: string;
    resumeLabel: string;
    socials: SocialLink[];
  };
  focusAreas: FocusArea[];
  stats: Stat[];
  about: {
    summary: string;
    detail: string;
    principles: string[];
  };
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  projects: Project[];
  hobbies: Hobby[];
  contact: {
    headline: string;
    description: string;
    availabilityNote: string;
  };
};
