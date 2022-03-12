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
    suggestedNames :[],
  }
  handleChange = (inputText) => {
    this.setState(
      {
        headerLarge: !(inputText),
        suggestedNames : name(inputText),
      }
    )
  }
  render(){
    console.log(name('cloud'));
    return(
      <div>
        <Header text = {this.state.headerText} headerLarge = {this.state.headerLarge} />
        <SearchBox onInputChange = {this.handleChange}/>
        <ResultsContainer suggestedNames = {this.state.suggestedNames} />
      </div>
    )
  }
}
export default App;
