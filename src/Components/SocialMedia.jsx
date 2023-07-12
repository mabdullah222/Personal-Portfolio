import React from 'react'
import {BsTwitter,BsInstagram} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"

function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
        <a target='_blank' href='https://instagram.com/abdullah_niazi22?igshid=ZDc4ODBmNjlmNQ==' rel='noreferrer'><BsInstagram></BsInstagram></a>
        </div>
        <div>
            <a href='https://www.facebook.com/profile.php?id=100005772761731&mibextid=ZbWKwL' rel='noreferrer' target='_blank'><FaFacebook></FaFacebook></a>
        </div>
    </div>
  )
}

export default SocialMedia