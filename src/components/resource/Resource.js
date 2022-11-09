import React from 'react'
import './resource.css'
function Resource(props) {
  return (
    <div className='r'>
     <div className='r-browser'>
      
       <div className='r-circle'></div>
       <div className='r-circle'></div>
       <div className='r-circle'></div>
       <p className='r-title'>{props.name}</p>
     </div>
     <a href={props.link} target='_blank' rel='noreferrer'>
       <img src={props.img} alt='' className='p-img' ></img>
     </a>
     
     </div>
  )
}

export default Resource