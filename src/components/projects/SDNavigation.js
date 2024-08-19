import React from 'react';
import Navigation from '../homepage/Navigation';
import SDNavigation_1 from '../../images/sdnavigation/location_ui_high.png';
import '../../styles/Project.css';

function SDNavigation() {
  return (
    <div>
      <Navigation showBackArrow={true} />
      <div className='container mt-5'>
        <h1>SD Navigation</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.</p>
        <img src={SDNavigation_1} className="img-fluid" alt="SD Navigation" />
        <div className='mt-5'>
            <h3>Target Audience</h3>
            <ul className='text-left custom-list'>
                <li>Audience 1</li>
                <li>Audience 2</li>
                <li>Audience 3</li>
                <li>Audience 4</li>
            </ul>
        </div>
        <div className='mt-5'>
            <h3>User Goals</h3>
            <ul className='text-left custom-list'>
                <li>Are their any trends over the past 50 years in terms of different attributes of a song? If yes, what do the trends look like and how noticeable are they?</li>
                <li>Audience 2</li>
                <li>Audience 3</li>
                <li>Audience 4</li>
            </ul>
        </div>
        <div className='mt-5'>
            <h3>Design Process</h3>
            <p>!Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default SDNavigation;
