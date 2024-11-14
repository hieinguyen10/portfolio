import React from 'react'
import "./styles/MainScreen.css"

const MainScreen = () => {
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
    </div>
  )
}

export default MainScreen