import React from 'react'
import "./Header.scss"
import {motion as m} from 'framer-motion'
import AppWrapper from '../../Wrapper/AppWrapper'
function Header() {
  const scaleVariants={
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease:"easeInOut"
      }
    }
  }
  return (
    <div className='app__header app__flex'>
      
      <m.div 
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className="app__header-info">
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft:"20px"}}>
                <p className="p-text">
                  Hello, I am
                </p>
                <h1>Abdullah</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
                <p className="p-text">Web 
                
                Developer</p>
                <p className="p-text">FreeLancer</p>
            </div>
        </div>
      </m.div>

      <m.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5,delayChildren:0.5}}
        className='app__header-img'
      >
          {/* <img src={process.env.PUBLIC_URL+"assets/profile.png"} alt="" /> */}
          
          <m.img 
          whileInView={{scale:[0,1]}}
          className="overlay_circle"
          transition={{duration:1,ease:"easeInOut"}}
          src={process.env.PUBLIC_URL+"assets/circle.svg"}
          alt="circle" />

      </m.div>


      <m.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >

        <div className='circle-cmp app__flex'>
          <img src={process.env.PUBLIC_URL+"assets/python.png"} alt="circle" />
        </div>
        <div className='circle-cmp app__flex'>
          <img src={process.env.PUBLIC_URL+"assets/javascript.png"} alt="circle" />
        </div>
        <div className='circle-cmp app__flex'>
          <img src={process.env.PUBLIC_URL+"assets/react.png"} alt="circle" />
        </div>
      </m.div>
      

    </div>
  )
}

export default AppWrapper(Header,"Home")