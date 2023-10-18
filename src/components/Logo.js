import React from 'react';
import logo from '../images/logo.svg';

function Logo({className}) {
    return (
        <img src={logo} alt='logo' className={className} />
    );
}

export default Logo;