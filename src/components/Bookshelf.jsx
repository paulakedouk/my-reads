import React, { Component } from 'react';
import IndividualBook from './IndividualBook';

class Bookshelf extends Component {
  render() {
    let dataBook = this.props.dataBook;
    let shelf = this.props.shelf;
    let title = this.props.title;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {dataBook.map(book => <IndividualBook book={book} key={book.id} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
