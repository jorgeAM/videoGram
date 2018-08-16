import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
  return (
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      <Playlist playlist={props.playlist}/>
    </div>
  );
}

Category.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
};

export default Category;
