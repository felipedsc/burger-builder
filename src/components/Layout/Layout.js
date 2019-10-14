import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

export default function Layout(props) {
    return (
        <Wrapper>
            <Toolbar />

            <main className={classes.Content}>
                {props.children}
            </main>
        </Wrapper>
    );
}