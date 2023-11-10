import ErrorMessage from "@/components/ErrorMessage";
import Loading from "@/components/Loading";
import PageTitle from "@/components/PageTitle";

import { GET_BOOK_BY_ID_QUERY } from "@/graphql/queries";
import { BookInfo } from "@/interface/book";
import { getClient } from "@/lib/client";
import Image from "next/image";
import bookPhoto from "../../../public/book-photo.avif";
import { Suspense } from "react";
import RelevantBookList from "./RelevantBookList";

interface Response {
  book: BookInfo;
}

const BookDetails = async ({ params }: { params: { id: string } }) => {
  const { data, loading, error } = await getClient().query<Response>({
    query: GET_BOOK_BY_ID_QUERY,
    variables: { id: params.id },
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    data && (
      <main>
        <PageTitle title="Book details" />
        <div className="lg:flex md:gap-3 mb-3">
          <div className="mb-5  lg:w-1/3 flex items-center justify-center lg:mx-3 xl:mx-5 lg:mb-0">
            <Image alt="book image" src={bookPhoto} placeholder="blur" />
          </div>
          <div className="lg:w-2/3 mb-2">
            <h3 className="text-3xl font-bold mb-1">{data.book?.name}</h3>
            <div className="mb-3 text-sm ">
              <div>
                <span className="text-gray-500">Author:</span>
                &nbsp;
                <span className="hover:underline cursor-pointer">
                  {data.book?.author?.name}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Genre:</span>
                &nbsp;{data.book?.genre}
              </div>
            </div>
            <p className="mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="mb-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
          </div>
        </div>

        <hr />
        <Suspense fallback={<Loading />}>
          <RelevantBookList authorId={data.book?.author?.id} />
        </Suspense>
      </main>
    )
  );
};

export default BookDetails;
