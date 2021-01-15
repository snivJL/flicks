import React from "react";

const SearchForm = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        id="search-input"
        placholder="Search..."
      />
      <button type="button">Search</button>
    </div>
  );
};

export default SearchForm;
