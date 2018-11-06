import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
/*REACT-ROUTER*/
import { Link } from 'react-router-dom';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <Link to='/videos'>
        <button className="Modal-close" onClick={props.handleCloseModal}/>
      </Link>
    </div>
  );
}

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
