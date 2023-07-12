import React from 'react'
import "./About.scss"
import { useState,useeffect } from 'react'
import {motion as m} from "framer-motion"
import AppWrapper from '../../Wrapper/AppWrapper'


function About() {
  let abouts=[{title:"Front-End Developer",description:"I am a good Front-End Developer"},{title:"Back-End Developer",description:"I am a good Back-End Developer"},{title:"MERN Developer",description:"I am a good Front-End Developer"},{title:"Django Developer",description:"I am a good Front-End Developer"},{title:"Laravel Developer",description:"I am a good Front-End Developer"}]
  return (
    <div className='app__about'>
      <h2 className='head-text'>
      I strive to create 
      <span> visually stunning </span>
      and 
      <span> user-friendly </span> 
       websites that captivate and engage audiences.
      </h2>
      <div className="app__profiles">
          {abouts.map((about,index)=>(<m.div
            whileInView={{x:[-100,0],opacity:[0,1]}}
            transition={{duration:0.5}}
            whileHover={{scale:1.1}}
            className='app__profile-item'
            key={about.title+index}
          >
            <h2 className='bold-text'>{about.title}</h2>
            <p className='p-text'>{about.description}</p>

          </m.div>))}
      </div>
    </div>
  )
}

export default AppWrapper(About,"About");