import { BookInfo } from "./book";

export interface AuthorInfo {
  id: string;
  name: string;
  age: number;
  books: BookInfo[];
}
