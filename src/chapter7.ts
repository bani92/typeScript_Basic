// void
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function fun2(): void {
  console.log("hello");
}

// never
// 불가능한 타입
function func3(): never {
  throw new Error();
}

// 타입호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1; 불가능(리터럴타입에는 넣을 수 없음, 다운캐스팅)
