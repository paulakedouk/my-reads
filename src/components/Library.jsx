import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
// import sortBy from 'sort-by';

class Library extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(filterBooks => {
      this.setState({ books: filterBooks });
    });
  }

  render() {
    // console.log(this.state.books);
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" shelf={`currentlyReading`} dataBook={this.state.books} />
            <Bookshelf title="Want to read" shelf={`wantToRead`} dataBook={this.state.books} />
            <Bookshelf title="Read" shelf={`read`} dataBook={this.state.books} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Library;
