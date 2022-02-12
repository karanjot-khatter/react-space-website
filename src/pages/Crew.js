import React from 'react';
import Navbar from '../component/Navbar';
import '../css/crew.css';
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import $ from 'jquery';

const Crew = () => {

const appendBodyClass = (event) => {
    document.body.classList = '';
    document.body.classList.add('crew-body');
}

appendBodyClass();

const firstDotActive = () => {
  $('.crew__information').removeClass('selected');
  $('.crew__information.first_crew').addClass('selected');
}

const secondDotActive = () => {
    $('.crew__information').removeClass('selected');
    $('.crew__information.second_crew').addClass('selected');
}

const thirdDotActive = () => {
  $('.crew__information').removeClass('selected');
  $('.crew__information.third_crew').addClass('selected');
}

const fourthDotActive = () => {
  $('.crew__information').removeClass('selected');
  $('.crew__information.fourth_crew').addClass('selected');
}

  return <div className='crew'>
    <Navbar/>
    <div className='crew__information selected first_crew'>
      <div className='left-side'>
        <div className="heading-text">
          <span className='number'>02</span>
          <span className='text'>MEET YOUR CREW</span>
        </div>
        <h4>COMMANDER</h4>
        <h1>DOUGLAS HURLEY</h1>
        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        <div className="nav__dots">
          <div className='dot selected' id="dot1"></div>    
          <div className='dot' id="dot2" onClick={secondDotActive}></div>    
          <div className='dot' id="dot3" onClick={thirdDotActive}></div>    
          <div className='dot' id="dot4" onClick={fourthDotActive}></div>    
        </div>
      </div>
      <div className='right-side'>
          <img className="person-image" src={douglas} alt="Douglas hurley" />
      </div>
    </div>
    <div className='crew__information second_crew'>
      <div className='left-side'>
        <div className="heading-text">
          <span className='number'>02</span>
          <span className='text'>MEET YOUR CREW</span>
        </div>
        <h4>MISSON SPECIALIST </h4>
        <h1>MARK SHUTTLEWORTH</h1>
        <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        <div className="nav__dots">
          <div className='dot' id="dot1" onClick={firstDotActive}></div>    
          <div className='dot selected' id="dot2"></div>    
          <div className='dot' id="dot3" onClick={thirdDotActive}></div>    
          <div className='dot' id="dot4" onClick={fourthDotActive}></div>    
        </div>
      </div>
      <div className='right-side'>
          <img className="person-image" src={mark} alt="Mark Shuttleworth" />
      </div>
    </div>
    <div className='crew__information third_crew'>
      <div className='left-side'>
        <div className="heading-text">
          <span className='number'>02</span>
          <span className='text'>MEET YOUR CREW</span>
        </div>
        <h4>PILOT</h4>
        <h1>VICTOR GLOVER</h1>
        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
        <div className="nav__dots">
          <div className='dot' id="dot1" onClick={firstDotActive}></div>    
          <div className='dot' id="dot2" onClick={secondDotActive}></div>    
          <div className='dot selected' id="dot3"></div>    
          <div className='dot' id="dot4" onClick={fourthDotActive}></div>    
        </div>
      </div>
      <div className='right-side'>
          <img className="person-image" src={victor} alt="Victor Glover" />
      </div>
    </div>
    <div className='crew__information fourth_crew'>
      <div className='left-side'>
        <div className="heading-text">
          <span className='number'>02</span>
          <span className='text'>MEET YOUR CREW</span>
        </div>
        <h4>FLIGHT ENGINEER</h4>
        <h1>ANOUSHEH ANSARI</h1>
        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
        <div className="nav__dots">
          <div className='dot' id="dot1" onClick={firstDotActive}></div>    
          <div className='dot' id="dot2" onClick={secondDotActive}></div>    
          <div className='dot' id="dot3" onClick={thirdDotActive}></div>    
          <div className='dot selected' id="dot4"></div>    
        </div>
      </div>
      <div className='right-side'>
          <img className="person-image" src={anousheh} alt="Anousheh Ansari" />
      </div>
    </div>
  </div>;

  
};

export default Crew;
