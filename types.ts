export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string | string[];
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name
}

export enum Sender {
  User = 'user',
  Bot = 'bot',
  System = 'system'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: number;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}