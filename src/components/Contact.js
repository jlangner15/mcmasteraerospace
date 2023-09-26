import React from 'react'
import '../App.css';
import planeUp from '../assets/McMaster-Colour-Cropped.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
//import macEng from '../assets/mcm-eng_stack-blk_png.png'
import macEng from '../assets/mcm-eng_stack-col_png.png'

function Contact() {
    return (
    <div class="section" id="contact">
        {/* <div class="row" >

            <div class="column left" id="plane-tall-image">
                <img src={planeUp} class="image tall" />
            </div>

            <div class="column right">
                <h5 class="subtitle">Contact Us</h5>
                <div class="social-media-icon-container">
                    <a href="https://www.instagram.com/macaerospace/" target="blank">
                        <img src={instagram} class="social-media-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/company/macaerospace"  target="blank">
                        <img src={linkedin} class="social-media-icon"/>
                    </a>
                </div>
                <div class="contact-container">
                    <h6>Team Email</h6>
                    <ul>
                        <li><a href = "mailto: mcmaster.aerospace@gmail.com" target="blank">mcmaster.aerospace@gmail.com</a></li>
                    </ul>
                </div>
                <div class="contact-container">
                    <h6>McMaster University</h6>
                    <ul>
                        <li><a href="https://www.eng.mcmaster.ca/" target="blank">Faculty of Engineering</a></li>
                        <li><a>1280 Main St W, Hamilton</a></li>
                        <li><a>Ontario, Canada</a></li>
                    </ul>
                </div>
                <div class="contact-container">
                    <h6>Captains</h6>
                    <ul>
                        <li><a>Adam Steacy</a></li>
                        <li><a href="https://www.eng.mcmaster.ca/" target="blank">adam@gmail.com</a></li>
                        <li><a>Archie Sm</a></li>
                        <li><a href="https://www.eng.mcmaster.ca/" target="blank">archie@gmail.com</a></li>
                    </ul>
                </div>
            </div>

        </div> */}

        <div class="row" >
            <div class="column left1 footer-image" id="plane-tall-image">
                <img src={planeUp} class="footer-icon" />
            </div>

            <div class="column left2" id="plane-tall-image">
                <img src={macEng} class="footer-icon maceng" />
            </div>

            <div class="social-media-icon-container column right15">
                <div class="social-media-icon">
                <a class="logo-stack" href="https://www.instagram.com/macaerospace/" target="blank">
                    <img src={instagram} class="social-media-icon"/>
                </a>
                </div>
                <div class="social-media-icon">
                <a href="https://www.linkedin.com/company/macaerospace"  target="blank">
                    <img src={linkedin} class="social-media-icon"/>
                </a>
                </div>
            </div>

            <div class="column right35">
                <div class="contact-container">
                    <h6>McMaster University</h6>
                    {/* <ul>
                        <li><a href="https://www.eng.mcmaster.ca/" target="blank">Faculty of Engineering</a></li>
                        <li><a>McMaster Aerospace</a></li>
                        <li><a>Facult of Engineering</a></li>
                        <li><a>JHE Room 261</a></li>
                        <li><a>1280 Main St W </a></li>
                        <li><a>Hamilton, ON L8S 4L8</a></li>
                        <li><a>Canada</a></li>
                    </ul> */}
                    <address>
                        McMaster Aerospace <br />
                        Faculty of Engineering <br />
                        JHE Room 261 <br />
                        1280 Main St W <br />
                        Hamilton, ON L8S 4L8 <br />
                        Canada
                    </address>
                </div>
            </div>
        </div> 

    </div>
    )   
}

  export default Contact;