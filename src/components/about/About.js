import React from 'react'
import './about.css'
function About() {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className=''>
          </img>
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases.</p>
        <p className='a-desc'> I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>

        <h2 className='a-title'>Educational Background</h2>
        <p>Bachelor Of Engineering </p>
        <p className='a-main'>Computer Science</p>
        <p>C-DAC</p>
        <p className='a-main'>Diploma In Advance Computing</p>
        <h2 className='a-title'>At Present</h2>
        <p>Working In MNC As</p>
        <p className='a-main'>Software Engineer</p>
        <p>Stated working from</p>
        <p className='a-main'>August 2021</p>
      </div>
    </div>
  )
}

export default About