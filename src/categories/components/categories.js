import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';
import SearchContainer from '../../widgets/containers/search';
import './categories.css';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <SearchContainer/>
      {
        props.search.map((item) => (
          <Media key={item.id} {...item} openModal={props.handleOpenModal}/>
        ))
      }
      {
        props.categories.map((category) => (
          <Category key={category.id} {...category} handleClick={props.handleOpenModal}/>
        )
      )
      }
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Categories;
