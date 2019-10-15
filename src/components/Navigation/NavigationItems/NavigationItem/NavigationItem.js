import React from 'react'
import classes from './NavigationItem.module.scss';

export default function NavigationItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <a
                href={props.link}
                className={props.active ? classes.activate : null}
            >{props.children}</a>
        </li>
    );
}
