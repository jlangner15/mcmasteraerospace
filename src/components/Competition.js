import React from 'react'
import '../App.css';
import teamPhoto from '../assets/mastTeam.png';
import saeLogo from '../assets/SAE_International_logo.png'
import saeDesignEast from '../assets/SAE_design_east.png'
import international from '../assets/around-the-world.png'
import team from '../assets/team.png'


function Competition() {
    return (

    <div class="section" id="competition">
     <div class="row">

        <div class="column left66-1">
            <h5 class="subtitle"> Competition</h5>
            <div class="description">
                <p>The SAE Aero Design East competition is an annual design competition that challenges teams to design and build an unmanned fixed-wing aircraft to compete in one of three categories. This competition attracts international competition through university teams from all over the world. In March, we will be transporting the plane to Lakeland, Florida for three days of presentations, technical inspections, and flights. </p>
                <p>The regular class competition requires teams to create an electric powered, heavy lift aircraft while maximizing wingspan. The largest allowable wingspan for the competition this year is 18 feet.</p>
            </div>
        </div>

        <div class="column right33-2">
            <a href="https://www.sae.org/"  target="blank">
                <img src={saeLogo} class="image small shad sae" />
            </a> 
            <a href="https://www.saeaerodesign.com/"  target="blank">
                <img src={saeDesignEast} class="image shad sae" />
            </a>    
        </div>

    </div>

    <div class="row">
            <div class="column left g">
                <figure class="item">
                    <img src={international} class="icon" />
                    <figcaption class="caption"><b>International Competition</b></figcaption>
                </figure>
            </div>
            <div class="column right g">
                <figure class="item">
                    <img src={team} class="icon" />
                    <figcaption class="caption"><b>75 Teams</b></figcaption>
                </figure>
            </div>
            {/* <div class="column right33">
                <figure class="item">
                    <img src={planeTakeoff} class="icon" />
                    <figcaption class="caption"><b>2022 Team Takeoff</b></figcaption>
                </figure>
            </div> */}
        </div>

    </div>
    )
    {/* 
        <div id="competition">
            <h5>Competition</h5>
            <div class="text">
                <p class="p-right">
                    The SAE Aero Design East competition is an annual design competition that challenges teams to design and build an unmanned fixed-wing aircraft to compete in one of three categories. This competition attracts international competition through university teams from all over the world. In March, we will be transporting the plane to Lakeland, Florida for three days of presentations, technical inspections, and flights. 
                </p>
                <p class="p-right">
                    The regular class competition requires teams to create an electric powered, heavy lift aircraft while maximizing wingspan. The largest allowable wingspan for the competition this year is 18 feet.
                </p>
            </div>
        </div>
    */}
  }

  export default Competition;