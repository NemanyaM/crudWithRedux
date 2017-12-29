import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route } from 'react-router-dom';
import NewsPage from './NewsPage';
import NewsForm from './NewsForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" to="/">Home</Link>
          <Link className="item" activeClassName="active" to="/news">News</Link>
          <Link className="item" activeClassName="active" to="/news/create">Add new News</Link>
        </div>
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/news/create" component={NewsForm} />
      </div>
    );
  }
}

export default App;
