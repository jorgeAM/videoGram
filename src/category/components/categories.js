import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';

function Categories(props) {
  const categories = props.data.categories;
  return (
    <div className="Categories">
      {
        categories.map((category) => (
          <Category
            key={category.id}
            data={category}
          />
        )
      )
      }
    </div>
  );
}

Categories.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Categories;
