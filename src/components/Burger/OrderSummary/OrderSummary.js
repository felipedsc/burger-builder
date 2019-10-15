import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return <li key={key}><span style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}</li>
            });

        return (
            <Wrapper>
                <h3>Your Order</h3>
                <p>A delicous burger with the following ingredients:</p>

                <ul>
                    {ingredientSummary}
                </ul>

                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>

                <Button type="Danger" clicked={this.props.purchaseCanceled}>
                    CANCEL
            </Button>
                <Button type="Success" clicked={this.props.purchaseContinued}>
                    CONTINUE
            </Button>
            </Wrapper >
        );
    }
}