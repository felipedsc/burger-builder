import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

function Logo(props) {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="My Burger" style={{ height: props.height }} />
        </div>
    );
}

export default Logo;
