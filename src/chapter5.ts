// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "KO",
  english = "EN",
}

const user1 = {
  name: "ban",
  role: Role.ADMIN,
  language: Language.korean,
};
const user2 = {
  name: "hong",
  role: Role.USER,
};
const user3 = {
  name: "default",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
