import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <button onClick={props.handleClick}>Cerrar</button>
    </div>
  );
}

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
