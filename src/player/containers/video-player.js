import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Video from '../components/video';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
  state = {
    pause: false,
  };

  togglePlay = () => {
    this.setState(prevState => ({
      pause: !prevState.pause,
    }));
  };

  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Hola Crrano"/>
        <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
        <Video
          autoplay={false}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    );
  }
}

VideoPlayer.propTypes = {
  pause: PropTypes.bool.isRequired,
};

export default VideoPlayer;
