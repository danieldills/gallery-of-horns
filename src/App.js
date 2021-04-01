import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Data from './data.json';
import SelectedBeasts from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beastData: Data,
      // hornFilteredData: Data,
      displayModal: false,
      selectedBeast: {}
    }
  }
  
showModal = (index) => {
  this.setState({
    selectedBeast: Data[index], 
    displayModal: true
  });
}
 
hideModal = () => {
  this.setState({displayModal: false})
}

filteredHorns = (beastData) => {
  this.setState({beastData});
}

  render() {
    return (
      <div>
        <Header /> 
        <Main 
        showModal={this.showModal}
        beasts={this.state.beastData} 
        filteredHorns={this.filteredHorns}
        />

        <SelectedBeasts 
        displayModal ={this.state.displayModal}
        hideModal={this.hideModal}
        selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
