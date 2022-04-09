import React from 'react'
import main from '../Images/hero.svg'
import Header from './header';

const Herosection = () => {
  return (
    <div>
        <Header/>
        <img src={main}  alt="Main image"/>
    </div>
    
  )
}

export default Herosection;