import React from 'react'
import '../App.css';
import teamPhoto from '../assets/McMaster Aerospace Team Photo.jpg';
import prototype from '../assets/prototype.png';
import planeTakeoff from '../assets/takeoff-the-plane.png';
import planeLogo from '../assets/png/MAST-colour.png';
import group from '../assets/multiple-users-silhouette.png';

function Team() {
    return (
    <div class="section" id="theteam">
        <div class="row" >

            <div class="column left">
                <img src={teamPhoto} class="image border team" useMap="#jaws-workmap"/>
                {/* <map name="jaws-workmap">
                    <area shape="circle" coords="230,160,20" alt="Computer" href="https://www.youtube.com/watch?v=u1c_E-LuSxs" target="blank"/>

                </map> */}
            </div>

            <div class="column right">
                <h5 class="subtitle">The Team</h5>
                <p class="description">We are a group of undergraduate students who share a passion for innovative design. Together, we form a multidisciplinary team, eager to compete at this year’s SAE Aero Design East Competition. </p>
                <p class="description">From this experience, we hope to dive more into the world of aerospace to better tune our technical understanding of the field. Additionally, we strive to foster skills in teamwork, engineering design, and analytical thinking through this collaborative effort. We are very excited to represent McMaster University on a global stage, and plan on having a lot of fun together along the way!</p>
            </div>

        </div>

        <div class="row">
            <div class="column left33">
                <figure class="item">
                    <img src={prototype} class="icon" />
                    <figcaption class="caption"><b>7 Engineering Disciplines</b></figcaption>
                </figure>
            </div>
            <div class="column center33">
                <figure class="item">
                    <img src={group} class="icon" />
                    <figcaption class="caption"><b>16 Members</b></figcaption>
                </figure>
            </div>
            <div class="column right33">
                <figure class="item">
                    <img src={planeTakeoff} class="icon" />
                    <figcaption class="caption"><b>2022 Team Takeoff</b></figcaption>
                </figure>
            </div>
        </div>
    </div>
    )
  }

  export default Team;