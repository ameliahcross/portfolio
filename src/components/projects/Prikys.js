import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import burgerMenu from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Burger menu.png';
import categories from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Categories.png';
import filter from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Filter.png';
import homepage5 from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Homepage 5.png';
import homepage6 from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Homepage 6.png';
import homepage7 from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Homepage 7.png';
import login from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Login.png';
import ratingsReview from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Ratings and Review.png';
import register from '../../images/prikys_beermarket/iPhone 13 & 14 _Prikys Beer Market Register.png';
import prikysLogo from '../../images/prikys_beermarket/prikys.png';
import homepage3 from '../../images/prikys_beermarket/PrikysHomepage 3.png';
import storyboardCloseup from '../../images/prikys_beermarket/storyboard_closeup.jpeg';
import storyboardGeneral from '../../images/prikys_beermarket/storyboard_general.jpeg';
import wireframes from '../../images/prikys_beermarket/wireframes.jpeg';
import veronika from '../../images/prikys_beermarket/veronika_persona.png';
import fausto from '../../images/prikys_beermarket/fausto_persona.png';



function Prikys({ showBackArrow }) {
const navigate = useNavigate();

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

return (
<div>
  <Navigation showBackArrow={true} />
  <div className="container project my-5">
    <h1 className="my-3">Priky's Beer Market</h1>
    <h3>In Progress...</h3>
    <p className="project-info mar-bot-15">
      UX Design | UI Design | Logo 2024
    </p>
    <p className='mt-5'> 
    Priky's Beer Market is a digital menu app project designed as part of my <b>Google UX Design Certificate</b>. The goal is to improve the beer selection experience by providing users with detailed product descriptions, including flavor profiles and characteristics, to help them make confident and informed choices. This ongoing project focuses on creating user-centered solutions while refining my skills in UX research, wireframing, and high-fidelity prototyping.
    </p>
    <img src={prikysLogo} className="img-fluid mt-5" alt="Prikys" />
    <div className="mar-top-100">
      <h3 className="mb-5">Problem</h3>
      <p>
      Many users struggle to decide which beer to order, particularly those who want to try a drink for the first time. Existing menu solutions often lack detailed descriptions of beer characteristics, making it difficult for users to feel confident in their choice. This leads to frustration, indecision, and missed opportunities for businesses to cater effectively to customer preferences.
      </p>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">Solution</h3>
      <p>
      This digital menu App will provide a comprehensive beer catalog, including detailed descriptions of each beer's characteristics (style, flavor, ABV, IBU, etc.). This will empower users to make informed decisions, enhancing their experience and confidence when selecting a drink.
      </p>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">Target Audience</h3>
      <ul className="text-left custom-list">
      <li>
        <b>Beer Enthusiasts</b>
      </li>
      <li>
        <b>People who visits bars</b>
      </li>
      <li>
        <b>Bar and Restaurant Managers</b>
      </li>
      </ul>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">User Goals</h3>
      <ul className="text-left custom-list">
        <li>Easily explore and learn about different beers.</li>
        <li>Make confident decisions about what to order.</li>
        <li>Enjoy a personalized and informed drinking experience.</li>
        <li>Receive recommendations tailored to preferences.</li>
      </ul>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5 subtitle-aqua">Understanding the user</h3>
      <h5 className="mb-5">Pain Points</h5>
      <section class="understanding-the-user">
        <div class="row text-center mt-3 ">
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="circle mx-auto">1</div>
            <h4>Lack of Detailed Information</h4>
            <p>
            Users often struggle with menus that don't provide enough detail about the beer options available.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="circle mx-auto">2</div>
            <h4>Decision Fatigue</h4>
            <p>
            With too many options and not enough guidance, users feel overwhelmed when selecting a beer.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="circle mx-auto">3</div>
            <h4>Inconsistent Experiences</h4>
            <p>
            Expectations don't always match reality, leading to disappointment when trying new drinks.
            </p>
          </div>
        </div>
      </section>
    </div>
    {/* Personas */}
    <div className="mt-3">
    <h5 className="mb-5">Personas</h5>
    <div class="persona-profile mt-5">
    <h2 class="persona-name">Fausto Ogando</h2>
    <p class="persona-quote">"Quality is the most important thing for me. When I have many options, I like to be informed about what is being offered so I can choose."</p>
    <div class="persona-details">
        <div class="left-column">
            <div class="persona-image">
                <img src={fausto} alt="Persona Image" />
            </div>
            <ul class="persona-info">
                <li><strong>Age:</strong> 43</li>
                <li><strong>Education:</strong> Engineer</li>
                <li><strong>Hometown:</strong> Santiago, Dominican Republic</li>
                <li><strong>Family:</strong> Divorced, with two daughters</li>
                <li><strong>Occupation:</strong> Electrical Engineer</li>
            </ul>
        </div>
        <div class="right-column">
            <div class="persona-goals">
                <h3>Goals</h3>
                <ul class='custom-list'>
                    <li>Disconnect from work stress in a relaxing environment.</li>
                    <li>Enjoy quality beers with friends.</li>
                    <li>Find options that meet his high standards.</li>
                    <li>Collect beer bottle caps for crafting.</li>
                </ul>
            </div>
            <div class="persona-frustrations">
                <h3>Frustrations</h3>
                <ul class='custom-list'>
                    <li>Lack of options and information on menus.</li>
                    <li>Dimly lit environments.</li>
                    <li>Shortage of comfortable seating and parking.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="persona-story">
        <p>
            Fausto works at a renewable energy company and seeks places where he can unwind after intense workdays. He prefers pleasant environments where he can enjoy quality beers and spend time with friends. He represents a customer who values quality and clear information in the consumption experience.
        </p>
    </div>
</div>

       {/* Fausto User Journey Map */}
      <h4 className="mt-5 text-center">Fausto - User Journey Map</h4>
      <div className="journey-map table-responsive">
        <p><strong>Goal:</strong> Find and select beers that fit his refined taste preferences.</p>
        <table className="journey-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Browse the menu</th>
              <th>Review details</th>
              <th>Select a beer</th>
              <th>Enjoy the beer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Task List</strong></td>
              <td>
                <ul className='persona-info'>
                  <li>1. Opens the app at his table.</li>
                  <li>2. Browses through the beer catalog.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Reads detailed flavor profiles.</li>
                  <li>2. Compares ABV and IBU ratings.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Chooses a beer based on the app’s information.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Enjoys the beer and the relaxing ambiance.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Feeling Adjective</strong></td>
              <td>Focused, Inquisitive</td>
              <td>Confident, Reassured</td>
              <td>Satisfied, Anticipative</td>
              <td>Relaxed, Content</td>
            </tr>
            <tr>
              <td><strong>Improvement Opportunities</strong></td>
              <td>Improve menu searchability with filters.</td>
              <td>Include tasting notes for each beer.</td>
              <td>Provide recommendations based on preferences.</td>
              <td>Enable users to save and rate their favorite beers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="persona-profile mt-5">
    <h2 class="persona-name">Veronika Gómez</h2>
    <p class="persona-quote">"Life is too short not to enjoy it with good beer and great company."</p>
    <div class="persona-details">
        <div class="left-column">
            <div class="persona-image">
                <img src={veronika} alt="Persona Image" />
            </div>
            <ul class="persona-info">
                <li><strong>Age:</strong> 28</li>
                <li><strong>Education:</strong> Bachelor’s in Marketing</li>
                <li><strong>Hometown:</strong> La Esperilla, Santo Domingo, Dominican Republic</li>
                <li><strong>Family:</strong> Single, lives with her pets</li>
                <li><strong>Occupation:</strong> Marketing Manager at a tech startup</li>
            </ul>
        </div>
        <div class="right-column">
            <div class="persona-goals">
                <h3>Goals</h3>
                <ul class='custom-list'>
                    <li>Find unique and relaxing places.</li>
                    <li>Meet new people and support local businesses.</li>
                    <li>Create TikTok content recommending places she visits.</li>
                </ul>
            </div>
            <div class="persona-frustrations">
                <h3>Frustrations</h3>
                <ul class='custom-list'>
                    <li>Loud music that hinders conversation.</li>
                    <li>Lack of authentic craft beers.</li>
                    <li>Overcrowded venues with long waiting lines.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="persona-story">
        <p>
            Veronika is a creative enthusiast who enjoys discovering new and exciting places. She seeks unique experiences to share on social media and values variety and authenticity in the products she consumes. She represents a young, sociable, and digitally connected audience.
        </p>
    </div>
</div>

      {/* Veronika User Journey Map */}
    <h4 className="mt-5 text-center">Veronika - User Journey Map</h4>
    <div className="journey-map table-responsive">
      <p><strong>Goal:</strong> Decide which beer to try for the first time and have an enjoyable experience.</p>
      <table className="journey-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Open the menu (app)</th>
            <th>Inform herself about details</th>
            <th>Discuss and decide what to try</th>
            <th>Try selected beers</th>
            <th>Provide feedback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Task List</strong></td>
            <td>
              <ul className='persona-info'>
                <li>1. Opens the app upon arriving at the bar.</li>
                <li>2. Explores menu sections and reads descriptions with images.</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Checks beer ingredients and characteristics.</li>
                <li>2. Reads reviews and personalized recommendations.</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Discusses beer options with friends.</li>
                <li>2. Decides based on the information provided.</li>
                <li>3. Asks staff for suggestions.</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Tastes selected beers and compares to expectations.</li>
                <li>2. Enjoys the ambiance.</li>
              </ul>
            </td>
            <td>
              <ul className='persona-info'>
                <li>1. Shares photos and comments on social media.</li>
                <li>2. Leaves a review in the app.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Feeling Adjective</strong></td>
            <td>Curious, Excited</td>
            <td>Informed, Confident</td>
            <td>Engaged, Anticipative</td>
            <td>Satisfied, Pleased</td>
            <td>Empowered, Motivated</td>
          </tr>
          <tr>
            <td><strong>Improvement Opportunities</strong></td>
            <td>Enhance visual descriptions and navigation ease.</td>
            <td>Provide richer recommendations and ingredient details.</td>
            <td>Include taste tags or flavor intensity scales.</td>
            <td>Ensure expectations match actual product descriptions.</td>
            <td>Incentivize user feedback with rewards or gamification.</td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>
    {/* Storyboard */}
    <div className="mar-top-100 ">
      <h3 className="mb-5 subtitle-aqua">Design Process</h3>
      <h5 className="mb-5">Storyboards</h5>
      <div className="row">
        <div className="col-md-6">
          <img src={storyboardGeneral} className="img-fluid mt-3" alt="Wireframe 1" />
        </div>
        <div className="col-md-6">
          <img src={storyboardCloseup} className="img-fluid mt-3" alt="Wireframe 2" />
        </div>
      </div>
    </div>
    {/* Wireframes */}
    <div className="mar-top-100 ">
      <h5 className="mb-5">Sketches - Wireframes</h5>
      <img src={wireframes} className="img-fluid mt-3 w-75 mx-auto d-block" alt="Wireframe" />
    </div>
    {/* Hi-fi Prototype */}
    <div id='hifi' className="container mar-top-100 justify-content-center">
      <h5 className="mb-5">Digital - Wireframes</h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={login} className="img-fluid w-75 mb-3 shadow-bg" alt="Burger Menu" />
          <h6>Sign In</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={register} className="img-fluid w-75 mb-3 shadow-bg" alt="Categories" />
          <h6>Register</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={homepage3} className="img-fluid w-75 mb-3 shadow-bg" alt="Homepage 5" />
          <h6>Home</h6>
        </div>
      </div>
    <div className="row">
      <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={burgerMenu} className="img-fluid w-75 mb-3 shadow-bg" alt="Homepage 5" />
          <h6>Burger Menu</h6>
        </div>
      <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={filter} className="img-fluid w-75 mb-3 shadow-bg" alt="Homepage 5" />
          <h6>Filters</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={categories} className="img-fluid w-75 mb-3 shadow-bg" alt="Homepage 5" />
          <h6>Categories</h6>
        </div>
    </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={homepage5} className="img-fluid w-75 mb-3 shadow-bg mx-auto d-block" alt="Homepage 5" />
          <h6>Category</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={homepage6} className="img-fluid w-75 mb-3 shadow-bg mx-auto d-block" alt="Homepage 6" />
          <h6>Product View</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={ratingsReview} className="img-fluid w-75 mb-3 shadow-bg mx-auto d-block" alt="Ratings and Review" />
          <h6>Ratings and Review</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={homepage7} className="img-fluid w-75 mb-3 shadow-bg mx-auto d-block" alt="Ratings and Review" />
          <h6>Modal Rating</h6>
        </div>
      </div>
    </div>
    {/* Usability test */}
    {/* <div className="mt-5">
        <h3 className="mb-5 subtitle-aqua">Usability Test</h3>
        <h5 className="mb-5">First-click test</h5>
        <p>In order to evaluate the usability of key screens, I conducted a first-click test using <i>Optimal Workshop</i>.</p>
        <p><b>Task 1:</b>. "Click or tap to browse product categories."</p>
        <p className='mt-3'><b>Task Results:</b></p>
        <img src={usability_data} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Wireframe" />
        <p className='mt-3'><b>Clickmap:</b></p>
        <img src={usability_heatmap} className="img-fluid mt-3 w-25 mx-auto d-block" alt="Clickmap" />
        <p className='mt-3'><b>Task 2:</b>."Click or tap to edit any product."</p>
        <p className='mt-3'><b>Task Results:</b></p>
        <p className='mt-3'>"Unnamed area" corresponds to each product edit pencil icon.</p>
        <img src={usability_data2} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Wireframe" />
        <p className='mt-3'><b>Clickmap:</b></p>
        <img src={usability_heatmap2} className="img-fluid mt-3 w-25 mx-auto d-block" alt="Clickmap" />
        <img src={test_table} className="img-fluid mt-3 w-75 mx-auto d-block" alt="Clickmap table" />
    </div> */}
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

export default Prikys;