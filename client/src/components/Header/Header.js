import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <ul>
                <li>
                    <a href='#'>Sign In</a>
                </li>
                <li>
                    <a href='#'>Sign Up</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
