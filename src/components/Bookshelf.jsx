import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <IndividualBook />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

Bookshelf.PropTypes = {
  title: PropTypes.string.isRequired
};

export default Bookshelf;
