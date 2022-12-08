function Search({ searchValue, setSearchValue }) {
  return (
    <div>
      <label htmlFor="searchbar" className="form-label">
        Search books
      </label>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        type="search"
        className="form-control"
        id="searchbar"
        placeholder="Start typing..."
      />
    </div>
  );
}

export default Search;
