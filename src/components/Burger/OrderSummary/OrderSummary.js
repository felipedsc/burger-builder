import React from 'react';
import Wrapper from '../../../hoc/Wrapper'
import Button from '../../UI/Button/Button';

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}><span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}</li>
        });

    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>

            <ul>
                {ingredientSummary}
            </ul>

            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>            
            <p>Continue to checkout?</p>

            <Button type="Danger" clicked={props.purchaseCanceled}>
                CANCEL
            </Button>
            <Button type="Success" clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Wrapper>
    );
}