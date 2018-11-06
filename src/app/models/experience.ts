export class Experience {
  title: string;
  company?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  bullets?: Array<string>;
}

export type Experiences = Array<Experience>;
