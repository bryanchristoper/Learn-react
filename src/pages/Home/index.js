import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <a className="btn btn-primary" href="/products">test</a>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
