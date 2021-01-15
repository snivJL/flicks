import React from "react";
import "./searchform.scss";

const SearchForm = ({ onChange }) => {
  return (
    <div>
      <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          onChange={onChange}
          placeholder="Filter..."
          autofocus
          required
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchForm;
