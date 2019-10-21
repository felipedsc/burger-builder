import React from 'react'
import classes from './Button.module.scss';

const Button = (props) => {
    let type = props.submit ? 'submit' : 'button';

    return (
        <button
            type={type}
            className={[classes.Button, classes[props.type]].join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button
