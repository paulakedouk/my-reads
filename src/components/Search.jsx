import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import * as BooksAPI from '../BooksAPI';
import IndividualBook from './IndividualBook';

class Search extends Component {
  static propTypes = {
    dataBook: PropTypes.array
  };

  state = {
    query: '',
    books: []
  };

  handleChange = query => {
    if (!query) {
      this.setState({ query: '', books: [] });
    } else {
      this.setState({ query: query.trim() });
      BooksAPI.search(query, 10).then(books => {
        books.map(book => this.props.dataBook.filter(b => b.id === book.id).map(b => (book.shelf = b.shelf)));
        this.setState({ books });
      });
    }
  };

  render() {
    let books = this.state.books;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          {/* JSON.stringify(this.state) */}
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books
              .sort(sortBy('title'))
              .map(book => <IndividualBook dataBook={this.state.books} book={book ? book : null} key={book.id} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
