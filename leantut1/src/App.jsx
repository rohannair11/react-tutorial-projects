import './App.css'
import React from 'react';
import Header from "./components/Header/Header"
import SearchBox from './components/SearchBox/SearchBox';
// function App() {
//   return (
//     <div className="App">
//       <h1>
//         hello
//       </h1>

//     </div>
//   );
// }
class App extends React.Component{

  state = {
    headerText: "startup namer",

  }
  render(){
    return(
      <div>
        <Header text = {this.state.headerText} />
        <SearchBox />
      </div>
    )
  }
}
export default App;
