import Nav from '@/components/nav';

const SearchPage = () => {
  

  return (
    <div>
      <Nav/>
      <h1>Search Employee</h1>
      <form >
        <div>
          <label>Search:</label>
          <input type="text" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
