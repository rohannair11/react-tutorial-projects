import React from 'react'
import './App.css'
import Landing from './components/Landing/Landing'
import Nav from './components/Nav/Nav'
const App = () => {
  return (
    <div className='app'>
        {/* NAV  */}
        <Nav />
        {/* MAIN LANDING PAGE  */}
        <Landing />
        {/* CHALLENGE SECTION */}
        {/* FOOTER */}
    </div>
  )
}

export default App