type AppConfig = {
  username: string;
  email: string;
};

type AppPermissions = {
  changeUsername: boolean;
  changeEmail: boolean;
};

[1, 2, 3].map((e) => e.toString());
// ['1','2','3']

type Users = 'John' | 'Han' | 'Kim';

type UserFirstNames = { [K in Users]: string };

const userFirstNamesInfo: UserFirstNames = {
  John: 'Doe',
  Han: 'Ho',
  Kim: 'Jun',
};

type Users2 = 'John' | 'Han' | 'Kim';

type UserFirstNames2 = { [K in Users]: number };

const userFirstNamesInfo2: UserFirstNames2 = {
  John: 10,
  Han: 20,
  Kim: 30,
};

type DeviceFormatter1<T> = {
  [K in keyof T]: T[K];
};

type Device1 = {
  manufacturer?: string;
  price?: number;
};

const iphone1: DeviceFormatter1<Device1> = { manufacturer: 'apple', price: 100 };

const priceOnly1: DeviceFormatter1<Device1> = { price: 23 };
const manufacturerOnly1: DeviceFormatter1<Device1> = { manufacturer: 'apple' };
const empty1: DeviceFormatter1<Device1> = {};

type DeviceFormatter2<T> = {
  [K in keyof T]?: T[K];
};

type Device2 = {
  manufacturer: string;
  price: number;
};

const iphone2: DeviceFormatter2<Device2> = { manufacturer: 'apple', price: 100 };

const priceOnly2: DeviceFormatter2<Device2> = { price: 23 };
const manufacturerOnly2: DeviceFormatter2<Device2> = { manufacturer: 'apple' };
const empty2: DeviceFormatter2<Device2> = {};
