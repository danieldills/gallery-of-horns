import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import HornedBeast from './HornedBeast';
import Data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beastData: Data,
    }
  }
  
  render() {
    return (
      <div>
        <Header /> 
        <Main beasts={this.state.beastData} />
        <Footer />
      </div>
    )
  }
}

export default App;
