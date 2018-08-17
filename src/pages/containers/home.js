import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Related from '../components/related';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
        <ModalContainer>
          <h1>Hola soy un modal!</h1>
        </ModalContainer>
      </HomeLayout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
