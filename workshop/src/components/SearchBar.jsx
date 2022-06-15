import React from 'react';

const SearchBar = (props) => {
  const { fetchGiphyAPI } = props;
  const handleChange = (event) => {
    fetchGiphyAPI(event.currentTarget.value);
  }

  return (
    <div>
      <input onChange={handleChange} type="text" className="form-search form-control" />
    </div>
  );
};

export default SearchBar;
