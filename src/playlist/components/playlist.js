import React from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import './playlist.css';

function Playlist(props) {
  const playlist = props.data.categories[0].playlist;
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
