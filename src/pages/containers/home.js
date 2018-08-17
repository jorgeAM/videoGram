import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import Related from '../components/related';
import PropTypes from 'prop-types';

class Home extends Component {
  state = {
    modalVisible: true,
  };

  handleCloseModalClick = () => {
    console.log('close');
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    return (
      <HomeLayout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleClick={this.handleCloseModalClick}>
              <h1>Hola Mundo</h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
