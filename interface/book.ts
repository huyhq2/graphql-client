export interface BookInfo {
  id: string;
  name: string;
  genre: string;
  author: {
    id: string;
    name: string;
    age: number;
  };
}
