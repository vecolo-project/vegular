export type User = {
  firstName: string,
  lastName: string,
  birthDate: Date,
  email: string,
  pseudo: string,
  newsletter: string,
  role: Role
};

export enum Role {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  CLIENT = 'CLIENT'
}
