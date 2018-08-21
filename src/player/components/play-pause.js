import React from 'react';
import PropTypes from 'prop-types';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import './play-pause.css';

const PlayPause = (props) => (
  <div className="PlayPause">
    {
      props.pause ?
      <button onClick={props.handleClick}>
        <Pause color="white" size={25}/>
      </button>
      :
      <button onClick={props.handleClick}>
        <Play color="white" size={25}/>
      </button>
    }
  </div>
);

PlayPause.propTypes = {
  handleClick: PropTypes.func.isRequired,
  pause: PropTypes.bool.isRequired,
};

export default PlayPause;
