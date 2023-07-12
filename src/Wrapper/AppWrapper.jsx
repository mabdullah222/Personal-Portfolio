import React, { Component } from 'react'
import NavigationDots from '../Components/NavigationDots'
import SocialMedia from '../Components/SocialMedia'



const AppWrapper=(Component,idname,classnames) => function HOC(){
  return (
    <div id={idname} className={`app__container ${classnames}`}>
        <SocialMedia></SocialMedia>
        <div className='app__wrapper app__flex'>
            <Component/>
            <div className="copyright">
                <p className='p-text'>@2023 Abdullah</p>
                <p className='p-text'>All rights reserved</p>
            </div>
        </div>
        
        <NavigationDots active={idname}></NavigationDots>
    </div>
  )
}

export default AppWrapper;