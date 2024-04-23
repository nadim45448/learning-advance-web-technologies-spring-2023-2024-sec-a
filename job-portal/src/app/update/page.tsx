import Nav from '@/components/nav';

const UpdatePage = () => {
  

  return (
    <div>
      <Nav/>
      <h1>Update Employee</h1>
      <form >
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Company Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Contact No:</label>
          <input type="text" />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePage;
