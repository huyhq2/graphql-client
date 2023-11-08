"use client";

import { useQuery } from "@apollo/client";
import { BOOKS_QUERY } from "../graphql/queries";
import { BookInfo } from "../interface/book";
import BookItem from "./BookItem";
import Link from "next/link";
import "../../styles/Button.module.css";

const Books = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: ${error.message}</div>;

  return (
    <main>
      <div className="container">
        <nav className="mb-5">Books</nav>
        <div className="row">
          {data.books?.map((book: BookInfo) => (
            <Link key={book.id} className="col-3 g-2" href={`books/${book.id}`}>
              <BookItem book={book} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Books;
