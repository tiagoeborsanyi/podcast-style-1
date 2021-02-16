import React from 'react';

import './menu.styles.scss';
// import Logo from '../../assets/logo-pod.png';

const Menu = () => (
    <div className='menu'>
        <div className='menu-logo'>
            {/* <img src={Logo} alt='logo' className='menu-logo__image' /> */}
            <h1 className='menu-logo__title'>Airr</h1>
        </div>
        <div className='menu__list'>
            <ul className='menu__items'>
                <li className='menu__item selected'>
                    <span className="material-icons">home</span>
                    <p className='menu__item--title'>HOME</p>
                </li>
                <li className='menu__item'>
                    <span className="material-icons">track_changes</span>
                    <p className='menu__item--title'>Discover</p>
                </li>
                <li className='menu__item'>
                    <span className="material-icons">library_music</span>
                    <p className='menu__item--title'>Recently</p>
                </li>
                <li className='menu__item'>
                    <span className="material-icons">mic</span>
                    <p className='menu__item--title'>Air Quotes</p>
                </li>
                <li className='menu__item'>
                    <span className="material-icons">grade</span>
                    <p className='menu__item--title'>Favorite</p>
                </li>
                <li className='menu__item'>
                    <span className="material-icons">settings</span>
                    <p className='menu__item--title'>Settings</p>
                </li>
            </ul>
            <ul className='menu__items last'>
                <li className='menu__item'>
                    <span className="material-icons">logout</span>
                    <p className='menu__item--title'>Log Out</p>
                </li>
            </ul>
        </div>
    </div>
);

export default Menu;