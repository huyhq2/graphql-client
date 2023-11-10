import Image from "next/image";
import { BookInfo } from "../../interface/book";
import bookPhoto from "../../public/book-photo.avif";

interface BookItemProps {
  book: BookInfo;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-xl hover:shadow-2xl transform duration-500 cursor-pointer">
      <div className="p-4">
        <h1
          className="mt-2 text-xl font-semibold hover:underline cursor-pointer line-clamp-1"
          title={book.name}>
          {book.name}
        </h1>
        <p className="mt-1 font-sans text-gray-700 cursor-pointer text-sm">
          by <span>{book.author?.name ? book.author.name : "-"}</span>
        </p>
      </div>
      <div className="relative h-56">
        <Image
          fill
          alt={book.name}
          src={bookPhoto}
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default BookItem;
