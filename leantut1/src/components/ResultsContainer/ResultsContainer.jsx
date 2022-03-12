import React from 'react'
import Namecard from '../Namecard/Namecard';
import './ResultsContainer.css'
const ResultsContainer = ({suggestedNames}) => {
  const suggestedNamesjsx = suggestedNames.map(suggestedName => {
    return <p>{suggestedName}</p>
  });
  return (
    <div className='results-container'>
        <Namecard suggestedName={suggestedNamesjsx}/>
    </div>
  )
}

export default ResultsContainer