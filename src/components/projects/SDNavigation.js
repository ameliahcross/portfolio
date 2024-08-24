import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import Ana from '../../images/sdnavigation/persona_ana.png';
import Carlos from '../../images/sdnavigation/persona_carlos.jpg';
import Wireframe from '../../images/sdnavigation/sdnagivation_wireframe.jpg';
import SDNavigation_1 from '../../images/sdnavigation/location_ui_high.png';
import p1 from '../../images/sdnavigation/p1.jpg';
import p2 from '../../images/sdnavigation/p2.jpg';
import p3 from '../../images/sdnavigation/p3.jpg';
import p4 from '../../images/sdnavigation/p4.jpg';
import p5 from '../../images/sdnavigation/p5.jpg';
import p6 from '../../images/sdnavigation/p6.jpg';
import usability1 from '../../images/sdnavigation/usability-1.png';
import usability2 from '../../images/sdnavigation/usability_2.png';
import usability3 from '../../images/sdnavigation/usability_table.png';
import heatmap1 from '../../images/sdnavigation/heatmap_1.png';
import heatmap2 from '../../images/sdnavigation/heatmap_2.png';

function SDNavigation({ showBackArrow }) {
const navigate = useNavigate();

useEffect(() => {
  // Desplaza al tope de la página al cargar el componente
  // window.scrollTo(0, 0);
}, []);


return (
<div>
  <Navigation showBackArrow={true} />
  <div className="container project my-5">
    <h1>SD Navigation</h1>
    <p className="project-info mar-bot-15">
      UX Design | UI Design | Design Challenge | 2022
    </p>
    <p className='mt-5'> 
      SD Navigation is a mobile application created to simplify public transportation.
      As the Design Lead for this UX/UI challenge, I was responsible for designing key screens that demonstrated the core user experience. 
      I focused on user research, wireframing, and high-fidelity prototypes, ensuring that the design was intuitive and visually appealing.
      The challenge required creating only specific screens rather than the full flow, allowing me to highlight the essential aspects of the user interface.
    </p>
    <img src={SDNavigation_1} className="img-fluid mt-5" alt="SD Navigation" />
    <div className="mar-top-100">
      <h3 className="mb-5">Problem</h3>
      <p>
        Pedestrians in unfamiliar cities (even their own) face significant
        challenges navigating public transportation. Often, they lack
        accessible and clear information about the various transportation
        methods available, leading to stress and wasted time. They need a
        tool that allows them to plan their journey effectively and safely,
        minimizing uncertainty about their route.
      </p>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">Solution</h3>
      <p>
        SD Navigation is an intuitive application that guides users from
        their origin point to their destination using public transportation.
        Based in the city of Santo Domingo, Dominican Republic. This app offers a simple interface that allows users
        to select their origin and destination quickly, with detailed routes, interactive maps,
        and travel time and cost estimates. 
      </p>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">Target Audience</h3>
      <ul className="text-left custom-list">
        <li>
          <b>Non-Car Owners:</b> People who rely on public transportation
          because they do not own a vehicle, including city residents who
          prefer more sustainable and affordable travel options.
        </li>
        <li>
          <b>New Residents:</b> People who recently moved to the city and
          are unfamiliar with public transportation options.{" "}
        </li>
        <li>
          <b>Students:</b> Especially university students who do not have
          access to a car and rely on public transportation to move around
          the city.
        </li>
        <li>
          <b>Elderly People:</b> Individuals who may need a simplified
          interface to effectively access public transportation.They often
          tire more quickly while walking in a hot city without knowing
          exactly where they're going.{" "}
        </li>
      </ul>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">User Goals</h3>
      <ul className="text-left custom-list">
        <li>Quickly and efficiently find public transportation routes.</li>
        <li>Obtain cost and travel time estimates before leaving. </li>
        <li>Access interactive maps with detailed routes.</li>
        <li>
          View points of interest and photos of stations and stops for
          better identification on the ground.
        </li>
      </ul>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5 subtitle-aqua">Understanding the user</h3>
      <h5 className="mb-5">Pain Points</h5>
      <section class="understanding-the-user">
        <div class="row text-center mt-3">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="circle mx-auto">1</div>
            <h4>Overwhelming Interface</h4>
            <p>
              Users may feel overwhelmed by complex interfaces, especially
              when trying to plan a trip quickly.
            </p>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="circle mx-auto">2</div>
            <h4>Unclear Information</h4>
            <p>
              Users may find it challenging to understand the steps involved
              in reaching their destination using public transportation.
            </p>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="circle mx-auto">3</div>
            <h4>Limited Accessibility</h4>
            <p>
              Users with disabilities or unfamiliarity with technology may
              find it hard to use traditional public transport apps
              effectively.
            </p>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="circle mx-auto">4</div>
            <h4>Stressful Decisions</h4>
            <p>
              These shorter titles should still effectively convey the core
              issues while keeping things concise.
            </p>
          </div>
        </div>
      </section>
    </div>
    {/* Personas */}
    <div className="mt-3">
    <h5 className="mb-5">Personas</h5>
      <div class="persona-profile">
        <h2 class="persona-name">Ana</h2>
        <p class="persona-quote">"I just want to get to class on time without worrying about bus schedules"</p>
        <div class="persona-details">
          <div class="left-column">
            <div class="persona-image">
              <img src={Ana} alt="Persona Image" />
            </div>
            <div className='row'>
              <div className='col-6'>
                <ul class="persona-info">
                  <li><strong>Age:</strong> 22</li>
                  <li><strong>Education:</strong> Currently pursuing a Bachelor's Degree</li>
                  <li><strong>Hometown:</strong> Los Rios, Santo Domingo, Dominican Republic</li>
                </ul>
              </div>
              <div className='col-6'>
                <ul class="persona-info">
                  <li><strong>Family:</strong> Lives alone, away from family. Has pets</li>
                  <li><strong>Occupation:</strong> College Student. Par-time job</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right-column">
            <div class="persona-goals">
              <h3>Goals</h3>
              <ul className='custom-list'>
                <li>Easily plan routes to get to college, grocery stores, and meet friends.</li>
                <li>Avoid missing buses and minimize travel time.</li>
                <li>Avoid counting money in the middle of the street for fear of being robbed.</li>
              </ul>
            </div>
            <div class="persona-frustrations">
              <h3>Frustrations</h3>
              <ul className='custom-list'>
                <li>Unreliable bus schedules leading to delays.</li>
                <li>Difficulty finding the best public transportation routes, especially when running late.</li>
                <li>Lack of information on alternative routes or schedules during public transportation delays.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="persona-story">
          <p> Ana has just moved to Santo Domingo from the countryside to be closer to her college.
          She is unfamiliar with the public transportation system and the city itself, therefore, needs a reliable way to navigate it and find
          safe transportation routes because she worries about getting lost, getting late to classesand feeling unsafe in an unfamiliar urban environment.
          </p>
        </div>
      </div>
      {/* Ana User Journey Map */}
      <h4 className="mt-5 text-center">Ana - User Journey Map</h4>
      <div className="journey-map table-responsive">
        <p><strong>Goal:</strong> Navigate public transportation efficiently to reach her college on time.</p>
        <table className="journey-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Get ready to go</th>
              <th>Walk around the streets</th>
              <th>Identifies first bus</th>
              <th>Follows route</th>
              <th>Arrives at her destination</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><strong>Task List</strong></td>
            <td>
              <ul className='persona-info'>
                <li>1. Looks up bus routes online or asks friends</li>
                <li>2. Prepares her backpack and collect estimates for the bus fare</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Sometimes stops her walk to read signs</li>
                <li>2. Asks around for guidance</li>
                <li>3. Often goes down the wrong way</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Ask the bus driver for bus destination</li>
                <li>2. Boards a bus unsure of the travel time</li>
                <li>3. Puts hands in her pocket and starts counting money and asking for fares while people are waiting</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Tries to follow the route, hoping not to miss her stop</li>
                <li>2. Asks the person next to her where they are going to see if they have the same stop</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Ask driver and other people for stop info</li>
                <li>2. Gets out of the bus</li>
                <li>3. Looks around to to check if she's where she should be</li>
              </ul>
            </td>
          </tr>
            <tr>
              <td><strong>Feeling Adjective</strong></td>
              <td>Lost, Uninformed </td>
              <td>Frustrated, Impatient</td>
              <td>Unsafe, Lost</td>
              <td>Focused, Doubtful</td>
              <td>Worried, Stressed</td>
            </tr>
            <tr>
              <td><strong>Improvement Opportunities</strong></td>
              <td>Simplify the staging process consolidating routes, fares, etc.</td>
              <td>Create an app for real-time walking directions</td>
              <td>Show live bus routes with step-by-step instructions</td>
              <td>Highlight when to get off</td>
              <td>Add multimedia options to identify places correctly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="persona-profile mt-5">
        <h2 class="persona-name">Carlos</h2>
        <p class="persona-quote">"I just want to make sure I get to work on time while saving money"</p>
        <div class="persona-details">
          <div class="left-column">
            <div class="persona-image">
              <img src={Carlos} alt="Persona Image" />
            </div>
            <ul class="persona-info">
              <li><strong>Age:</strong> 50</li>
              <li><strong>Education:</strong> High School Graduate</li>
              <li><strong>Hometown:</strong> Herrera, Santo Domingo, Dominican Republic</li>
              <li><strong>Family:</strong> Divorced with two children</li>
              <li><strong>Occupation:</strong> Construction Worker</li>
            </ul>
          </div>
          <div class="right-column">
            <div class="persona-goals">
              <h3>Goals</h3>
              <ul className='custom-list'>
                <li>Get to work on time every day without stressing about transportation.</li>
                <li>Minimize waiting time at bus stops to avoid wasting time.</li>
                <li>Ensure that he can plan his day better, knowing the exact time of the bus arrival.</li>
              </ul>
            </div>
            <div class="persona-frustrations">
              <h3>Frustrations</h3>
              <ul className='custom-list'>
                <li>Delays and unreliability of the bus schedules.</li>
                <li>Having to stand in the sun waiting for the bus.</li>
                <li>Not knowing alternative routes when there's traffic or delays.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="persona-story">
          <p>
            Carlos is a construction worker who relies on public transportation to get to work. He has a busy daily schedule, and any delays in his commute can cause significant issues. Carlos values a tool that can help him plan his routes efficiently, ensuring he gets to work on time and doesn't waste valuable time waiting at bus stops.
          </p>
        </div>
      </div>
       {/* Carlos User Journey Map */}
       <h4 className="mt-5 text-center">Carlos - User Journey Map</h4>
       <div className="journey-map table-responsive">
        <p><strong>Goal:</strong> Get to work on time every day without stressing about transportation.</p>
        <table className="journey-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Get ready to go</th>
              <th>Waits for the bus</th>
              <th>Boards the bus</th>
              <th>Follows the route</th>
              <th>Arrives at work</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><strong>Task List</strong></td>
            <td>
              <ul className='persona-info'>
                <li>1. Prepares for work and checks bus schedules</li>
                <li>2. Leaves home hoping to catch the bus on time</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Stands at the bus stop waiting for the bus</li>
                <li>2. Hopes the bus arrives on time</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Boards the bus and finds a seat</li>
                <li>2. Starts counting money for the fare</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Tries to follow the route</li>
                <li>2. Worries about missing his stop</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Gets off the bus</li>
                <li>2. Checks if he has arrived at the correct location</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Feeling Adjective</strong></td>
            <td>Hopeful, Anxious</td>
            <td>Impatient, Frustrated</td>
            <td>Relieved, Focused</td>
            <td>Worried, Doubtful</td>
            <td>Relieved, Tired</td>
          </tr>
          <tr>
            <td><strong>Improvement Opportunities</strong></td>
            <td>Provide real-time bus tracking to reduce uncertainty</td>
            <td>Offer estimated arrival times for buses</td>
            <td>Automate fare payments to simplify the boarding process</td>
            <td>Provide multimedia for guidance of when it's time to get off</td>
            <td>Ensure accurate route and stop information for better confidence</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/* Wireframes */}
    <div className="mar-top-100 ">
      <h3 className="mb-5 subtitle-aqua">Design Process</h3>
      <h5 className="mb-5">Sketches - Wireframes</h5>
      <img src={Wireframe} className="img-fluid mt-3 w-75 mx-auto d-block" alt="Wireframe" />
    </div>
    {/* Hi-fi Prototype */}
    <div id='hifi' className="container mar-top-100">
      <h5 className="mb-5">Hi-fi Prototype</h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={p1} className="img-fluid w-75 mb-3 center-image" alt="Prototype 1" />
          <h6>App start</h6>
          <p></p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={p2} className="img-fluid w-75 mb-3 center-image" alt="Prototype 2" />
          <h6>Welcome screen</h6>
          <p>With a simple interface, the first screen after the initial load will ask the user for an origin and destination point.</p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={p3} className="img-fluid w-75 mb-3 center-image" alt="Prototype 3" />
          <h6>Origin - Destination</h6>
          <p>Once both fields are filled, the button to proceed with the steps will appear.</p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={p4} className="img-fluid w-75 mb-3 center-image" alt="Prototype 4" />
          <h6>Route</h6>
          <p>Upon continuing, the route to be followed will appear on the map, as well as the legend explaining the different transportation available.</p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={p5} className="img-fluid w-75 mb-3 center-image" alt="Prototype 5" />
          <h6>See Route Details</h6>
          <p>The route will be detailed with different colors and paths. The application will show each step the user needs to take once they leave their location. Each step will be informed by both the origin and destination points, along with the map data. The top of the screen will display an approximate travel time and cost.</p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={p6} className="img-fluid w-75 mb-3 center-image" alt="Prototype 6" />
          <h6>Tips</h6>
          <p>To better guide the user, there will be a section with tips provided by the application. Also, each user will be able to upload images of buses, metro stations, cars, or any vehicle that they consider relevant for easy identification.</p>
        </div>
      </div>
    </div>
    {/* Usability test */}
    <div className="mt-5">
      <h3 className="mb-5 subtitle-aqua">Usability Test</h3>
      <h5 className="mb-5">First-click test</h5>
      <p>In order to evaluate the usability of key screens, I conducted a first-click test using <i>Optimal Workshop</i>.</p>
      <p><b>Task 1:</b>. "Please enter your current location."</p>
      <p className='mt-3'><b>Task Results:</b></p>
      <img src={usability1} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Wireframe" />
      <p className='mt-3'><b>Clickmap:</b></p>
      <img src={heatmap1} className="img-fluid mt-3 w-25 mx-auto d-block" alt="Clickmap" />
      <p className='mt-3'><b>Task 2:</b>. "Tap to change the current destination (where you want to go) to another location."</p>
      <p className='mt-3'><b>Task Results:</b></p>
      <img src={usability2} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Wireframe" />
      <p className='mt-3'><b>Clickmap:</b></p>
      <img src={heatmap2} className="img-fluid mt-3 w-25 mx-auto d-block" alt="Clickmap" />
      <img src={usability3} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Clickmap" />
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

export default SDNavigation;