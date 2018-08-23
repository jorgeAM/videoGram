import React from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/fullScreen';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => (
          <Media
            key={item.id}
            {...item}
            openModal={props.handleClick}
          />
        )
      )
      }
    </div>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Playlist;
