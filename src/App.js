import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Chat from './pages/Chat';
import Shape from './pages/Shape';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/chat" component={Chat} />
        <Route path="/shape-generator" component={Shape} />
      </BrowserRouter>
    );
  }
}

export default App;
