import React from 'react'
import './styles/IphoneMock.css'
import backgroundVideo from '../assets/background.mp4'
import IphoneScreen from './IphoneScreen'


const IphoneMock = () => {
  return (
    <section className='iphone-section'>
          <div className='iphone-mock'>
            <div className='borderLine top' />
            <div className='borderLine mid' />
            <div className='borderLine bottom' />
            <div className='background'>
              <video id='video-background' autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            </div>
            <IphoneScreen/>
            </div>
    </section>
  )
}
export default IphoneMock