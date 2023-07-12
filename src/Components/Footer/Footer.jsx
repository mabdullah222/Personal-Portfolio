import React,{useState,useRef} from 'react'
import "./Footer.scss"
import emailjs from 'emailjs-com';
import AppWrapper from '../../Wrapper/AppWrapper'
import {motion as m} from 'framer-motion'
function Footer() {
  const form=useRef(null);
  let [formData,setFormData]=useState({name:"",email:"",message:""})
  let [loading,setLoading]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xlwwnts', 'template_uvgynzi', form.current, 'vWl1nnhUlw1ZrD4Eg')
      .then((result) => {
          alert("Message Sent Successfully")
      }, (error) => {
          alert(error.text);
      });
      document.getElementById("myform").reset();
  };

  let handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <m.div
    whileInView={{opacity:[0,1],x:[-100,0]}}
    transition={{duration:0.5}}
     className='app__footer'>
      <h2 className='head-text'>Contact</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={process.env.PUBLIC_URL+"assets/email.png"} alt="email" />
          <a href="mailto:ma7800501@gmail.com" className='p-text'>ma7800501@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={process.env.PUBLIC_URL+"assets/mobile.png"} alt="phone" />
          <a href="tel:+92 333 6718884" className='p-text'>+92333 6718884</a>
        </div>
      </div>
      <form ref={form} id='myform' className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className='p-text'  placeholder='Name' name='name' onChange={handleChange}/>
        </div>
        <div className="app__flex">
          <input type="email" className='p-text'  placeholder='Email' name='email' onChange={handleChange}/>
        </div>
        <div className="app__flex">
          <textarea type="email" className='p-text' placeholder='Your Message' name='message' onChange={handleChange}/>
        </div>
        <button type='button' className='p-text' onClick={sendEmail}>{loading?"Sending":"Send Msg"}</button>
      </form>
      
    </m.div>
  )
}

export default AppWrapper(Footer,'Contact');