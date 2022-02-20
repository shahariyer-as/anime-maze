import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
    const { logOut } = useAuth();
    return (
        <div>
            <div className='footer-block'>
                <button onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
};

export default Footer;