import React from 'react'
import Resource from '../resource/Resource';
import './resources.css'
import { data } from './data';
function Resources() {
  return (
    <div className='r1'>
        <div className='r1-texts'>
            <h3 className='r1-title'>
                Resources which I follows for learning
            </h3>

        </div>
        <div className='r1-list'>
        {data.map((d)=>{
      return(<Resource key={d.id} link={d.link} img={d.img} name={d.name}/>)
     })}
  
        </div>
    </div>
  )
}

export default Resources;