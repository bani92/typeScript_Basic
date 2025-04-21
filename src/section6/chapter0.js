/**
 * 클래스
 */

let studentA = {
  name: "hong",
  grade: "A+",
  age: 27,
  study() {
    console.log("공부하는중");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// 파스칼 표기법
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부하는중");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("hong2", "B+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper("ban", "C+", 22, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
