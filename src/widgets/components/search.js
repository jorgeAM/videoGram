import React from 'react';
import './search.css';

const Search = (props)  => (
  <form onSubmit={props.handleSubmit} className="Search">
    <input
      ref={props.setRef}
      className="Search-input"
      type="text"
      placeholder="Busca tu video favorito"
      name="seach"
    />
  </form>
);

export default Search;
