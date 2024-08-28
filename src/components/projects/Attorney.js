import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';

import AC from '../../images/attorney/attorney-03.png';
import CardAna from '../../images/attorney/card_ana.png';

function Attorney({ showBackArrow }) {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
      <div>
        <Navigation showBackArrow={true} />
        <div className="container project my-5">
          <h1>Notary Lawyer</h1>
          <h5>Business Card</h5>
          <p className="project-info mar-bot-15">2021</p>
          <p className="mt-5">
            {" "}
            "AC" stands for the initials of a notary public lawyer from the city
            of Santo Domingo. For this occasion, I was asked to design a
            business card that faithfully reflects the client's profile: a
            responsible, elegant, trustworthy, and experienced woman.
          </p>
          <img
            src={CardAna}
            className="img-fluid mx-auto d-block mt-5"
            alt="Anxiologica"
          />
          <div className="mar-top-100">
            <h3 className="mb-5">Color Palette and Typography</h3>
            <img
              src={AC}
              className="img-fluid d-block mx-auto w-50"
              alt="Anxiologica"
            />
          </div>
          <div className="mar-top-100">
            <h3 className="mb-5">Target Audience</h3>
            <ul className="text-left custom-list">
              <li>
                <b>Individuals</b> needing document notarization.
              </li>
              <li>
                <b>Businesses</b> requiring legal validation for agreements.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 mx-5 my-5">
          <a
            className="navbar-brand"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          >
            <FaArrowLeft size={24} color="black" />
          </a>
        </div>
      </div>
    );
    }

    export default Attorney;