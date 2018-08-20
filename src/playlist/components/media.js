import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  state = {
    author: this.props.author,
    title: this.props.title,
    cover: this.props.cover,
    handleClick: this.props.handleClick,
  };

  render() {
    return (
      <div className="Media" onClick={this.state.handleClick}>
        <div className="Media-cover">
          <img
            src={this.state.cover}
            alt="Cover" width={260} height={160} className="Media-image"/>
          <h3 className="Media-title">{this.state.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['audio', 'video']),
  handleClick: PropTypes.func.isRequired,
};

export default Media;
