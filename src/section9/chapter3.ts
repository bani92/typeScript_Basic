/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // infer 다음에 오는 type을 추론할수 없어서 never 타입

/**
 * 예제
 */
// T = Promise<number>
// Promise<number> Promise<Promise<number>>
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
