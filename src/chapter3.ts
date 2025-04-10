// Unknown 타입

function unkownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;

  let unknownVar: unknown;

  // let num: number = unknownVar; // 다운캐스팅 불가능
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // never -> number 업캐스팅 가능

  // let never1: never = 10; // number -> never 다운캐스팅 불가능
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined; // undefined -> void 업캐스팅 가능
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  anyVar = unknownVar; // unknown -> any 다운캐스팅 가능
  // neverVar = anyVar; // any -> never 다운캐스팅 불가능
}
