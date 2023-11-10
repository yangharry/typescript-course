interface IUser {
  name: string;
  age: number;
  address: string;
}

// type UserKeys = keyof IUser;

const user = {
  name: 'yang',
  age: 20,
  address: 'seoul',
};

type UserKeys = keyof typeof user;

enum UserRole {
  admin,
  manager,
}

type UserRoleKeys = keyof typeof UserRole;
