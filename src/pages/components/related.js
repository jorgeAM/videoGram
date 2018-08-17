import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../images/logo.png';
import './related.css';

function Related(props) {
  return (
    <div className="Related">
      <img src={logo} width={250}/>
    </div>
  );
}

export default Related;
