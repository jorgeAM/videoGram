import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import Related from '../components/related';
import PropTypes from 'prop-types';

class Home extends Component {
  state = {
    modalVisible: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible,
    }));
  };

  render() {
    return (
      <HomeLayout>
        <Related/>
        <Categories
          handleOpenModal={this.handleToggleModal}
          categories={this.props.data.categories}/>
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleCloseModal={this.handleToggleModal}>
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
