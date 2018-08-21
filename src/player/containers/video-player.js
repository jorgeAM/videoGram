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

  setVideoRef = React.createRef();

  togglePlay = () => {
    this.setState(prevState => ({
      pause: !prevState.pause,
    }));

    this.state.pause ? this.setVideoRef.current.pause() : this.setVideoRef.current.play();
    console.log(this.setVideoRef.current.duration);
  };

  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Hola Crrano"/>
        <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
        <Video
          setRef={this.setVideoRef}
          autoplay={false}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
