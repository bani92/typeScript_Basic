/**
 * 제네릭
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let arr = func<[number, number]>([1, 2]);
