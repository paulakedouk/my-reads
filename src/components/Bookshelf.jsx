import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

class Bookshelf extends Component {
  static PropTypes = {
    changeBook: PropTypes.func.isRequired
  };

  render() {
    let dataBook = this.props.dataBook;
    let shelf = this.props.shelf;
    let title = this.props.title;
    let moveBook;

    moveBook = dataBook.filter(book => book.shelf === shelf);

    //console.log(dataBook);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {moveBook.map(book => <IndividualBook changeBook={this.props.changeBook} book={book} key={book.id} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
