"use strict";
// interface Aniaml {
//   name: string;
// }
// interface Bear extends Aniaml {
//   honey: boolean;
// }
// const bear1: Bear = {
//   name: 'honey bear',
//   honey: true,
// };
// type Aniaml = {
//   name: string;
// };
// type Bear = Aniaml & {
//   honey: boolean;
// };
// const bear1: Bear = {
//   name: 'honey bear',
//   honey: true,
// };
// interface 중복선언 병합가능
// interface Aniaml {
//   name: string;
// }
// interface Aniaml {
//   honey: boolean;
// }
// const bear2 = {
//   name: 'honey bear',
//   honey: true,
// };
// type 중복선언 병합 안됨
// type Aniaml = {
//   name: string;
// };
// type Aniaml = {
//   honey: boolean;
// };
// const bear3 = {
//   name: 'honey bear',
//   honey: true,
// };
