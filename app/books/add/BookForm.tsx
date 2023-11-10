"use client";

import { CREATE_BOOK_MUTATION } from "@/graphql/mutations";
import { AUTHOR_LIST_QUERY, BOOKS_QUERY } from "@/graphql/queries";
import { AuthorInfo } from "@/interface/author";
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthorListResponse {
  authors: AuthorInfo[];
}

interface BookForm {
  name: string;
  genre: string;
  authorId: string;
}

const defaultValues: BookForm = {
  name: "",
  genre: "",
  authorId: "",
};

const CreateForm = () => {
  const router = useRouter();

  const { data, error } = useSuspenseQuery<AuthorListResponse>(
    AUTHOR_LIST_QUERY,
    {
      context: { fetchOptions: { cache: "force-cache" } },
    }
  );

  const [
    addBook,
    { data: mutationData, loading: mutationLoading, error: mutationErr },
  ] = useMutation(CREATE_BOOK_MUTATION);

  const [newBook, setNewBook] = useState<BookForm>(defaultValues);
  // Just use to demo validation.
  const [validateMsg, setValidateMsg] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMsg("");

    const formData = {
      name: newBook.name.trim(),
      genre: newBook.genre.trim(),
      authorId: newBook.authorId,
    };
    // Assuming validation
    if (!formData.name || !formData.genre || !formData.authorId) {
      setValidateMsg("Please fill all fields");
      return;
    }
    // Data is valid
    await addBook({
      variables: { data: formData },
      refetchQueries: [{ query: BOOKS_QUERY }],
    });
  };

  // Navigate to book details page after adding successfully
  useEffect(() => {
    if (!mutationData) return;
    router.refresh();
    router.push(`/books/${mutationData.createBook.id}`);
  }, [mutationData, router]);

  return (
    <div className="flex flex-col items-center">
      <form className="w-full max-w-lg" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-name"
              type="text"
              placeholder="Enter name"
              name="name"
              value={newBook.name}
              onChange={onChange}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-genre">
              Genre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-genre"
              type="text"
              placeholder="Enter genre"
              name="genre"
              value={newBook.genre}
              onChange={onChange}
            />
          </div>
          <div className="w-full px-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-author-id">
              Author
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-author-id"
                name="authorId"
                value={newBook.authorId}
                onChange={onChange}>
                <option value="" disabled>
                  Select author
                </option>
                {data.authors?.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-5 px-3 text-xs">
            {mutationErr?.message && (
              <div className="text-red-800 flex items-center h-full w-full">
                {mutationErr?.message}
              </div>
            )}
            {validateMsg && (
              <div className="text-red-700 flex items-center h-full w-full">
                {validateMsg}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            disabled={mutationLoading}
            className="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {mutationLoading ? "..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
