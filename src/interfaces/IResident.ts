import { IResidence } from './IResidence';

export interface ResidentsList {
  birthDate: string;
  createdAt: string;
  document: string;
  firstName: string;
  id: string;
  income: any[];
  lastName: string;
  registerNumber: number;
  residence: IResidence;
  residenceId: string;
  shopping: any[];
  updatedAt: string;
}
