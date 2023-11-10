// Boolean
let boolean: boolean;
let falseBoolean: boolean;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.2345;

// String
let string: string;
let firstName: string = 'kim';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['john', 'kim'];
let names2: Array<string> = ['yang', 'ryu'];

// 여러 타입을 가는 배열(유니언 타입 사용)

let array1: (string | number)[] = ['john', 1, 2];
let array2: Array<string | number> = ['john', 1, 2];

// 여러 타입을 단언 할수 없을 때 any
let someArray1: any[] = ['john', 1, [], {}, false];
let someArray2: Array<any> = ['john', 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// [tuple1] = ['a', 1, 2];
// [tuple1] = [1, 'a'];

let users: [number, string][];
users = [
  [1, 'a'],
  [2, 'b'],
];

let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false)

// any
let any: any = 'abc';

any = 1;
any = [];

// nuknown
let unknown: unknown = '123';

// let string1: string = unknown
let string2: string = unknown as string;

// Object

let obj: object = {};
let arr: object = [];
// let nul1: object = null;
let nul2: null = null;
let date: object = new Date();

const obj1: { id: number; title: string } = {
  id: 1,
  title: 'title1',
  //   description1:'description1',
};

// Union
let union: string | number;
union = 'hi';
union = 123;
// union = [];

// function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y;
};

let func2: () => void;
func2 = function () {
  console.log('hi');
};

// null, undefined 은 자바스트립트에서 모든 값에 할당가능
//stric 모드에서는 할당 안됨(void에는 undefined 할당가능)
let number1: undefined = undefined;
let string9: null = null;
let void2: void = undefined;
// let void3: void = null;
// let array: any[] = null;

// void (리턴값이 없는 void 는 undefined 할당가능)
function greeting(): void {
  console.log('hi');
}

const hi = greeting();
console.log(hi); // undefined

// never 1.에러를 반드시 리턴하는 경우, 2. 값을 반드시 리턴하지 않는 경우, 3. 타입이 지정되지 않은 배열의 경우
function throwError(): never {
  throw new Error('error');
}

function keepProcessing(): never {
  while (true) {
    console.log('hi');
  }
}

const never: [] = [];
const never1: never[] = [];
const never2: number[] = [];
// never.push(1)
// never1.push(1)
never2.push(1);
