import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from '../BooksAPI';
// import sortBy from 'sort-by';

class Library extends Component {
  state = {
    // showSearchPage: true,
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(filterBooks => {
      this.setState({ books: filterBooks });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" shelves={`currentlyReading`} books={this.state.books} />
            <Bookshelf title="Want to Read" shelves={`wantToRead`} books={this.state.books} />
            <Bookshelf title="Read" shelves={`read`} books={this.state.books} />
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
