/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  tumURl?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'tumURl'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 */
// Pick<Post, "content" | "tags" | "tumURl">
// Omit<Post, "title">
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post , K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'tumURl', 'title'>>
// Pick<Post,  'tags' | 'content' | 'tumURl'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  tumURl: "",
};

/**
 * Record<K, V>
 */

type ThumLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
type Thum = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
