import './App.css'
import React from 'react';
import Header from "./components/Header/Header"
import SearchBox from './components/SearchBox/SearchBox';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
  state = {
    headerText: "startup namer",
    headerLarge: true,
  }
  handleChange = (inputText) => {
    this.setState(
      {
        headerLarge: !(inputText),
      }
    )
  }
  render(){
    console.log(name('cloud'));
    return(
      <div>
        <Header text = {this.state.headerText} headerLarge = {this.state.headerLarge} />
        <SearchBox onInputChange = {this.handleChange}/>
        <ResultsContainer />
      </div>
    )
  }
}
export default App;
