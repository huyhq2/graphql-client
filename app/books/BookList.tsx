import { BOOKS_QUERY } from "@/graphql/queries";
import { getClient } from "@/lib/client";
import React from "react";
import BookItem from "./BookItem";
import Link from "next/link";
import { BookInfo } from "@/interface/book";

export const dynamic = "force-dynamic";

interface Response {
  books: BookInfo[];
}

const BookList = async () => {
  const data = await getClient().query<Response>({ query: BOOKS_QUERY });
  console.log(data.data);
  return (
    <div className="row">
      {data.data.books?.map((book: BookInfo) => (
        <Link key={book.id} className="col-3 g-2" href={`books/${book.id}`}>
          <BookItem book={book} />
        </Link>
      ))}
    </div>
  );
};

export default BookList;
