import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.module.scss';

export default function Layout(props) {
    return (
        <Wrapper className={classes.Content}>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Wrapper>
    );
}