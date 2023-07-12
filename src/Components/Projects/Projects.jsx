import React,{useState} from 'react'
import "./Projects.scss"
import AppWrapper from '../../Wrapper/AppWrapper'
import {motion as m} from "framer-motion"
import {AiFillEye, AiFillGithub} from "react-icons/ai"

function Projects() {
  let [activeFilter,setFilter]=useState('MERN');
  let [animateCard,setAnimateCard]=useState({y:0,opacity:1})
  let filterWork={
    REACT:[{title:"News App",imageUrl:process.env.PUBLIC_URL+"assets/News/pic1.png",codeLink:"https://github.com/mabdullah222/NewsApp",demoLink:""}],
  MERN:[{title:"Kashtkar App",imageUrl:process.env.PUBLIC_URL+"assets/agri/pic1.png",codeLink:"https://github.com/mabdullah222/pwa",demoLink:""},{title:"Calander App",imageUrl:process.env.PUBLIC_URL+"assets/Calender/pic1.png",codeLink:"https://github.com/mabdullah222/Calander",demoLink:""},{title:"Chat App",imageUrl:process.env.PUBLIC_URL+"assets/chat/pic1.png",codeLink:"https://github.com/mabdullah222/Chat-Application",demoLink:""}],
  PHP:[{title:"WEB IDE",imageUrl:process.env.PUBLIC_URL+"assets/IDE.png",codeLink:"https://github.com/mabdullah222/Drag-and-Drop-Web-IDE-PHP",demoLink:""}],
  "JAVASCRIPT AND HTML":[{title:"Space Invaders",imageUrl:process.env.PUBLIC_URL+"assets/Space.png",codeLink:"https://github.com/mabdullah222/Chicken-Invaders-Web-Game",demoLink:""}],
  "NextJs 13":[{title:"Inventory System",imageUrl:process.env.PUBLIC_URL+"assets/Inventory/Inventory.png",codeLink:"https://github.com/mabdullah222/Inventory-System",demoLink:""}]
}
  let handleClick=(e)=>{
    console.log(e)  
    setFilter(e)
  }
  return (
    <>
      <h2 className='head-text'>
      My Creative
      <span> Section </span>
      </h2>
      <div className="app__work-filter">
        <div className="app__work-filters">
          {["MERN","REACT","PHP","JAVASCRIPT AND HTML","NextJs 13"].map((e,index)=>{
            return <div
              key={index}
              onClick={()=>handleClick(e)}
              className={`app__work-filter-item app__flex p-text ${activeFilter===e?'item-active':''}`}
            >
              {e}
            </div>
          })}
        </div>
        
        <m.div
          animate={animateCard}
          transition={{duration:0.5,delayChildren:0.5}}
          className='app__work-portfolio'
        >
          {filterWork[activeFilter].map((e,index)=>(
            <div className='app__work-item app__flex' key={index+e.title}>
              <div className='app__work-img app__flex'>
                <img src={e.imageUrl} alt={e.title} />
                <m.div
                  whileHover={{opacity:[0,1]}}
                  transition={{duration:0.25,staggerChildren:0.5,ease:"easeInOut"}}
                  className='app__work-hover app__flex'
                >
                  {/* <a href={e.demoLink} target='_blank' rel='noreffer'>
                    <m.div className='app__flex' whileInView={{scale:[0,1]}} whileHover={{scale:[1,0.9]}} transition={{duration:0.25}}>
                        <AiFillEye></AiFillEye>
                    </m.div>
                  </a> */}
                  <a href={e.codeLink} target='_blank' rel='noreffer'>
                    <m.div className='app__flex' whileInView={{scale:[0,1]}} whileHover={{scale:[1,0.9]}} transition={{duration:0.25}}>
                        <AiFillGithub></AiFillGithub>
                    </m.div>
                  </a>
                </m.div>
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>
                  {e.title}
                </h4>
              </div>
            </div>
          ))}
        </m.div>

      </div>
    </>
  )
}

export default AppWrapper(Projects,'Work');