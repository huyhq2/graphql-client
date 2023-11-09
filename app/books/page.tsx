import { Suspense } from "react";
import BookList from "./BookList";
import Loading from "@/components/Loading";
import PageTitle from "@/components/PageTitle";

const Books = () => {
  return (
    <main>
      <div className="container">
        <PageTitle title="Books"/>
        <Suspense fallback={<Loading />}>
          <BookList />
        </Suspense>
      </div>
    </main>
  );
};

export default Books;
