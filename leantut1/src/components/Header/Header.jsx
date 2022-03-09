import React from 'react'
import "./Header.css"
const Header = ({text, headerLarge}) => {
  return (
    <div>
        <div className="head-container">
          <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="guy sitting beside desk" className={`headImage ${headerLarge ? 'headImageLarge' : 'headImageSmall'}`} />
          <h1 className="head-text">
            {text} 
          </h1>
          
        </div>
    </div>
  )
}

export default Header