"use strict";
// Boolean
let boolean;
let falseBoolean;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'kim';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['john', 'kim'];
let names2 = ['yang', 'ryu'];
// 여러 타입을 가는 배열(유니언 타입 사용)
let array1 = ['john', 1, 2];
let array2 = ['john', 1, 2];
// 여러 타입을 단언 할수 없을 때 any
let someArray1 = ['john', 1, [], {}, false];
let someArray2 = ['john', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// Tuple
let tuple1;
tuple1 = ['a', 1];
// [tuple1] = ['a', 1, 2];
// [tuple1] = [1, 'a'];
let users;
users = [
    [1, 'a'],
    [2, 'b'],
];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false)
// any
let any = 'abc';
any = 1;
any = [];
// nuknown
let unknown = '123';
// let string1: string = unknown
let string2 = unknown;
// Object
let obj = {};
let arr = [];
// let nul1: object = null;
let nul2 = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    //   description1:'description1',
};
// Union
let union;
union = 'hi';
union = 123;
// union = [];
// function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// null, undefined 은 자바스트립트에서 모든 값에 할당가능
//stric 모드에서는 할당 안됨(void에는 undefined 할당가능)
let number1 = undefined;
let string9 = null;
let void2 = undefined;
// let void3: void = null;
// let array: any[] = null;
// void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
// never 1.에러를 반드시 리턴하는 경우, 2. 값을 반드시 리턴하지 않는 경우, 3. 타입이 지정되지 않은 배열의 경우
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
const never1 = [];
const never2 = [];
// never.push(1)
// never1.push(1)
never2.push(1);
