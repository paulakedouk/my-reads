import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Library from './components/Library';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Library />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default App;
