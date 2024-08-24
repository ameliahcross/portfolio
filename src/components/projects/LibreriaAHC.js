import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import Libreria from '../../images/bookstore/libreria_laptop-02.png';
import Susana from '../../images/bookstore/susana_persona.avif';
import Armando from '../../images/bookstore/armando_persona.avif';
import Wireframe from '../../images/bookstore/wireframes.jpg';
import bookstore_desktop from '../../images/bookstore/bookstore_desktop.png';
import bookstore_desktop2 from '../../images/bookstore/bookstore_desktop2.png';
import bookstore_ipad from '../../images/bookstore/bookstore_ipad.png';
import bookstore_mobile from '../../images/bookstore/bookstore_mobile9.png';
import bookstore_mobile2 from '../../images/bookstore/bookstore_mobile2.png';
import bookstore_mobile4 from '../../images/bookstore/bookstore_mobile4.png';
import bookstore_mobile5 from '../../images/bookstore/bookstore_mobile5.png';
import bookstore_mobile6 from '../../images/bookstore/bookstore_mobile6.png';
import bookstore_mobile7 from '../../images/bookstore/bookstore_mobile7.png';
import bookstore_mobile8 from '../../images/bookstore/bookstore_mobile8.png';
import bookstore_mobile10 from '../../images/bookstore/bookstore_mobile10.png';
import results from '../../images/bookstore/results.png';
import results1 from '../../images/bookstore/results2.png';
import heatmap from '../../images/bookstore/heatmap.png';
import heatmap2 from '../../images/bookstore/heatmap2.png';
import table from '../../images/bookstore/table_heatmap.png';

