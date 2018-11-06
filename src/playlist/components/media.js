import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';
/*REACT-ROUTER*/
import { Link } from 'react-router-dom';

class Media extends PureComponent {
  state = {
    author: this.props.author,
    title: this.props.title,
    cover: this.props.cover,
    openModal: this.props.openModal,
  };

  handleClick = () => {
    this.state.openModal(this.props);
  };

  render() {
    return (
      <Link to={{
        pathname: '/videos',
        search: `?id=${this.props.id}`,
      }}>
        <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img
              src={this.state.cover}
              alt="Cover" width={260} height={160} className="Media-image"/>
            <h3 className="Media-title">{this.state.title}</h3>
            <p className="Media-author">{this.state.author}</p>
          </div>
        </div>
      </Link>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['audio', 'video']),
  openModal: PropTypes.func.isRequired,
};

export default Media;
