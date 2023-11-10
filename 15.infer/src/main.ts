type AType<T> = T extends infer R ? R : null;

const a: AType<number> = 1;

type BType<T> = T extends { a: infer A; b: 1 } ? A : any;

type Inferred = BType<{ a: 'hi'; b: 1 }>;

type Ctype<T> = T extends { a: infer A; b: infer B } ? A & B : any;

type Inferred2 = Ctype<{ a: { someAProps: 1 }; b: { someBProps: 2 } }>;

// type MyReturnType = ReturnType

// type T0 = ReturnType<() => string>;
// type T1 = ReturnType<(s: string) => void>;

// function fn(str: string) {
//   return str;
// }
// type T2 = ReturnType<typeof fn>;

type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type MyReturnType = ReturnType1<() => number>;
