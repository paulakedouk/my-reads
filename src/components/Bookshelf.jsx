import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bookshelf extends Component {
  state = {
    query: ''
  };

  render() {
    return (
      <div>
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
