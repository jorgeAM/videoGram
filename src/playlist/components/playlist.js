import React from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/fullScreen';
import './playlist.css';

function Playlist(props) {
  const playlist = props.data.playlist;
  return (
    <div className="Playlist">
      {
        playlist.map((item) => (
          <Media
            key={item.id}
            {...item}
          />
        )
      )
      }
    </div>
  );
}

Playlist.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Playlist;
