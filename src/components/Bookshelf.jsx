import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

class Bookshelf extends Component {
  static PropTypes = {
    moveBook: PropTypes.func.isRequired
  };

  render() {
    let dataBook = this.props.dataBook;
    let moveBook = this.props.moveBook;
    let shelf = this.props.shelf;
    let title = this.props.title;
    let whatShelf;

    whatShelf = dataBook.filter(book => book.shelf === shelf);

    console.log(whatShelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {whatShelf.map(book => <IndividualBook moveBook={moveBook} book={book} key={book.id} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
