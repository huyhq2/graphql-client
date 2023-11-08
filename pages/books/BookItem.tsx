import { BookInfo } from "../interface/book";

interface BookItemProps {
  book: BookInfo;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <div>
      <div>{book.name}</div>
      <div>{book.author?.name}</div>
      <div>{book.genre}</div>
    </div>
  );
};

export default BookItem;
