/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// key: "name" | "age" -> key : keyof Person -> key: keyof typeof person
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "hong",
  age: 27,
};

getPropertyKey(person, "name");
