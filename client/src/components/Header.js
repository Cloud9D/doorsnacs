import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className='menu'>
                <ul className='menu-nav'>
                    <li className='nav-item nav-left-align'>
                        <a className='nav-brand nav-left-align'>DoorSnacs</a>
                    </li>
                    <li className='nav-item nav-right-align'>
                        <a href='#' className='nav-link'>Sign In</a>
                    </li>
                    <li className='nav-item nav-right-align'>
                        <a href='#' className='nav-link'>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
