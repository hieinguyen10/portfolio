import React from 'react'
import backgroundVideo from '../assets/background.mp4'
import '../components/styles/BackGround.css'

const BackGround = () => {
  return (
    <div className='background'>
        <video id='video-background' autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default BackGround