/**
 * 첫번째
 */

// swap 의 첫번째 매개변수가 string이기때문에 같은 b:T도 string 으로 해줘야하기때문에 컴파일 오류
// function swap<T>(a: T, b: T) {
//   return [b, a];
// }

// const [a, b] = swap("1", 2);

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// hello

/**
 * 세번째
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });
