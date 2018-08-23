import React from 'react';
import PropTypes from 'prop-types';
import IconVolume from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return (
    <button className="Volume">
      <IconVolume color="white" size={25}/>
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  );
}

Volume.propTypes = {
  handleVolumeChange: PropTypes.func.isRequired,
};

export default Volume;
