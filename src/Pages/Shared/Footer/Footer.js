import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
    const { logOut } = useAuth();
    return (
        <div>
            {/* <li className='footer-link'><Link className='footer-link' to="" onClick={logOut}>LogOut</Link></li> */}
            <div className='back-color'>
                <p onClick={logOut}>Log Out</p>
            </div>
        </div>
    );
};

export default Footer;