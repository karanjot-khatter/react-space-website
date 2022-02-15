import React from 'react';
import Navbar from '../component/Navbar';
import '../css/technology.css';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import SpaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

const Technology = () => {

const location = useLocation();

const appendBodyClass = (event) => {
    document.body.classList = '';
    document.body.classList.add('technology-body');
}
appendBodyClass();

const secondDotActive = () => {
    $('.technology__information').removeClass('selected');
    $('.technology__information.second_technology').addClass('selected');
}

const firstDotActive = () => {
    $('.technology__information').removeClass('selected');
    $('.technology__information.first_technology').addClass('selected');
}

const thirdDotActive = () => {
    $('.technology__information').removeClass('selected');
    $('.technology__information.third_technology').addClass('selected');
}

  return <div className='technology'>
    <Navbar/>
    <div className='technology__information selected first_technology'>
        <div className='left-side'>
            <div className="heading-text">
                <span className='number'>03</span>
                <span className='text'>SPACE LAUNCH 101</span>
            </div>
            <img className="technology-image-mobile" src={launchVehicleLandscape} alt="Launch Vehicle" />
            <div className="nav__dots">
                <div className='dot selected' id="dot1">1</div>    
                <div className='dot' id="dot2" onClick={secondDotActive}>2</div>    
                <div className='dot' id="dot3" onClick={thirdDotActive}>3</div>      
            </div>
            <div className='technology-info'>
                <p style={{fontSize: '16px'}}>THE TERMINOLOGY…</p>
                <h1>LAUNCH VEHICLE</h1>
                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
        </div>
        <div className='right-side'>
            <img className="technology-image-desktop" src={launchVehiclePortrait} alt="Launch Vehicle" />
        </div>
    </div>

    <div className='technology__information second_technology'>
        <div className='left-side'>
            <div className="heading-text">
                <span className='number'>03</span>
                <span className='text'>SPACE LAUNCH 101</span>
            </div>
            <div className="nav__dots">
                <div className='dot' id="dot1" onClick={firstDotActive}>1</div>    
                <div className='dot selected' id="dot2">2</div>    
                <div className='dot' id="dot3" onClick={thirdDotActive}>3</div>      
            </div>
            <div className='technology-info'>
                <p style={{fontSize: '16px'}}>THE TERMINOLOGY…</p>
                <h1>SPACEPORT</h1>
                <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
            </div>
        </div>
        <div className='right-side'>
            <img className="technology-image-desktop" src={SpaceportPortrait} alt="Spaceport" />
        </div>
    </div>

    <div className='technology__information third_technology'>
        <div className='left-side'>
            <div className="heading-text">
                <span className='number'>03</span>
                <span className='text'>SPACE LAUNCH 101</span>
            </div>
            <div className="nav__dots">
                <div className='dot' id="dot1" onClick={firstDotActive}>1</div>    
                <div className='dot' id="dot2" onClick={secondDotActive}>2</div>    
                <div className='dot selected' id="dot3">3</div>      
            </div>
            <div className='technology-info'>
                <p style={{fontSize: '16px'}}>THE TERMINOLOGY…</p>
                <h1>SPACE CAPSULE</h1>
                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
        </div>
        <div className='right-side'>
            <img className="technology-image-desktop" src={SpaceCapsulePortrait} alt="Space capsule" />
        </div>
    </div>
</div>

    

};

export default Technology;
