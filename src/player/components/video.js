import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './video.css';

class Video extends Component {
  render() {
    const { handleLoadedMetaData, handleTimeUpdate } = this.props;
    return (
      <div className="Video">
        <video
          ref={this.props.setRef}
          autoPlay={this.props.autoplay}
          src={this.props.src}
          /*Duración del video*/
          onLoadedMetadata={handleLoadedMetaData}
          /*Tiempo transcurrido*/
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    );
  }
}

Video.propTypes = {
  autoplay: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  setRef: PropTypes.object.isRequired,
  handleLoadedMetaData: PropTypes.func.isRequired,
};

export default Video;
