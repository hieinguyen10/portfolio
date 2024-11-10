import React from 'react'
import "./styles/PhoneClone.css"

const PhoneClone = () => {
  return (
    <div className='outer-container'>
        <div className='overlay-screen'>
            <div className='top-bar'>
                <div className='left-bar'><p>20:00</p></div>
                <div className='camera'></div>
                <div className='right-bar'>
                    <p>Wifi</p>
                </div>
            </div>
                
        </div>
        <div className='overlay-container'></div>
        <div className='top-container'></div>
        <div className='center-container'></div>
        <div className='bottom-container'></div>
    </div>
  )
}

export default PhoneClone