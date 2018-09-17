import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  setInputRef = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    console.log();
    /*DISPARAMOS EVENTO*/
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.setInputRef.current.value,
      },
    });
  };

  render() {
    return (
      <Search setRef={this.setInputRef} handleSubmit={this.handleSubmit}/>
    );
  }
}

/*CONECTAMOS A STORE*/
export default connect()(SearchContainer);
