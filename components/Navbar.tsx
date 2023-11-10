import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed  w-full flex justify-between items-center px-10 h-14 bg-white z-50">
      <h1 className="text-xl text-gray-800 font-bold">Book Info</h1>
      <div className="flex items-center ">
        <Link
          href="/"
          className="no-underline text-gray-500 hover:text-gray-600 font-bold px-3  text-center">
          Home
        </Link>
        <Link
          href="/books"
          className="no-underline text-gray-500 hover:text-gray-600 font-bold px-3 text-center">
          Books
        </Link>
        <Link
          href="/books/add"
          className="no-underline text-gray-500 hover:text-gray-600 font-bold px-3 text-center">
          Management
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
