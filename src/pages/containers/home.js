import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import Related from '../components/related';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
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
      <HandleError>
      <HomeLayout>
        <Related/>
        <Categories
          handleOpenModal={this.handleToggleModal}
          categories={this.props.data.categories}/>
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleCloseModal={this.handleToggleModal}>
              <VideoPlayer/>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
      </HandleError>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
