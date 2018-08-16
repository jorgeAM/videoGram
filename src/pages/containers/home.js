import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
