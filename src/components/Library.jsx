import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class Library extends Component {
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
            <Bookshelf title="Currently Reading" />
            <Bookshelf title="Want to Read" />
            <Bookshelf title="Read" />
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
