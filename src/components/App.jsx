import React, { Component } from 'react';
import HeaderApp from './HeaderApp'
import HeroApp from './HeroApp'
import ProductApp from './ProductApp'
import FooterApp from './FooterApp'

class App extends Component {
  render() {
    return (
      <div>
          <HeaderApp/>
          <HeroApp/>
          <ProductApp/>
          <FooterApp/>
      </div>
    );
  }
}

export default App;
