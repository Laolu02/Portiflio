import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}