/**
 * 함수 오버로딩
 * 하나의 함수 func
 * 모든 매개변수의 타입 number
 * 매개변수가 1개 - 이 매개변수에 20을 곱한 값 출력
 * 매개변수가 3개 - 이 매개변수를 다 더한 값 출력
 */

// 버전들 - 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현뷰 - 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
