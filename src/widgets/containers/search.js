import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  setInputRef = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.setInputRef.current.value);
  };

  render() {
    return (
      <Search setRef={this.setInputRef} handleSubmit={this.handleSubmit}/>
    );
  }
}

export default SearchContainer;
