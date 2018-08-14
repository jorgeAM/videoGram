import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
  const category = props.data.categories[0];
  return (
    <div className="Category">
      <h1>{category.title}</h1>
      <h3>{category.description}</h3>
      <Playlist data={props.data}/>
    </div>
  );
}

Category.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Category;
