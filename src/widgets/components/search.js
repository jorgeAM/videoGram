import React from 'react';
import './search.css';
/*REACT-ROUTER*/
import { Prompt } from 'react-router';

const Search = (props)  => (
  <form onSubmit={props.handleSubmit} className="Search">
    <Prompt
      when={props.warning}
      message='Seguro que quieres salir de esta sección?'
    />
    <input
      ref={props.setRef}
      className="Search-input"
      type="text"
      placeholder="Busca tu video favorito"
      onChange={props.handleChange}
      name="seach"
    />
  </form>
);

export default Search;
