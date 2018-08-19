import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist handleClick={props.handleClick} playlist={props.playlist}/>
    </div>
  );
}

Category.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
};

export default Category;
