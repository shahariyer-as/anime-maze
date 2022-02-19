import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Nav.css';
import logo from '../../../assets/avatar.png';

const Nav = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className='nav-bar'>
                <div>
                    <h1 style={{ color: 'white', alignItem: 'center' }}>ANIME MAZE</h1>
                </div>
                <div className="user-data">
                    <Link className='nav-name' to="/home">{user?.displayName}</Link>
                    {user?.photoURL ? <img className='user-img-first' src={user?.photoURL} alt="" /> :
                        <img className='user-img' src={logo} alt="" />
                    }
                </div>

            </div>
        </div>
    );
};

export default Nav;