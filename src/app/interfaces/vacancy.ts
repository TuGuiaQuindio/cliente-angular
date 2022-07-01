export interface Vacancy {
  id: string;
  title: string;
  description?: string;
  vacancyCount: number;
  salaryMin: number;
  salaryMax: number;
  availability: string;
}
