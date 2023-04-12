import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';


export const Header = () => {
  return (
    <header className="header">
            <div className="logo">
                <img src={logo} />
            </div>
            <nav className="nav">
                <ul>
                        <NavLink to="/Desayuno"
                        className={({isActive}) => isActive ? "link-active" : ""}>
                          <li>
                            <p className="show-menu-text">Desayuno</p>
                              <span className='material-icons'>
                                wb_sunny
                              </span>
                          </li>
                        </NavLink>
                        <NavLink to="/Comida"
                        className={({isActive}) => isActive ? "link-active" : ""}>
                          <li>
                            <p className="show-menu-text">Comida</p>
                            <span className="material-icons">
                              wb_twilight
                            </span>
                          </li>
                        </NavLink>
                        <NavLink to="/Cena"
                        className={({isActive}) => isActive ? "link-active" : ""}>
                          <li>
                            <p className="show-menu-text">Cena</p>
                            <span className="material-icons">
                              nights_stay
                            </span>
                          </li>
                        </NavLink>
                        <NavLink to="/Resumen"
                        className={({isActive}) => isActive ? "link-active" : ""}>
                          <li>
                            <p className="show-menu-text">Resumen Nutrimental</p>
                            <span className="material-icons">
                              receipt_long
                            </span>
                          </li>
                        </NavLink>
                        <NavLink to="/Calendar"
                        className={({isActive}) => isActive ? "link-active" : ""}>
                          <li>
                            <span className="material-icons">event</span>
                          </li>
                        </NavLink>
                </ul>
            </nav>
        </header>
  )
}

