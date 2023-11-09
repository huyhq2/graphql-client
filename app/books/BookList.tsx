import { BOOKS_QUERY } from "@/graphql/queries";
import { getClient } from "@/lib/client";
import React from "react";
import BookItem from "./BookItem";
import Link from "next/link";
import { BookInfo } from "@/interface/book";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

export const dynamic = "force-dynamic";

interface Response {
  books: BookInfo[];
}

const BookList = async () => {
  const { data, loading, error } = await getClient().query<Response>({
    query: BOOKS_QUERY,
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.books?.map((book: BookInfo) => (
        <div key={book.id} className="rounded overflow-hidden ">
          <Link href={`books/${book.id}`}>
            <BookItem book={book} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
