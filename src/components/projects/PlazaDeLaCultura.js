import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import plazacultura_pp from '../../images/plazacultura/senaletica.png';
import plazacultura_p2 from '../../images/plazacultura/plazacultura_p2.jpg';
import plazacultura_p3 from '../../images/plazacultura/plazacultura_p3.jpg';
import plazacultura_p4 from '../../images/plazacultura/plazacultura_p4.jpg';
import plazacultura_p5 from '../../images/plazacultura/plazacultura_p5.webp';
import plazacultura_p6 from '../../images/plazacultura/plazacultura_p6.jpg';
import plazacultura_p7 from '../../images/plazacultura/plazacultura_p7.jpg';

function PlazaDeLaCultura({ showBackArrow }) {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
    <div>
      <Navigation showBackArrow={true} />
      <div className="container project my-5">
        <h1>Plaza De La Cultura</h1>
        <h4 className='text-center mt-3'>Signage</h4>
        <p className="project-info mar-bot-15 mt-3">
          Design | 2015
        </p>
        <p className='mt-5'> 
        This was a personal project I worked on to redesign the signage for the Plaza de la Cultura Juan Pablo Duarte,
        located in the city of Santo Domingo.
        </p>
        <p>
        I chose to work on this project because this place holds a special place in my heart. During my childhood, I used to play there often.
         It was a space where I would engage in various sports, from soccer to biking and skateboarding, as well as enjoying watching people
          walking their pets.
        </p>
        <div className="mar-top-100">
          <h3 className="mb-5">Origins & Research</h3>
          <p>The Plaza de la Cultura in Santo Domingo, officially named Plaza de la Cultura Juan Pablo Duarte, honors one of the Founding Fathers of the Dominican Republic and is a central hub for the city's artistic and cultural life, created in the 1970s.
          This expansive green area, with internal roads, is home to century-old trees of majestic size, beautiful fountains adorned with monumental sculptures, and bronze statues representing significant Dominican heroes, including the renowned figure of Don Quixote.
            </p>
          {/* <img src={itla_desktop} className="img-fluid mx-auto w-100 mt-5 d-block" alt="plazacultura" />
          <img src={itlatv_mobile} className="img-fluid mx-auto w-75 mt-3 d-block" alt="plazacultura" /> */}
        </div>
        <div className="mar-top-100">
            <h3 className="mb-5">Buildings and Attractions</h3>
            <ul className="text-left custom-list">
                <li><b>National Library of the Dominican Republic:</b> February 28, 1971</li>
                <li><b>National Theater Eduardo Brito:</b> August 16, 1973</li>
                <li><b>Museum of Dominican Man:</b> October 12, 1973</li>
                <li><b>National Museum of Natural History:</b> 1982</li>
                <li><b>Museum of Modern Art of Santo Domingo:</b> December 15, 1976</li>
                <li><b>Museum of History and Geography:</b> March 1982 (closed since 2005)</li>
                <li><b>Dominican Cinematheque:</b> 1979</li>
             </ul>
             <div className="row">
                <div className="col-md-4 col-12">
                <img src={plazacultura_p2} className="img-fluid mx-auto custom-img" alt="plazacultura" />
                </div>
                <div className="col-md-4 col-12">
                <img src={plazacultura_p3} className="img-fluid mx-auto custom-img" alt="plazacultura" />
                </div>
                <div className="col-md-4 col-12">
                <img src={plazacultura_p4} className="img-fluid mx-auto custom-img" alt="plazacultura" />
                </div>
                <div className="col-md-4 col-12">
                <img src={plazacultura_p5} className="img-fluid mx-auto custom-img" alt="plazacultura" />
                </div>
                <div className="col-md-4 col-12">
                <img src={plazacultura_p6} className="img-fluid mx-auto custom-img" alt="plazacultura" />
                </div>
                <div className="col-md-4 col-12">
                <img src={plazacultura_p7} className="img-fluid mx-auto custom-img" alt="plazacultura" />
                </div>
            </div>
            </div>
            <div className="mar-top-100">
                <h3 className="mb-5">Problem</h3>
                <p>
                Over time, during my visits to Plaza de la Cultura, I noticed that it lacks a strong signage system to help both locals and
                tourists navigate the large space. Each building or attraction has its own signage once you're there. But what happens if, while
                walking, you suddenly feel hungry and would like to know where to go to find the nearest restaurant or maybe someone just told you
                how great the Museum is and you wanna take the right turn to visit?
                </p>
                {/* <img src={itla_desktop} className="img-fluid mx-auto w-100 mt-5 d-block" alt="plazacultura" />
                <img src={itlatv_mobile} className="img-fluid mx-auto w-75 mt-3 d-block" alt="plazacultura" /> */}
            </div>
            <div className="mar-top-100">
                <h3 className="mb-5">Final Work</h3>
                <p>
                This signage system covers the main attractions of the area. Designed to be distributed throughout the Plaza de la Cultura,
                guiding visitors along the paths to reach their desired destinations.
                </p>
                <img src={plazacultura_pp} className="img-fluid mx-auto w-100 d-block" alt="plazacultura" />
            </div>
        </div>
      <div className="mt-3 mx-5 my-5">
        <a className="navbar-brand" onClick={()=> navigate(-1)}
          style={{ cursor: "pointer" }}>
          <FaArrowLeft size={24} color="black" />
        </a>
      </div>
    </div>
    );
    }

    export default PlazaDeLaCultura;