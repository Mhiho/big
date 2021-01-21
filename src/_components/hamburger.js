import React, { useState, useContext} from "react"
import '../style/main.scss'
import { ThemeContext } from '../store/ContextAPI';


const Hamburger = () => {

    const {animate,setAnimate} = useContext(ThemeContext)

    const toggle = () => {
      setAnimate(!animate);
    };

        return (
         <div onClick={toggle} className='hamburger'>

          <div className={`upLine}`} >
            <div className={animate ? `upLeft upLeftAnim` : `upLeft`}></div>
            <div className={animate ? `upMiddle upMiddleAnim` : `upMiddle`}></div>
            <div className={animate ? `upRight upRightAnim` : `upRight`}></div>
          </div>
          <div className={`middleLine`}>
             <div className={animate ? `middleLeft middleLeftAnim` : `middleLeft`}></div>
            <div className={`middleMiddle`}></div>
            <div className={animate ? `middleRight middleRightAnim` : `middleRight`}></div>
          </div>
          <div className={`downLine`}>
          <div className={animate ? `upLeft upLeftAnim` : `upLeft`}></div>
            <div className={animate ? `upMiddle upMiddleAnim` : `upMiddle`}></div>
            <div className={animate ? `upRight upRightAnim` : `upRight`}></div>
          </div>
            </div>
        )
  
}

export default Hamburger
