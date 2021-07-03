export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  pseudo: string;
  newsletter: boolean;
  role: Role;
};

export type UserFormData = {
  id: null | number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthDate: string;
  pseudo: string;
  role: string;
  newsletter: string;
  isActive: string;
};

export type RegisterUser = {
  firstName: string;
  lastName: string;
  password: string;
  birthDate: Date;
  email: string;
  pseudo: string;
  newsletter: boolean;
  role: Role;
  isActive: boolean;
};

export type PutUser = {
  firstName: string;
  lastName: string;
  password?: string;
  birthDate: Date;
  email: string;
  pseudo: string;
  newsletter: string;
  role: Role;
  isActive: boolean;
};

export enum Role {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  CLIENT = 'CLIENT',
}
