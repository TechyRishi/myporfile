import React, { useContext } from 'react'
import sunPng from './img/Sun.png'
import moonPng from './img/Moon.png'
import './toggle.css'
import { ThemeContext } from '../../context'
function Toggle() {
    const theme = useContext(ThemeContext);
    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className='t'>
     <img src={moonPng} alt='' className='t-icon'/>
     <img src={sunPng} alt='' className='t-icon'/>
    <div className='t-button' onClick={handleClick} style={{left:theme.state.darkMode? 0 : 25}} ></div>
    </div >
  ) 
}

export default Toggle