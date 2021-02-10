import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './hamburger';
import { IAppState } from '../store/reduxStore';
import { useSelector } from 'react-redux';
import '../style/main.scss';

export const menuLinks = [{ name: 'Szukam inspiracji', link: '/' }, { name: 'Wiersz', link: '/tworzewiersz' }, { name: 'Opowieść', link: '/tworzeopowiadanie' }, { name: 'powieść', link: '/tworzepowiesc' },{ name: 'o autorze strony', link: '/omnie'}]

const Header = () => {
  const menuIndex = useSelector((state: IAppState) => state.menuIndex.menuIndex)


  return (
    <>
      <nav>
        <div className="subnav-container">
          <div className="menuItem-container">
            {menuLinks.map((menuItem, index) => {
              return (
                <div className="nav-item" key={index + menuItem.name}>
                  <Link className={menuIndex === index ? `menuItem` : `menuItem menuItem-hidden`} to={menuItem.link}>
                    {menuItem.name.toUpperCase()}
                  </Link>
                </div>

              )
            })}
          </div>
          <div className="hamburger-container">
            <Hamburger />
          </div>
        </div>
      </nav>
      <div className="line-below-header">
      </div>
    </>
  )
}

export default Header;