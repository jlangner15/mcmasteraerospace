import React from 'react'
import logoLeft from '../assets/webLogoLeft.png';

import '../App.css';


function Header() {
    return (
    <div class='header'>

            <div class="header-left">
            <a href="#default">
                <img class ="header-logo" src={logoLeft} ></img>
                </a>
            </div>

        <div class="header-right">
            <a class="active" href="#theteam">Home</a>
            <a href="#theteam">The Team</a>
            <a href="#competition">Competition</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact Us</a>
        </div>

    </div>
    )
  }

  export default Header;


