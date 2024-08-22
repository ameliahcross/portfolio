import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import Anxiologica_p from '../../images/anxiologica/anxiologica_profile-03.jpg';
import Anxiologica_colors from '../../images/anxiologica/anxiologica_colors.jpg';
import Anxietin from '../../images/anxiologica/anxietin-03.jpg';
import card1 from '../../images/anxiologica/businesscard_anxiologica-01.jpg';
import card2 from '../../images/anxiologica/businesscard_anxiologica-02.jpg';
import cards from '../../images/anxiologica/anxiologica_cards.png';
import instagram1  from '../../images/anxiologica/instagram-05.jpg';
import instagram2  from '../../images/anxiologica/instagram-06.jpg';
import instagram3  from '../../images/anxiologica/instagram-07.jpg';

function Anxiologica({ showBackArrow }) {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
    <div>
      <Navigation showBackArrow={true} />
      <div className="container project my-5">
        <h1>Anxiologica</h1>
        <p className="project-info mar-bot-15">
          Branding | 2021
        </p>
        <p className='mt-5'> <i>"Anxiety is the dizziness of freedom." </i> - Soren Kierkegaard </p>
        <p> Anxiologica is the professional brand for a talented therapist specializing in anxiety disorders, who also happens to be my sister. 
        Together, we went through a creative brainstorming process to bring her professional identity to life. We combined 
        her vision of how she wanted to be perceived with a touch of creativity. Amid fun conversations and brainstorming sessions,
        the idea of giving the brand a playful, caricature-like element emerged spontaneously, reflecting both her unique
        approach and personality.
        </p>
        <img src={Anxiologica_p} className="img-fluid" alt="SD Navigation" />
        <div className="">
          <h3 className="mb-5">Concept</h3>
          <p>
          The brand portrays a humanized brain enjoying a relaxing cup of tea, symbolizing relaxation and calmness.
          The caricature approach creates an approachable and friendly identity for the brand.
          </p>
        </div>
        <div className="mar-top-100">
          <h3 className="mb-5">Character Development</h3>
          <p>
          Thought to be versatile, showing various emotions while maintaining the brand's central message of calmness.
          The playful brain caricature reflects the target audience's need for reassurance in their journey to better
          mental health.
          </p>
          <img src={Anxietin} className="img-fluid d-block mx-auto w-50" alt="SD Navigation" />
        </div>
        <div className="mar-top-100">
          <h3 className="mb-5">Color Palette and Typography</h3>
          <img src={Anxiologica_colors} className="img-fluid d-block mx-auto w-75" alt="SD Navigation" />
        </div>
        <div className="mar-top-100">
          <h3 className="mb-5">Target Audience</h3>
          <ul className="text-left custom-list">
          <li>
          <b>People with an anxiety disorder</b> seeking specialized psychological support.
        </li>
        <li>
          <b>Medical and clinical referral:</b> Healthcare professionals who may recommend Anxiologica to patients can also contribute to
          enriching social media content, thereby establishing trust among mental health professionals.
        </li>
        <li>
          <b>Those close to patients</b> who seek to educate themselves about this type of mental health condition in order to better support their loved ones.
        </li>
        <li>
          <b>Individuals interested in mental health overall.</b> 
        </li>
          </ul>
        </div>
        <div className="mar-top-100">
          <h3 className="mb-5">Applications</h3>
          <p>The logo's versatility allows it to be used across different platforms, from business cards to social
            media, maintaining a cohesive brand identity while resonating emotionally with clients.
          </p>
          <div className="row mt-3">
            <div className="col-4">
              <img src={instagram1} className="img-fluid mx-auto d-block" alt="SD Navigation" />
            </div>
            <div className="col-4">
              <img src={instagram2} className="img-fluid mx-auto d-block" alt="SD Navigation" />
            </div>
            <div className="col-4">
              <img src={instagram3} className="img-fluid mx-auto d-block" alt="SD Navigation" />
            </div>
          </div>
          <img src={card1} className="img-fluid mx-auto w-50 mt-5" alt="SD Navigation" />
          <img src={card2} className="img-fluid mx-auto w-50" alt="SD Navigation" />
          <img src={cards} className="img-fluid mx-auto mt-3" alt="SD Navigation" />
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

    export default Anxiologica;