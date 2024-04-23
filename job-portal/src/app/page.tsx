import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1><b>Welcome to Employee Management System</b></h1><br /><br />
      <p>This system allows you to manage employee information.</p><br /><br />
      <ul>
        <li>
          <Link href="/register">Register Employee</Link>
        </li>
        <li>
          <Link href="/update">Update Employee</Link>
        </li>
        <li>
          <Link href="/search">Search Employee</Link>
        </li>
        <li>
          <Link href="/delete">Delete Employee</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Home;
