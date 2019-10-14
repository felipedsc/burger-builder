import React from 'react';
import classes from './Modal.module.scss'
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

export default function Modal(props) {
    return (
        <Wrapper>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Wrapper>
    );
}
