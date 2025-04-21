interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/**
 * 인터페이스 합침
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c?: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
