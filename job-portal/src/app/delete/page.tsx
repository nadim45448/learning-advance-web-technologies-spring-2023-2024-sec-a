import Link from 'next/link';

const DeletePage = () => {


  return (
    <div>
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
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <h1>Delete Employee</h1>
      <p>Are you sure you want to delete this employee?</p>
      <button>Delete</button>
    </div>
  );
};

export default DeletePage;
