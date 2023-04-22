export interface IFormValues {
  option: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  checkbox: boolean;
}

export interface ICourses {
  id: number;
  image: string;
  title: string;
  description: string;
  descriptionMore?: string;
  occuparionArea: string[];
  requirements: string;
  requirementsMore?: string;
  duration: string;
}
