import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Media from './media';
import Responsive from '../../images/covers/responsive.jpg';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;
    return (
      <div>
        {
          playlist.map((item) => (
            <Media
              key={item.id}
              {...item}
            />
          )
        )
        }
      </div>
    );
  }
}

Playlist.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Playlist;
