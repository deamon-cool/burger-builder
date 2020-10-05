import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../../high-order-components/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    const [sideDrawerIsVisible, setSideDrawIsVisible] = useState(false);

    const sideDrawClosedHandler = () => {
        setSideDrawIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawIsVisible(!sideDrawerIsVisible);
    }

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default connect(mapStateToProps, null)(Layout);