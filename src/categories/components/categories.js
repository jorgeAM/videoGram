import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';

function Categories(props) {
  return (
    <div>
      {
        props.categories.map((category) => (
          <Category key={category.id} {...category}/>
        )
      )
      }
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;
