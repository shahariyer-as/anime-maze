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
                {/* <div>
                    <h1 style={{ color: 'white', alignItem: 'center' }}>ANIME MAZE</h1>
                </div>
                <div className="user-data">
                    <Link className='nav-name' to="/home">{user?.displayName}</Link>
                    {user?.photoURL ? <img className='user-img-first' src={user?.photoURL} alt="" /> :
                        <img className='user-img' src={logo} alt="" />
                    }
                </div> */}
                <div className="nav-bar">
                    <ul className='nav-ul'>
                        <li> <h1 style={{ color: 'white', fontSize: "1.8em", marginLeft: "45px" }}>ANIME MAZE</h1></li>
                    </ul>
                    <ul> <Link className='nav-name' to="/home">{user?.displayName.slice(0, 10)}</Link>
                        {user?.photoURL ? <img className='user-img-first' src={user?.photoURL} width={55} alt="" /> :
                            <img className='user-img-last' src={logo} width={45} alt="" />
                        }</ul>
                </div>

            </div>
        </div>
    );
};

export default Nav;