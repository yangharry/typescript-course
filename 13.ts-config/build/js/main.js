"use strict";
// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//   return arr.length;
// }
// function getArrayLength<T>(arr: T[]): number {
//   return arr.length;
// }
// const array1 = [1, 2, 3, 4];
// const array2 = ['a', 'b', 'c'];
// const array3 = [false, true, true];
// getArrayLength<number>(array1);
// getArrayLength<string>(array2);
// getArrayLength<boolean>(array3);
// interface Vehicle<T> {
//   name: string;
//   color: string;
//   option: T;
// }
// const cart: Vehicle<{ price: number }> = {
//   name: 'car',
//   color: 'red',
//   option: { price: 1000 },
// };
// const bike: Vehicle<boolean> = {
//   name: 'bike',
//   color: 'green',
//   option: true,
// };
const makeArr = (x, y) => {
    return [x, y];
};
const array1 = makeArr(4, 5);
const array2 = makeArr('a', 'b');
const makeArr1 = (x, y) => {
    return [x, y];
};
const array3 = makeArr1('a', 'b');
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
makeFullName({ firstName: 'yang', lastName: 'heeil', location: 'seoul' });
// makeFullName({  lastName: 'heeil', location: 'seoul' });
makeFullName({ firstName: 'yang', lastName: 'heeil', hello: 'hello' });
