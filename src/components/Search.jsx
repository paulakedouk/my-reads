import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  state = {
    query: ''
  };

  render() {
    const { books } = this.props;
    const { query } = this.state;

    let showingBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = books.filter(book => match.test(book.name));
    } else {
      showingBooks = books;
    }

    showingBooks.sort(sortBy('name'));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          {JSON.stringify(this.state)}
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default Search;
