import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/update">Update</Link>
        </li>
        <li>
          <Link href="/delete">Delete</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
