// Partial

interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: 'john@abc.com' };
const all: Address = { email: 'yang@abc.com', address: 'john' };

// Pick

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo1: Partial<Todo> = {
  title: 'Clean Room',
  completed: false,
};
const todo2: TodoPreview = {
  title: 'Clean Room',
  completed: false,
};

// Omit
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type TodoPreview2 = Omit<Todo2, 'description'>;

const todo3: TodoPreview2 = {
  title: 'clean room',
  completed: false,
  createAt: 12341234,
};

// Exclude (interface 에서 타입을 제거하는 것이 아닌 type 에서 타입을 제거할 때 사용하는 듯하다.)

// Required

type User = {
  firstName: string;
  lastName?: string;
};

let firstName: User = {
  firstName: 'yang',
};

// let secondUser: Required<User> = {
//   firstName: 'john'
// }

// Record <Keys,Type>

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'morderd';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'persian' },
  boris: { age: 5, breed: 'maine coon' },
  morderd: { age: 16, breed: 'british shorthair' },
};

// ReturnType<T>

type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = 'hello';
// const b: ReturnType<typeof fn> = true; //error
