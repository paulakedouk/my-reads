import React, { Component } from 'react';

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Book title</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <h2>book X</h2>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
