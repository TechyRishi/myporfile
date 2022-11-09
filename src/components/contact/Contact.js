import './contact.css'
import {AiOutlineInstagram,AiOutlineLinkedin,AiOutlineMail} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
function Contact(){
    return(
        <div className="c">
            <div className="c-info-item">
               <a className='c-ico' href="https://www.instagram.com/_rushi.patil"> <AiOutlineInstagram/></a>
               <a className='c-ico' href="https://www.linkedin.com/in/rushikesh-badhe-5882131a4/"> <AiOutlineLinkedin/></a>
               <a className='c-ico' href="mailto:rushi.badhe@gmail.com"> <AiOutlineMail/></a>
               <a className='c-ico' href="https://twitter.com/Rushi_Badhe/"> <FiTwitter/></a>
            </div>
        </div>
    )
}

export default Contact;