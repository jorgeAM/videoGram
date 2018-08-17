import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
