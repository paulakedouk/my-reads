import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IndividualBook extends Component {
  render() {
    const { image } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${image}")`
            }}
          />
        </div>
        <div className="book-title">
          {this.props.title}
        </div>
        <div className="book-authors">
          {this.props.author}
        </div>
      </div>
    );
  }
}

IndividualBook.PropTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string
};

export default IndividualBook;
