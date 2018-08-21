import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './video.css';

class Video extends Component {
  render() {
    const { handleLoadedMetaData } = this.props;
    return (
      <div className="Video">
        <video
          ref={this.props.setRef}
          controls
          autoPlay={this.props.autoplay}
          src={this.props.src}
          onLoadedMetadata={handleLoadedMetaData}
        />
      </div>
    );
  }
}

Video.propTypes = {
  autoplay: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  setRef: PropTypes.object.isRequired,
};

export default Video;
