import React from "react";
import "./searchform.scss";

const SearchForm = ({ onChange }) => {
  return (
    <div>
      <form role="search">
        <label htmlFor="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          onChange={onChange}
          placeholder="Filter..."
          autoFocus
          required
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchForm;
