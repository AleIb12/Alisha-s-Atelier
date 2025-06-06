export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id:string;
  title: string;
  company: string;
  dateRange: string;
  descriptionPoints: string[];
  logoUrl?: string;
  logoHint?: string;
  skills?: string[];
}
