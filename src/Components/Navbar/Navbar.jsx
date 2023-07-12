import React, { useState } from 'react'
import "./Navbar.scss"
import {HiMenuAlt4,HiX} from "react-icons/hi"
import {motion as m} from 'framer-motion'


function Navbar() {
  let [toggle,setToggle]=useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={process.env.PUBLIC_URL+"/assets/mypic.jpg"} alt="Logo" />
      </div>

      <ul className='app__navbar-links'>
        {['Home','About',"Work","Skills","Contact"].map(e=>(<li className='app__flex p-text' key={`link-${e}`}>
          <div></div>
          <a href={`#${e}`}>{e}</a>
          </li>))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>{setToggle(!toggle)}}></HiMenuAlt4>
        {toggle && (
          <m.div
            intial={{x:300}}
            transition={{duration:3,ease:"easeOut"}}
          >
            <HiX onClick={()=>{setToggle(false)}}></HiX>
            <ul>
              {['Home','About',"Work","Skills","Contact"].map(e=>(<li key={e} onClick={()=>{setToggle(false)}}>
                <a href={`#${e}`}>{e}</a>
                </li>))}
            </ul>
          </m.div>
        )}
      </div>

    </nav>
  )
}

export default Navbar