import '../App.css';
import solidWorks from '../assets/sponsors/SolidWorks-Logo.png'
import aecon from '../assets/sponsors/Aecon-Logo.wine.png'
import ansys from '../assets/sponsors/ansys-logo.jpg'
import bcHughes from '../assets/sponsors/BCHughes-Colour-HR.png'
import stelco from '../assets/sponsors/stelco-inc-logo-vector.png'



function Sponsors() {
    return (
    <div class="section" id="sponsors">
        <div class="row">

            <div class="center">
                <h5 class="subtitle center">Sponsors</h5>
            </div>


        </div>

        {/* <div class="sponsor-group" id="platnium-sponsors">
            <div class="row">
                <div class="column left33">
                    <a class="triangle-bottomright platnium"></a>
                </div>
                <div class="column center33">
                    <h6 class="platnium-sponsor">Platnium</h6>
                </div>
                <div class="column right33">
                    <a class="triangle-bottomleft platnium"></a>
                </div>
            </div>

            <div class="row">
                <div class="center">
                    <a href="https://www.solidworks.com/" target="blank"> 
                        <img src={bombay} class="platnium-sponsor-logo shad"/>
                    </a>
                </div>
            </div>
        </div> */}


        <div class="sponsor-group" id="gold-sponsors">
            <div class="row">
                <div class="column left33" id="sponsor-triangle">
                    <a class="triangle-bottomright gold"></a>
                </div>
                <div class="column center33">
                    <h6 class="platnium-sponsor">Gold</h6>
                </div>
                <div class="column right33" id="sponsor-triangle">
                    <a class="triangle-bottomleft gold"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left">
                    <a href="https://www.aecon.com/" target="blank"> 
                        <img src={aecon} class="gold-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right">
                    <a href="https://www.solidworks.com/" target="blank"> 
                        <img src={solidWorks} class="gold-sponsor-logo shad"/>
                    </a>
                </div>
            </div>

        </div>

        <div class="sponsor-group" id="silver-sponsors">
            <div class="row">
                <div class="column left33" >
                    <a class="triangle-bottomright silver"></a>
                </div>
                <div class="column center33">
                    <h6 class="platnium-sponsor">Silver</h6>
                </div>
                <div class="column right33">
                    <a class="triangle-bottomleft silver"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left33">
                    <a href="https://www.ansys.com/" target="blank"> 
                        <img src={ansys} class="silver-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column center33">
                    <a href="https://www.stelco.com/" target="blank"> 
                        <img src={stelco} class="silver-sponsor-logo shad"/>
                    </a>
                </div>
                {/* <div class="column right33">
                    <a href="" target="blank"> 
                        <img src={} class="silver-sponsor-logo shad"/>
                    </a>
                </div> */}
            </div>
        </div>

        <div class="sponsor-group" id="bronze-sponsors">
            <div class="row" id="bronze-sponsors">
                <div class="column left33">
                    <a class="triangle-bottomright bronze"></a>
                </div>
                <div class="column center33">
                    <h6 class="platnium-sponsor">Bronze</h6>
                </div>
                <div class="column right33">
                    <a class="triangle-bottomleft bronze"></a>
                </div>
            </div>

            <div class="row">
                <div class="column left33">
                    <a target="blank"> 
                        {/*<img src={ansys} class="silver-sponsor-logo shad"/>*/}
                    </a>
                </div>
                <div class="column center33">
                    <a href="https://bchughes.ca/" target="blank"> 
                        <img src={bcHughes} class="bronze-sponsor-logo shad"/>
                    </a>
                </div>
                <div class="column right33">
                    <a href="" target="blank"> 
                        {/*<img src={} class="silver-sponsor-logo shad"/>*/}
                    </a>
                </div>
            </div>

        </div>
    </div>
    )
  }

  export default Sponsors;