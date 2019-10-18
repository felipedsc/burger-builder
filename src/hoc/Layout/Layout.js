import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Wrapper>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}