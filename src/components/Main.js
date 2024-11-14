import React from 'react'
import './styles/Main.css'
import RightSide from './RightSide'
import MainScreen from './MainScreen'
import BackGround from '../data/BackGround'


const Main = () => {
  return (
    <div className='container'>
        <section className='iphone-section'>
          <div className='iphone-mock'>
            <div className='borderLine top' />
            <div className='borderLine mid' />
            <div className='borderLine bottom' />
            <BackGround />
            <MainScreen/>
            </div>
        </section>

        <RightSide/>
    </div>
  )
}
export default Main