import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <button className="Modal-close" onClick={props.handleCloseModal}/>
    </div>
  );
}

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
