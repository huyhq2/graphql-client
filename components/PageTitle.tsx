interface PageTitle {
  title: string;
}

const PageTitle = ({ title }: PageTitle) => {
  return (
    <nav className="mb-5">
      <h2 className="mb-2 text-lg">{title}</h2>
      <hr className="bg-gray-500" />
    </nav>
  );
};

export default PageTitle;