function LibreriaAHC({ showBackArrow }) {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
    <div>
      <Navigation showBackArrow={true} />
      <div className="container project my-5">
        <h1>Librería AHC</h1>
        <p className="project-info mar-bot-15 mt-3">
            UX Design | UI Design | Software Development | 2023
        </p>
        <p className='mt-5 text-center'> 
        Librería AHC was an academic project where I worked on both UI/UX design and development.
        </p>
        <img src={Libreria} className="img-fluid mt-5" alt="SD Navigation" />
        <div className="mar-top-100">
            <h3 className="mb-5">Problem</h3>
            <p>
            AHC is a small local bookstore looking to digitize its small collection to allow customers to browse available books and authors online. However, their current system is outdated, limiting their reach and potential customer base.
            They also wanna be able to connect with its customers to enrich the overall reading experience and foster a deeper connection with their audience.
            </p>
        </div>
        <div className="mar-top-100">
            <h3 className="mb-5">Solution</h3>
            <p>
            The project involved designing and developing a responsive web application that allows users to browse books and authors easily.
            The interface focuses on a clean, modern design while ensuring ease of navigation across different devices, making reading not just an activity, but a meaningful journey.
            </p>
            <p>
            This is a beta version of the final system for AHC Bookstore. Currently, search filters have not been implemented due to the initial small number of books in the library's inventory. 
            However, adding search and filtering functionalities is definitely planned for future iterations.
            </p>
        </div>
        <div className="mar-top-100">
            <h3 className="mb-5">Target Audience</h3>
            <ul className="text-left custom-list">
                <li>
                    <b>Local book enthusiasts</b> who prefer supporting small businesses.
                </li>
                <li>
                    <b>Students</b> seeking educational resources.
                </li>
                <li>
                    <b>Book worms</b>.
                </li>
                <li>
                    <b>Anyone</b> looking for specific authors or book genres.
                </li>
            </ul>
        </div>
        <div className="mar-top-100">
            <h3 className="mb-5">User Goals</h3>
            <ul className="text-left custom-list">
                <li>Explore available books and authors quickly.</li>
                <li>Easily contact the bookstore for more information or to make a purchase. </li>
                <li>Discover new titles and recommendations.</li>
                <li>Get reading tips and relevant information.</li>
            </ul>
        </div>
        <div className="mar-top-100">
            <h3 className="mb-5 subtitle-aqua">Understanding the user</h3>
            <h5 className="mb-5">Pain Points</h5>
            <section class="understanding-the-user">
                <div class="row text-center mt-3">
                <div class="col-md-4 col-sm-6 mb-4">
                    <div class="circle mx-auto">1</div>
                    <h4>No Digital Presence</h4>
                    <p>
                    Customers had to visit the physical store to access information about books and authors.
                    </p>
                </div>
                <div class="col-md-4 col-sm-6 mb-4">
                    <div class="circle mx-auto">2</div>
                    <h4>Limited Discoverability</h4>
                    <p>
                    The lack of an online catalog made it challenging for users to find specific titles.
                    </p>
                </div>
                <div class="col-md-4 col-sm-6 mb-4">
                    <div class="circle mx-auto">3</div>
                    <h4>Phone-only Contact</h4>
                    <p>
                    Customers had to call the store to inquire about available books or authors,
                    with no option to send an email or have any form of written communication.
                    </p>
                </div>
                </div>
            </section>
        </div>
        {/* Personas */}
        <div className="mt-3">
        <h5 className="mb-5">Personas</h5>
        <div class="persona-profile mt-5">
            <h2 class="persona-name">Susana</h2>
            <p class="persona-quote">"I love the idea of checking book availability from the comfort of my home."</p>
            <div class="persona-details">
            <div class="left-column">
                <div class="persona-image">
                <img src={Susana} alt="Persona Image" />
                </div>
                <ul class="persona-info">
                <li><strong>Age:</strong> 65</li>
                <li><strong>Education:</strong> Bachelor's Degree in Literature</li>
                <li><strong>Hometown:</strong> Gazcue, Santo Domingo, Dominican Republic</li>
                <li><strong>Family:</strong> Married with three adult children</li>
                <li><strong>Occupation:</strong> Retired Teacher, but actively volunteers at local educational programs</li>
                </ul>
            </div>
            <div class="right-column">
                <div class="persona-goals">
                <h3>Goals</h3>
                <ul className='custom-list'>
                    <li>Easily browse and find books that match her interests.</li>
                    <li>Stay connected with the local literary community.</li>
                    <li>Discover new authors and genres.</li>
                    <li>Get information on the bookstore from the comfort of her home.</li>
                </ul>
                </div>
                <div class="persona-frustrations">
                <h3>Frustrations</h3>
                <ul className='custom-list'>
                    <li>Previously, she had to call the bookstore or show up to inquire about books, with no option to email or browse online.</li>
                    <li>Difficulty accessing information about new book arrivals due to limited online presence.</li>
                    <li>Lack of immediate updates on the availability of her favorite books.</li>
                </ul>
                </div>
            </div>
            </div>
            <div class="persona-story">
            <p>
            Susana is a retired teacher who is very proficient in using the internet and technology, thanks to her grandchildren. She enjoys reading and expanding her knowledge.
            However, she finds it inconvenient to visit the bookstore in person every time she wants to check for new arrivals or place an order. With a new online platform, Susana
                hopes to simplify her book search and stay connected with her love of literature.
            </p>
            </div>
        </div>
        <div class="persona-profile mt-5">
            <h2 class="persona-name">Armando</h2>
            <p class="persona-quote">"I just want to easily find the books I need for my studies."</p>
            <div class="persona-details">
            <div class="left-column">
                <div class="persona-image">
                <img src={Armando} alt="Persona Image" />
                </div>
                <ul class="persona-info">
                    <li><strong>Age:</strong> 30</li>
                    <li><strong>Education:</strong> College Student: Chemical Engineering</li>
                    <li><strong>Hometown:</strong> Naco, Santo Domingo, Dominican Republic</li>
                    <li><strong>Family:</strong> Single, living with parents</li>
                    <li><strong>Occupation:</strong> Student and part-time pharmacy assistant</li>
                </ul>
            </div>
            <div class="right-column">
                <div class="persona-goals">
                <h3>Goals</h3>
                <ul className='custom-list'>
                    <li>Easily browse and find books that match her interests.</li>
                    <li>Stay updated on availability.</li>
                    <li>Access the bookstore's collection from his phone.</li>
                </ul>
                </div>
                <div class="persona-frustrations">
                <h3>Frustrations</h3>
                <ul className='custom-list'>
                    <li>Hates making phone calls to ask for information, with no possibility of browsing online.</li>
                    <li>Long wait times for new arrivals to be announced at the store.</li>
                    <li>Limited knowledge of what was available at the bookstore, causing delays in finding the right study materials.</li>
                </ul>
                </div>
            </div>
            </div>
            <div class="persona-story">
            <p>
            Armando is a student juggling part-time work while pursuing his degree. He often needs access to academic resources but finds it challenging to visit
            the bookstore regularly. He prefers using technology to find and order the books he needs, saving him time and effort, especially during busy study periods.
            </p>
            </div>
        </div>
        </div>
        {/* Wireframes */}
        <div className="mar-top-100 ">
            <h3 className="mb-5 subtitle-aqua">Design Process</h3>
            <h5 className="mb-5">Sketches - Wireframes</h5>
            <img src={Wireframe} className="img-fluid mt-3 w-50 mx-auto d-block" alt="Wireframe" />
        </div>
        {/* Hi-fi Prototype */}
        <div id='hifi' className="container mar-top-100">
        <h5 className="mb-5">Hi-fi Prototype</h5>
        <div className="row">
            <h5 className="mb-5">Desktop</h5>
            <div className="col-md-12 col-sm-12 text-center mb-5">
                <img src={bookstore_desktop} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 1" />
                <h6>Main screen</h6>
                <p></p>
            </div>
            <div className="col-md-12 col-sm-12 text-center mb-5">
                <img src={bookstore_desktop2} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 2" />
                <h6>Main screen: Tips</h6>
                <p></p>
            </div>
            <h5 className="mb-5">iPad</h5>
            <div className="col-md-12 col-sm-12 text-center mb-5">
                <img src={bookstore_ipad} className="img-fluid mb-3 center-image shadow-bg" alt="Prototype 3" />
                <h6>Books</h6>
                <p></p>
            </div>
            <h5 className="mb-5">Mobile</h5>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 4" />
                <h6>Home</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile10} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 6" />
                <h6>Home: Tips</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile5} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 5" />
                <h6>Contact</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile6} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 6" />
                <h6>Contact</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile7} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 6" />
                <h6>Books</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile8} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 6" />
                <h6>Books</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile4} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 4" />
                <h6>Authors</h6>
                <p></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center mb-5 mx-auto">
                <img src={bookstore_mobile2} className="img-fluid w-75 mb-3 center-image shadow-bg" alt="Prototype 5" />
                <h6>Home: Authors</h6>
                <p></p>
            </div>
        </div>
        </div>
        {/* Usability test */}
        <div className="mt-5">
            <h3 className="mb-5 subtitle-aqua">Usability Test</h3>
            <h5 className="mb-5">First-click test</h5>
            <p>In order to evaluate the usability of key screens, I conducted a first-click test using <i>Optimal Workshop</i>.</p>
            <p><b>Task 1:</b>. "Click or tap to go to the contact section of the website."</p>
            <p className='mt-3'><b>Task Results:</b></p>
            <img src={results} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Wireframe" />
            <p className='mt-3'><b>Clickmap:</b></p>
            <img src={heatmap} className="img-fluid mt-3 mx-auto d-block" alt="Clickmap" />
            <p className='mt-5'><b>Task 2:</b>. "Click or tap to see the navigation menu of this homepage."</p>
            <p className='mt-3'><b>Task Results:</b></p>
            <img src={results1} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Wireframe" />
            <p className='mt-3'><b>Clickmap:</b></p>
            <img src={heatmap2} className="img-fluid mt-3 w-25 mx-auto d-block" alt="Clickmap" />
            <img src={table} className="img-fluid mt-3 w-100 mx-auto d-block" alt="Clickmap" />
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

    export default LibreriaAHC;