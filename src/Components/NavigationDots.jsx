import React from 'react'



function NavigationDots({active}) {
  return (
    <div className='app__navigation'>
        {['Home','About',"Work","Skills","Contact"].map((e,index)=>(
            <a 
            href={`#${e}`}
            key={e+index}
            className='app__navigation-dot'
            style={active===e?{backgroundColor:'#313BAC'}:{}}
            />))}
    </div>
  )
}

export default NavigationDots