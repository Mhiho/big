import React, { useState, useContext } from "react";
import { useDispatch } from 'react-redux';
import '../style/main.scss'
import { ThemeContext } from '../store/ContextAPI';
import { SWITCH_MENUINDEX } from '../actions/menuIndexAction';

const Hamburger = () => {

    const {animate,setAnimate} = useContext(ThemeContext)
    const [menuIndex, setMenuIndex] = useState(0)

    const dispatch = useDispatch()

    const toggle = () => {
      menuIndex < 3 ? setMenuIndex(menuIndex + 1) : setMenuIndex(0)
      setAnimate(!animate);
      dispatch({type: SWITCH_MENUINDEX})
    };
        return (
         <div onClick={toggle} className='hamburger'>

          <div className={`upLine`} >
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
