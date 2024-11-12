import React from 'react'
import './styles/Main.css'
import RightSide from './RightSide'
import MainScreen from './MainScreen'

const Main = () => {
  return (
    <div className='container'>
        <div className='fixed-column'>
          <div className='outer-container'>
            <div className='borderLine top-container' />
            <div className='borderLine mid-container' />
            <div className='borderLine bottom-container' />
            <MainScreen/>
            </div>
        </div>

        <RightSide/>

    </div>
  )
}

export default Main