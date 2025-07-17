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
  location?: string;
  dateRange: string;
  descriptionPoints: string[];
  logoUrl?: string;
  logoHint?: string;
  skills?: string[];
  icon?: React.ReactElement;
}

export interface EducationItem {
  id: string;
  title: string;
  specialization: string;
  institution: string;
  location: string;
  dateRange: string;
  status: string;
  description: string;
  skills: string[];
  icon?: React.ReactElement;
  level: 'superior' | 'medio' | 'secundaria';
  certificateUrl?: string;
}

