import {PutUser, RegisterUser, Role, UserFormData,} from 'src/app/shared/models/user.model';

export function buildPutUserFromUserFormData(user: UserFormData): PutUser {
  delete user.id;
  if (user.password.length === 0) {
    delete user.password;
  }
  const role: Role = Role[user.role];
  const birthDate: Date = new Date(user.birthDate);
  const isActive: boolean = user.isActive === 'true';
  return { ...user, role, birthDate, isActive };
}

export function buildPostUserFromUserFormData(
  user: UserFormData
): RegisterUser {
  delete user.id;
  const role: Role = Role[user.role];
  const birthDate: Date = new Date(user.birthDate);
  const newsletter: boolean = user.newsletter === 'true';
  const isActive: boolean = user.isActive === 'true';
  return { ...user, role, birthDate, isActive, newsletter };
}
