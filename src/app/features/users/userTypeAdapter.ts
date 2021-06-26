import {
  UserFormData,
  PutUser,
  Role,
  RegisterUser,
} from 'src/app/shared/models/user.model';

export function buildPutUserFromUserFormData(user: UserFormData): PutUser {
  if (user.password.length === 0) {
    delete user.password;
  }
  const id: number = Number(user.id);
  const role: Role = Role[user.role];
  const birthDate: Date = new Date(user.birthDate);
  const isActive: boolean = user.isActive === 'true';
  return { ...user, id, role, birthDate, isActive };
}

export function buildPostUserFromUserFormData(
  user: UserFormData
): RegisterUser {
  delete user.id;
  const role: Role = Role[user.role];
  const birthDate: Date = new Date(user.birthDate);
  const isActive: boolean = user.isActive === 'true';
  return { ...user, role, birthDate, isActive };
}
