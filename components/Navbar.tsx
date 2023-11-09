import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/books" className="nav-link">
              Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
