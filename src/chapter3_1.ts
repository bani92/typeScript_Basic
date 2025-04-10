/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // number 리터럴 타입 -> 넘버타입 (업캐스팅)

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌",
  color: "brown",
  breed: "진돗",
};

animal = dog; // 업캐스팅
// dog = animal; // 다운캐스팅

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "자바스크립트",
  price: 33000,
  skill: "javascript",
};

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "자바스크립트",
  price: 33000,
  // skill: "javascript",
};

let book3: Book = programmingBook;

function func(book: ProgrammingBook) {}
func({
  name: "자바스크립트",
  price: 33000,
  skill: "javascript",
});
