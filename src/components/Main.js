import React from 'react'
import './styles/Main.css'
import PhoneClone from './PhoneClone'

const Main = () => {
  return (
    <div className='container'>
        <div className='fixed-column'>
            <PhoneClone />
        </div>
        <div className='scrolling-column'>
            <h1>Scrolling Collumn</h1>
        </div>
    </div>
  )
}

export default Main