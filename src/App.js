import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './components/Library';
import Search from './components/Search';

class App extends React.Component {
  state = {
    // showSearchPage: true,
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Library />} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
