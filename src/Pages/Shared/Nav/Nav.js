import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Nav = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className='nav-bar'>
                <h1 style={{ color: 'white', alignItem: 'center' }}>ANIME MAZE</h1>
            </div>

            {
                user?.email ?

                    <li>
                        <a href="#" className="desktop-item">{user.displayName}</a>
                        <label for="showDrop" className="mobile-item">{user.displayName}</label>
                        <ul className="drop-menu">

                        </ul>
                    </li>
                    :
                    <li></li>
            }

        </div>
    );
};

export default Nav;