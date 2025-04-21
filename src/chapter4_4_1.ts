/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScrath: boolean;
};

type Animal = Dog | Cat;

// 참이면 return 되는 타입은 Dog 이다
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// 참이면 return 되는 타입은 Cat 이다
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScrath !== undefined;
}
function warning(animal: Animal) {
  if (isDog(animal)) {
    animal; // 타입 dog
    //   } else if ("isScrath" in animal) {
    //     animal; 이거는 isScrath 가 변경되면 수정해줘야하기때문에 유지보수성이 떨어짐
    //     }
  } else if (isCat(animal)) {
    animal; // 타입 cat
  }
}
