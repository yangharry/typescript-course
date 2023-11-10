// type SomeType = T extends U ? X : Y;
type SomeType = string;
type ConditionalType = SomeType extends string ? string : null;

// type SomeType = T extends U ? X : Y;
type SomeType1 = number;
type ConditionalType1 = SomeType1 extends string ? string : null;

function fn1<T>(value: T) {
  const fn2 = (arg: T extends boolean ? 'A' : 'B') => {};
  return fn2;
}

const reuslt = fn1(true);

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never; // 유니언 타입 사용시 never 제거됨

const A: StringOrNot<string> = 'string';

// type Exclude<T,U> = T extends U ? never : T;

type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

/*
 'a' extends 'a' | 'b' ? never : 'a' ===> never
 'b' extends 'a' | 'b' ? never : 'b' ===> never
 'c' extends 'a' | 'b' ? never : 'c' ===> c
*/

type AType1<T> = T extends string | number ? T : never;

type MyResult1 = AType1<string | number | boolean>; // string | number

type AType2<T> = (() => T) extends () => string | number ? T : never;

type MyResult2 = AType2<string | number | boolean>; // never

type AType3<T> = [T] extends [string | number] ? T : never;

type MyResult3 = AType3<string | number | boolean>; //never
