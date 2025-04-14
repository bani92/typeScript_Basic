/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입 교집합 타입 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "string";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "1",
  color: "yellow",
  language: "123",
};

let union2: Union1 = {
  name: "",
  language: "",
};

/**
 * 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
