import { ExperienceDescriptionTopic } from './ExperienceDescriptionTopic';

export interface Experience {
  role: string;
  company: string;
  jobStartDate: string;
  jobEndDate?: string;
  location: string;
  description: ExperienceDescriptionTopic[];
}
