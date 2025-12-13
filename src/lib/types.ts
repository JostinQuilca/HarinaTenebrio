export interface Course {
  id: number;
  courseNumber: string;
  title: string;
  description: string;
  storytelling: string;
  characteristics: string[];
  steps: string[];
  techniques: string;
  sensoryProfile: string;
  ods: string[];
  academicSustenance: string;
  image: {
    id: string;
  };
}
