import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HornedBeast from './HornedBeast';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header /> 
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
