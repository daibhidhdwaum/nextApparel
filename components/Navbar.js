import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>nextApparel</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Men</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Women</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
