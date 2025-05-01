/**
 * Partial<T>
 * -> 부분적인, 일부분의
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  tumURl?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withTumPost: Required<Post> = {
  title: "한입 후기",
  tags: ["ts"],
  content: "",
  tumURl: "http://",
};

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 */
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};
