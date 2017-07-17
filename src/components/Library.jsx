import React, { Component } from 'react';

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
          <div>List of books</div>
        </div>
      </div>
    );
  }
}

export default Library;
