import React from 'react';
import PropTypes from 'prop-types';
import IconFullScreen from '../../icons/components/fullScreen';
import './full-screen.css';

function FullScreen(props) {
  return (
    <div onClick={props.handleFullScreenClick} className="FullScreen">
      <IconFullScreen color="white" size={25}/>
    </div>
  );
}

FullScreen.propTypes = {
  handleFullScreenClick: PropTypes.func.isRequired,
};

export default FullScreen;
