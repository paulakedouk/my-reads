import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Library from './components/Library';
import * as BooksAPI from './BooksAPI';
import Search from './components/Search';
import './App.css';

class App extends Component {
  state = {
    // showSearchPage: true,
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
    console.log(this.state.books);
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
