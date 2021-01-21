import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const header = () => {
    const menuLinks =  [{name:'Wiersz',link: '/tworzewiersz'},{name:'Opowiadanie', link:'/tworzeopowiadanie'},{name:'Powieść', link: '/tworzepowiesc'},{name:'Komiks', link:'/tworzekomiks'}]
 return (
     <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand siteTitle" href="/">
            Moje logo
            <p>Twórz co chcesz, za darmo.</p>
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 menu">
            {menuLinks.map((menuItem, index) => {
              return (
                <li className="nav-item" key={index + menuItem.name}>
                  <Link className="nav-link" to={menuItem.link}>
                    {menuItem.name}
                  </Link>
                </li>
          
              )
            })}
                <li>
                {/* <FacebookIcon className="facebook-like-button" size={40} round={true} url={fbUrl} />
                <FacebookShareButton /> */}
                </li>
          </ul>
        </div>
      </nav>
     </>
 )
}

export default header;