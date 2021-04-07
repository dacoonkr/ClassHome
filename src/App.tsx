import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Main, ClassHome, Post, NotFound } from "./pages";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/classhome/:id" component={ClassHome} />
            <Route path="/post/:id" component={Post} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;