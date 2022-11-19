import React from 'react'
import '../App.css';
import solidWorks from '../assets/sponsors/SolidWorks-Logo.png'
import aecon from '../assets/sponsors/Aecon-Logo.wine.png'
import ansys from '../assets/sponsors/ansys-logo.jpg'
import bcHughes from '../assets/sponsors/BCHughes-Colour-HR.png'
import stelco from '../assets/sponsors/stelco-inc-logo-vector.png'
import skyGauge from '../assets/sponsors/Skygauge_Logo.jpg'
import macEng from '../assets/sponsors/McMaster Engineering.jpg'
import greatHobbies from '../assets/sponsors/GreatHobbies.png'
import amp from '../assets/sponsors/AMP Logos_Green w- Words.png'
import liburdi from '../assets/sponsors/Liburdi Logo.jpg'
import engPhys from '../assets/sponsors/mcm-engphys_left-col_jpg.jpg'
import mechEng from '../assets/sponsors/mcm-mech_left-col_jpg.jpg'
import collins from '../assets/sponsors/Collins_Aerospace_logo_k_rgb.jpg'


/*
plat lib collins mech
bronze engphy
*/

function Sponsors() {
    return (
    <div class="section" id="sponsors">
        <div class="row">

            <div class="center">
                <h5 class="subtitle center">Sponsors</h5>
            </div>


        </div>

        <div class="sponsor-group" id="title-sponsors">
            <div class="row">
                <div class="column left33" id="sponsor-triangle">
                    <a class="triangle-bottomright black"></a>
                </div>
                <div class="column center33">
                    <h6 class="title-sponsor">Title</h6>
                </div>
                <div class="column right33" id="sponsor-triangle">
                    <a class="triangle-bottomleft black"></a>
                </div>
            </div>

            <div class="row">
                <div class="center">
                    <a href="https://www.eng.mcmaster.ca/" target="blank"> 
                        <img src={macEng} class="title-sponsor-logo shad"/>
                    </a>
                </div>
            </div>
        </div>

        <div class="sponsor-group" id="platnium-sponsors">
            <div class="row">
                <div class="column left33" id="sponsor-triangle">
                    <a class="triangle-bottomright platnium"></a>
                </div>
                <div class="column center33">
                    <h6 class="platnium-sponsor">Platnium</h6>
                </div>
                <div class="column right33" id="sponsor-triangle">
                    <a class="triangle-bottomleft platnium"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left g">
                    <a href="https://www.skygauge.co/" target="blank"> 
                        <img src={skyGauge} class="platnium-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right g">
                    <a href="http://www.collinsaerospace.com/who-we-are/about-us/global/north-america/canada" target="blank"> 
                        <img src={collins} class="platnium-sponsor-logo shad"/>
                    </a>
                </div>
            </div>

            <div class="row">
                <div class="column left g">
                    <a href="https://www.eng.mcmaster.ca/mech" target="blank"> 
                        <img src={mechEng} class="platnium-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right g">
                    <a href="https://www.liburdi.com/" target="blank"> 
                        <img src={liburdi} class="platnium-sponsor-logo shad"/>
                    </a>
                </div>
            </div>
        </div>


        <div class="sponsor-group" id="gold-sponsors">
            <div class="row">
                <div class="column left33" id="sponsor-triangle">
                    <a class="triangle-bottomright gold"></a>
                </div>
                <div class="column center33">
                    <h6 class="gold-sponsor">Gold</h6>
                </div>
                <div class="column right33" id="sponsor-triangle">
                    <a class="triangle-bottomleft gold"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left g">
                    <a href="https://www.aecon.com/" target="blank"> 
                        <img src={aecon} class="gold-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right g">
                    <a href="https://www.solidworks.com/" target="blank"> 
                        <img src={solidWorks} class="gold-sponsor-logo shad"/>
                    </a>
                </div>
            </div>

        </div>

        <div class="sponsor-group" id="silver-sponsors">
            <div class="row">
                <div class="column left33" id="sponsor-triangle">
                    <a class="triangle-bottomright silver"></a>
                </div>
                <div class="column center33">
                    <h6 class="silv-bronz-sponsor">Silver</h6>
                </div>
                <div class="column right33" id="sponsor-triangle">
                    <a class="triangle-bottomleft silver"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left33" >
                    <a href="https://www.ansys.com/" target="blank"> 
                        <img src={ansys} class="silver-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column center33">
                    <a href="https://www.stelco.com/" target="blank"> 
                        <img src={stelco} class="silver-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right33">
                    <a href="https://www.advancedmobilityproducts.com/" target="blank"> 
                        <img src={amp} class="silver-sponsor-logo shad"/>
                    </a>
                </div>
            </div>
        </div>

        <div class="sponsor-group" id="bronze-sponsors">
            <div class="row" id="bronze-sponsors">
                <div class="column left33" id="sponsor-triangle">
                    <a class="triangle-bottomright bronze"></a>
                </div>
                <div class="column center33">
                    <h6 class="silv-bronz-sponsor">Bronze</h6>
                </div>
                <div class="column right33" id="sponsor-triangle">
                    <a class="triangle-bottomleft bronze"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left33">
                    <a href="https://www.greathobbies.com/" target="blank"> 
                        <img src={greatHobbies} class="bronze-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column center33">
                    <a href="https://bchughes.ca/" target="blank"> 
                        <img src={bcHughes} class="bronze-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right33">
                    <a href="https://www.eng.mcmaster.ca/engphys" target="blank"> 
                        <img src={engPhys} class="bronze-sponsor-logo shad"/>
                    </a>
                </div>
            </div>

        </div>
    </div>
    )
  }

  export default Sponsors;