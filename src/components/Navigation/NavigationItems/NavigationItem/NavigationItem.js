import React from 'react';
import navigationItems from '../NavigationItems';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href='/'>A Link</a>
    </li>
);

export default navigationItems;