import { Language } from "../core/interfaces/guide";

export interface Vacancy {
  id: string;
  title: string;
  description?: string;
  vacancyCount: number;
  salaryMin: number;
  salaryMax: number;
  availability: string;
  languages: Language[];
}
