import React from 'react';
import classes from './topBar.module.css';

const TopBar = (props) => {
    return(
        <header className="App-header">
            <nav className={classes.Topbar}>
            <img src="https://ya-webdesign.com/transparent250_/white-amazon-logo-png-6.png" alt="Amazon Logo" ></img>
            </nav>
        </header>
    )
}

export default TopBar;