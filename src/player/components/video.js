import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './video.css';

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <video
          ref={this.props.setRef}
          controls
          autoPlay={this.props.autoplay}
          src={this.props.src}
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
