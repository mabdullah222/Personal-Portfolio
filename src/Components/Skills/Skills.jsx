import React from 'react'
import "./Skills.scss"
import ReactTooltip from "react-tooltip"
import {motion as m} from "framer-motion"
import AppWrapper from '../../Wrapper/AppWrapper'


function Skills() {
  let skills=[{title:"Python",imageUrl:process.env.PUBLIC_URL+"assets/python.png"},{title:"C++",imageUrl:process.env.PUBLIC_URL+"assets/cpp.png"},{title:"Javascript",imageUrl:process.env.PUBLIC_URL+"assets/javascript.png"},{title:"Node JS",imageUrl:process.env.PUBLIC_URL+"assets/node.png"},{title:"React",imageUrl:process.env.PUBLIC_URL+"assets/react.png"},{title:"PHP",imageUrl:process.env.PUBLIC_URL+"assets/php.png"},{title:"Laravel",imageUrl:process.env.PUBLIC_URL+"assets/laravel.png"},{title:"HTML",imageUrl:process.env.PUBLIC_URL+"assets/html.png"},{title:"Redux",imageUrl:process.env.PUBLIC_URL+"assets/redux.png"},{title:"CSS",imageUrl:process.env.PUBLIC_URL+"assets/css.png"},{title:"NextJS 13",imageUrl:process.env.PUBLIC_URL+"assets/next.png"}]
  return (
    <div className='app__skills'>
      <h2 className='head-text'>
          Skills
      </h2>
      <div className='app__skills-container'>
          <m.div
            className='app__skills-list'
          >
            {skills.map((item,index)=>(
              <m.div
                whileHover={{scale:1.1}}
                whileInView={{opacity:[0,1],x:[-100,0]}}
                className='app__skills-items app__flex'
                transition={{duration:0.5}}
                key={skills.name}
              >
                <div className='app__flex app__skills-item' style={{backgroundColor:"white"}}>
                  <img src={item.imageUrl} alt={item.name} style={{backgroundColor:"white"}} />
                  <p className='p-text'>{item.title}</p>
                </div>
              </m.div>
            ))}
          </m.div>
      </div>
    </div>
  )
}

export default AppWrapper(Skills,"Skills")