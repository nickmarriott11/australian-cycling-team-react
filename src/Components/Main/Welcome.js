import React from "react";
import headimg from '../../images/header.jpg';
import './Welcome.css';


function Welcome() {
    return (
        <div class="headerimg">
            <img src={headimg} alt = "Cycling into sunset"/>
        </div>
    );
}

export default Welcome;