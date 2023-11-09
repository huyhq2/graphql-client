import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed  w-full flex justify-between items-center px-10 h-14 bg-white z-50">
      <h1 className="text-xl text-gray-800 font-bold">Book Info</h1>
      <div className="flex items-center ">
        <Link
          href="/"
          className="no-underline text-gray-500 hover:text-gray-600 font-bold w-20 text-center">
          Home
        </Link>
        <Link
          href="/books"
          className="no-underline text-gray-500 hover:text-gray-600 font-bold w-20 text-center">
          Books
        </Link>
        <div className="flex items-center">
          <input
            className="ml-2 outline-none bg-transparent font- border-gray-100"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
