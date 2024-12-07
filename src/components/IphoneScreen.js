import React from 'react'
import "./styles/IphoneScreen.css"

const IphoneScreen = () => {
  return (
    <div className='screen-container'>
        <div className='top-section'>
          <div className='gid-item time-section'>
            <p>20:00</p>
          </div>
          <div className='gid-item dynamic-island'>
            <div className='camera-dot'>
              <div className='camera-dot-2' />
            </div>
          </div>
          <div className='gid-item network-section'>
          </div>
        </div>
        <div className='applications-section'>
          
        </div>
        <div className='bottom-section'>
        </div>
    </div>
  )
}

export default IphoneScreen