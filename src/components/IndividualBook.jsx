import React, { Component } from 'react';

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
        <div className="book-title">Book title</div>
        <div className="book-authors">Book author</div>
      </div>
    );
  }
}

export default IndividualBook;
