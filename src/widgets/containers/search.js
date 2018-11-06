import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  state = {
    warning: false,
  };

  setInputRef = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    /*DISPARAMOS EVENTO*/
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.setInputRef.current.value,
      },
    });
  };

  handleInputChange = ev => {
    this.setState({
      warning: !!(ev.target.value.length),
    });
  };

  render() {
    return (
      <Search
        warning={this.state.warning}
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
      />
    );
  }
}

/*CONECTAMOS A STORE*/
export default connect()(SearchContainer);
