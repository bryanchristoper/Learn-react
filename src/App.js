import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import Chat from './pages/Chat'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/chat" component={Chat} />
      </HashRouter>
    );
  }
}

export default App;
