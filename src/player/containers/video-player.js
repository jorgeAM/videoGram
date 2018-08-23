import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Video from '../components/video';
import PlayPause from '../components/play-pause';
import VideoPlayerControls from '../components/video-player-controls';
import Timer from '../components/timer';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';

class VideoPlayer extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0,
    loading: false,
  };

  setVideoRef = React.createRef();

  togglePlay = () => {
    this.setState(prevState => ({
      pause: !prevState.pause,
    }));

    this.state.pause ? this.setVideoRef.current.pause() : this.setVideoRef.current.play();
  };

  handleLoadedMetaData = () => {
    this.setState({
      duration: this.setVideoRef.current.duration,
    });
  };

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.setVideoRef.current.currentTime,
    });
  };

  handleProgressChange = (ev) => {
    this.setVideoRef.current.currentTime = ev.target.value;
    console.log(this.setVideoRef.current.volume);
  };

  handleSeeking = () => {
    this.setState({
      loading: true,
    });
  };

  handleSeeked = () => {
    this.setState({
      loading: false,
    });
  };

  handleVolumeChange = (ev) => {
    this.setVideoRef.current.volume = ev.target.value;
  };

  render() {
    return (
      <VideoPlayerLayout>
        <Title title={this.props.title}/>
        <VideoPlayerControls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
          <Timer currentTime={this.state.currentTime} duration={this.state.duration}/>
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume handleVolumeChange={this.handleVolumeChange}/>
        </VideoPlayerControls>
        {
          this.state.loading &&
          <Spinner/>
        }
        <Video
          handleLoadedMetaData={this.handleLoadedMetaData}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          setRef={this.setVideoRef}
          autoplay={false}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
