import React from 'react'
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>

            {controls.map((control) => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    removed={() => props.ingredientRemoved(control.type)}
                    added={() => props.ingredientAdded(control.type)}
                    disabled={props.disabled[control.type]}
                />
            ))}

            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}
            >
                {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
            </button>
        </div>
    )
}
