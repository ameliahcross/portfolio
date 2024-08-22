import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import itlatv from '../../images/itlatv/itla_tv_desktop.png';
import itlatv_mobile from '../../images/itlatv/itla_tv_management_mobile.png';
import itla_desktop from '../../images/itlatv/itla_tv_screenshot.png';


function ItlaTv({ showBackArrow }) {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
    <div>
      <Navigation showBackArrow={true} />
      <div className="container project my-5">
        <h1>ITLA TV</h1>
        <p className="project-info mar-bot-15">
          UI Design | Software Development | 2023
        </p>
        <p> TLA TV was a streaming project that I had to carry out for a college programming subject. 
            I was responsible for both designing the interfaces and developing the code. This application
            is intended to be managed by system administrators, offering options to modify the content available to users.
        </p>
        <img src={itlatv} className="img-fluid mt-3" alt="itlatv" />
        <div className="mar-top-100">
          <h3 className="mb-5">Applications</h3>
          <p>The application is responsive but primarily designed for larger screens.</p>
          <img src={itla_desktop} className="img-fluid mx-auto w-100 mt-5 d-block" alt="itlatv" />
          <img src={itlatv_mobile} className="img-fluid mx-auto w-75 mt-3 d-block" alt="itlatv" />
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

    export default ItlaTv;