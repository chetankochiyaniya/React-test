import React from 'react';
import {  NavLink } from "react-router-dom";

const NavaBar = () => {
    return <>
        <ul>
            {/**The NavLink is used when you want to highlight a link as active. 
             * So, on every routing to a page, the link is highlighted according to the activeclassname . 
             * Other Css style for NavLink 
             * Link is for links that need no highlighting. And a is for external links. */}
            <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
            <li><NavLink activeclassname="active" to="/about">About</NavLink></li>
            <li><NavLink activeclassname="active" to="/product/5">Product</NavLink></li>
            <li><NavLink activeclassname="active" to="/users">users</NavLink></li>
        </ul>
    </>
}
export default NavaBar;