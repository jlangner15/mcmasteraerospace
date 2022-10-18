import React from 'react'
import logo from '../assets/png/McMaster - colour.png';
import plane from '../assets/png/McMaster- plane-colour.png';
import title from '../assets/png/McMaster-title-color.png';

import '../App.css';


function Header() {
    return (
    <div class='header'>

            <div class="header-left">
            <a href="#default">
                <img class ="header-logo" src={plane} ></img>
                <img class ="header-title" src={title} ></img>
                {/* {<a href="#default" class="logo">McMaster Aerospace Team</a>} */}
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


