import PageTitle from "@/components/PageTitle";
import CreateForm from "./BookForm";

const CreateBook = async () => {
  return (
    <main>
      <PageTitle title="Add book" />
      <CreateForm />
    </main>
  );
};

export default CreateBook;
