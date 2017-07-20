import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './components/Bookshelf';
import { Link } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(filteredBooks =>
      this.setState({
        books: filteredBooks
      })
    );
  }

  moveBook = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(object => object.id !== book.id).concat([book])
        }));
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => <Search dataBook={this.state.books} />} />
        <Route
          exact
          path="/"
          render={() =>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                <div>
                  <Bookshelf
                    title="Currently to Reading"
                    changeBook={this.moveBook}
                    shelf={`currentlyReading`}
                    dataBook={this.state.books}
                  />
                  <Bookshelf
                    title="Want to read"
                    changeBook={this.moveBook}
                    shelf={`wantToRead`}
                    dataBook={this.state.books}
                  />
                  <Bookshelf title="Read" changeBook={this.moveBook} shelf={`read`} dataBook={this.state.books} />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>}
        />
      </div>
    );
  }
}

export default App;
