import { useState } from "react";

export default function GifSearch({ searchTerm, onSearchSubmit }) {
  const [searchInput, setSearchInput] = useState(searchTerm);

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearchSubmit(searchInput);
    console.log('search submitted', searchInput);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchForm">
        <label htmlFor="searchTerm">
          Search For: <input type="text" name="searchTerm" placeholder="Search Giphy" value={searchInput} onChange={handleChange} /></label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
