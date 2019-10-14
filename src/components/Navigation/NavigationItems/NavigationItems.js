import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss';

export default function NavigationItems(props) {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Burger Builder</NavigationItem>
        </ul>
    );
}
