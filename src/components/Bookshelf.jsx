import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array,
    shelves: PropTypes.string
  };

  render() {
    let books = this.props.books;
    let shelves = this.props.shelves;
    let showingBooks;

    showingBooks = books.filter(book => book.shelf === shelves);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book, index) => <IndividualBook book={book} key={index} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
