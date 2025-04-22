/**
 * 인터페이스와 클래스
 */

interface CharInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharInterface {
  name: string;
  moveSpeed: number;
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
}
