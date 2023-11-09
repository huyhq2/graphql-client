import { Suspense } from "react";
import BookList from "./BookList";
import Loading from "@/components/Loading";

const Books = () => {
  return (
    <main>
      <div className="container">
        <nav className="mb-5">Books</nav>
        <Suspense fallback={<Loading />}>
          <BookList />
        </Suspense>
      </div>
    </main>
  );
};

export default Books;
