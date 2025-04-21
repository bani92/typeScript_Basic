/**
 * 인터페이스
 */

// 함수 타입 표현식 // sayHi:() => void;
// 호출 시그니처
interface Person {
  readonly name: string;
  age?: number;

  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("Hi");
  },
};
