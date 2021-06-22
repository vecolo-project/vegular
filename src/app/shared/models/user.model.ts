export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  pseudo: string;
  newsletter: string;
  role: Role;
};

export type UserOut = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  birthDate: Date;
  email: string;
  pseudo: string;
  newsletter: string;
  role: Role;
};

export enum Role {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  CLIENT = 'CLIENT',
}
