import React from 'react';
import './Main.css';
import Component from './Component';

function MainDisplay() {
    return (
        <div className="MainDisplay">
            <p>This is the Main Display</p>
            <Component />
        </div>
    )
}

export default MainDisplay;