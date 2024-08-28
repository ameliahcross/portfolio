import Navigation from '../homepage/Navigation';
import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Project.css';
import f from '../../images/ferreteria/ferreteria_3-03.png';
import wireframe from '../../images/ferreteria/wireframe_mystock.jpg';
import Maura from '../../images/ferreteria/maura_persona.png';
import William from '../../images/ferreteria/william_persona.jpg';
import usability_heatmap from '../../images/ferreteria/Ferretera_heatmap1.png';
import usability_heatmap2 from '../../images/ferreteria/Ferretera_heatmap2.png';
import usability_data from '../../images/ferreteria/ferreteria_test.png';
import usability_data2 from '../../images/ferreteria/ferreteria_test2.png';
import mainScreen from '../../images/ferreteria/ferreteria_main_screen.png';
import inventoryScreen from '../../images/ferreteria/ferreteria_product_list.png';
import test_table from '../../images/ferreteria/ferreteria_table.png';
import form from '../../images/ferreteria/ferreteria_form.png';

function Ferreteria({ showBackArrow }) {
const navigate = useNavigate();

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

return (
<div>
  <Navigation showBackArrow={true} />
  <div className="container project my-5">
    <h1>Ferretería My Stock</h1>
    <p className="project-info mar-bot-15">
      UX Design | UI Design | 2023
    </p>
    <p className='mt-5'> 
    This project involved designing and developing a stock management application for a small hardware store, created as part of a college assignment
    for the subject <i>"User-Centered Design"</i>.  The app should allow users to manage their inventory with ease.
    The focus of the design was on simplicity and efficiency to meet the needs of hardware store owners and employees.
     The project scope was limited to designing three key screens, as full app functionality was not required.
    </p>
    <img src={f} className="img-fluid mt-5" alt="SD Navigation" />
    <div className="mar-top-100">
      <h3 className="mb-5">Problem</h3>
      <p>
      Hardware store owners often struggle with managing their inventory efficiently. They need to keep track of stock levels, organize products
      into categories, and ensure that new stock can be added easily. Without a proper system, this process can become cumbersome, leading to
      errors, misplaced items, and difficulties in fulfilling customer orders.
      </p>
      <p>
      Furthermore, many hardware stores lack a mobile app for inventory management, with most systems being designed for desktops. 
      A mobile app allows any employee to access the system quickly without needing to be at a computer, enhancing flexibility and making
      inventory management more efficient.
      </p>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">Solution</h3>
      <p>
      My Stock offers a simple and intuitive solution for hardware store owners to manage their inventory.
      The app provides an inventory list where users can view, edit, and track products, a menu with clear options to navigate
      between different functionalities (inventory, reports, categories, etc.), and a product entry form to add new stock with
      essential details such as category, price, and quantity. The app is designed to streamline daily operations, reduce errors,
       and improve efficiency in inventory management.
      </p>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">Target Audience</h3>
      <ul className="text-left custom-list">
        <li>
          <b>Small Hardware Store Owners</b> 
        </li>
        <li>
          <b>Managers</b>
        </li>
        <li>
          <b>Employees</b> 
        </li>
      </ul>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5">User Goals</h3>
      <ul className="text-left custom-list">
        <li>Efficiently track and manage inventory.</li>
        <li>Quickly view and update stock levels.</li>
        <li>Add new products with ease.</li>
        <li>Generate reports.</li>
      </ul>
    </div>
    <div className="mar-top-100">
      <h3 className="mb-5 subtitle-aqua">Understanding the user</h3>
      <h5 className="mb-5">Pain Points</h5>
      <section class="understanding-the-user">
        <div class="row text-center mt-3 ">
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="circle mx-auto">1</div>
            <h4>Limited Access</h4>
            <p>
            Employees are often tied to desktop systems, limiting their ability to manage inventory while on the sales floor.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="circle mx-auto">2</div>
            <h4>Lack of Real-Time Updates</h4>
            <p>
            Delays in updating inventory levels can lead to errors in stock availability, frustrating both employees and customers.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="circle mx-auto">3</div>
            <h4>Difficulty in Tracking Low Stock</h4>
            <p>
            Employees struggle to keep track of which items are running low, leading to missed opportunities for reordering.
            </p>
          </div>
        </div>
      </section>
    </div>
    {/* Personas */}
    <div className="mt-3">
    <h5 className="mb-5">Personas</h5>
      <div class="persona-profile">
        <h2 class="persona-name">William</h2>
        <p class="persona-quote">"I wanna be able to manage inventory while on the sales floor"</p>
        <div class="persona-details">
          <div class="left-column">
            <div class="persona-image">
              <img src={William} alt="Persona Image" />
            </div>
            <ul class="persona-info">
              <li><strong>Age:</strong> 25</li>
              <li><strong>Education:</strong> High School Diploma</li>
              <li><strong>Hometown:</strong> Villa Juana, Santo Domingo, Dominican Republic</li>
              <li><strong>Family:</strong> Lives with his mother.</li>
              <li><strong>Occupation:</strong> Sales Employee at a hardware store. Pursuing a degree in Business Administration.</li>
            </ul>
          </div>
          <div class="right-column">
            <div class="persona-goals">
              <h3>Goals</h3>
              <ul className='custom-list'>
                <li>Manage inventory directly from the sales floor without needing to go back to a desktop.</li>
                <li>Quickly update stock information while assisting customers.</li>
                <li>To be able to tell customers the availability and quantity of each product in bulk.</li>
              </ul>
            </div>
            <div class="persona-frustrations">
              <h3>Frustrations</h3>
              <ul className='custom-list'>
                <li>Inefficient inventory systems that require constant trips to the nearest computer.</li>
                <li>Delayed responses from the system, leading to inaccurate stock information.</li>
                <li>Not being able to assist customers effectively due to outdated inventory interface.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="persona-story">
          <p> William works at a busy hardware store where quick access to inventory is crucial. He spends most of his day assisting customers on the sales floor
            and often finds it challenging to update stock information without returning to a computer. A mobile app would allow him to manage inventory in real-time,
            providing better customer service and improving store efficiency.
          </p>
        </div>
      </div>
       {/* William User Journey Map */}
      <h4 className="mt-5 text-center">William - User Journey Map</h4>
      <div className="journey-map table-responsive">
        <p><strong>Goal:</strong> Manage inventory directly from the sales floor without needing to go back to a desktop.</p>
        <table className="journey-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Assist customers on the sales floor</th>
              <th>Check stock availability</th>
              <th>Update inventory</th>
              <th>Inform customers about stock</th>
              <th>Complete the sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Task List</strong></td>
              <td>
                <ul className='persona-info'>
                  <li>1. Walks around the sales floor assisting customers.</li>
                  <li>2. Moves between product aisles.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Uses the desktop computer to check stock levels.</li>
                  <li>2. Often goes back and forth between the sales floor and the desktop.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Updates the inventory on the desktop.</li>
                  <li>2. Finds it frustrating to not do this directly from the sales floor.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Tells customers about stock levels and availability.</li>
                  <li>2. Needs to rely on memory or frequent trips to the desktop.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Completes the sale, hoping that the inventory is up to date.</li>
                  <li>2. Records the sale manually or at the POS system.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Feeling Adjective</strong></td>
              <td>Active, Engaged</td>
              <td>Frustrated, Delayed</td>
              <td>Inconvenienced, Inefficient</td>
              <td>Unsure, Stressed</td>
              <td>Relieved, Exhausted</td>
            </tr>
            <tr>
              <td><strong>Improvement Opportunities</strong></td>
              <td>Equip employees with mobile devices for real-time assistance</td>
              <td>Implement a mobile inventory check system</td>
              <td>Create an app for instant inventory updates on the sales floor</td>
              <td>Enable real-time product information on handheld devices</td>
              <td>Automate sale and inventory updates directly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="persona-profile mt-5">
        <h2 class="persona-name">Maura</h2>
        <p class="persona-quote">"I need to ensure the store's inventory is always accurate, especially during peak hours"</p>
        <div class="persona-details">
          <div class="left-column">
            <div class="persona-image">
              <img src={Maura} alt="Persona Image" />
            </div>
            <ul class="persona-info">
              <li><strong>Age:</strong> 35</li>
              <li><strong>Education:</strong> Bachelor's Degree in Business Management</li>
              <li><strong>Hometown:</strong> Ciudad Nueva, Santo Domingo, Dominican Republic</li>
              <li><strong>Family:</strong> Married with two children</li>
              <li><strong>Occupation:</strong> Store Manager at a hardware store</li>
            </ul>
          </div>
          <div class="right-column">
            <div class="persona-goals">
              <h3>Goals</h3>
              <ul className='custom-list'>
                <li>Oversee inventory levels and ensure that all product information is accurate and up-to-date.</li>
                <li>Efficiently generate reports.</li>
                <li>Quickly identify products that are low in stock and replenish them in real-time.</li>
              </ul>
            </div>
            <div class="persona-frustrations">
              <h3>Frustrations</h3>
              <ul className='custom-list'>
                <li>Unfriendly user interface.</li>
                <li>Delayed responses from the desktop system, also, tedious proccess in order to speak with suppliers.</li>
                <li>Not being able to replenish stock quickly.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="persona-story">
          <p>
          Ana manages a hardware store with a large and constantly changing inventory. She needs to ensure that products are always available,
          especially during peak hours. However, the desktop-based inventory lack some features that would help her manage the store efficiently. 
          As a manager, she is responsible for generating and analyzing sales reports, as well as maintaining effective communication with
          suppliers to ensure smooth operations.
          </p>
        </div>
      </div>
       {/* Maura User Journey Map */}
      <h4 className="mt-5 text-center">Maura - User Journey Map</h4>
      <div className="journey-map table-responsive">
        <p><strong>Goal:</strong> Oversee inventory levels and ensure all product information is accurate and up-to-date.</p>
        <table className="journey-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Monitor inventory</th>
              <th>Generate reports</th>
              <th>Identify low stock items</th>
              <th>Replenish stock</th>
              <th>Communicate with suppliers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Task List</strong></td>
              <td>
                <ul className='persona-info'>
                  <li>1. Regularly checks stock levels on the desktop system.</li>
                  <li>2. Compares physical inventory with system records.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Generates sales and inventory reports.</li>
                  <li>2. Reviews trends to adjust inventory levels.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Identifies products that are low in stock.</li>
                  <li>2. Makes notes for future orders.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Orders new stock based on report data.</li>
                  <li>2. Updates the system once the stock is replenished.</li>
                </ul>
              </td>
              <td>
                <ul className='persona-info'>
                  <li>1. Contacts suppliers for product replenishment.</li>
                  <li>2. Ensures timely delivery and updates system accordingly.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Feeling Adjective</strong></td>
              <td>Organized, Responsible</td>
              <td>Detailed, Focused</td>
              <td>Concerned, Proactive</td>
              <td>Relieved, Efficient</td>
              <td>Engaged, Satisfied</td>
            </tr>
            <tr>
              <td><strong>Improvement Opportunities</strong></td>
              <td>Provide a real-time dashboard for monitoring inventory on all devices</td>
              <td>Automate report generation with real-time data</td>
              <td>Highlight low stock items automatically in the system</td>
              <td>Allow direct integration of supplier orders from within the system</td>
              <td>Streamline supplier communication through the app</td>
            </tr>
          </tbody>
        </table>
</div>

    </div>
    {/* Wireframes */}
    <div className="mar-top-100 ">
      <h3 className="mb-5 subtitle-aqua">Design Process</h3>
      <h5 className="mb-5">Sketches - Wireframes</h5>
      <img src={wireframe} className="img-fluid mt-3 w-50 mx-auto d-block" alt="Wireframe" />
    </div>
    {/* Hi-fi Prototype */}
    <div id='hifi' className="container mar-top-100">
      <h5 className="mb-5">Hi-fi Prototype</h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={mainScreen} className="img-fluid w-75 mb-3 center-image" alt="Prototype 1" />
          <h6>Main screen</h6>
          <p>The main menu offers quick access to different sections of the app: Inventory, New Product, Reports, Categories, Configuration, and Credits.
            Additionally, on the bottom of the screen, they will have an option to view sales statistics and another option to manage different suppliers.
          </p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={inventoryScreen} className="img-fluid w-75 mb-3 center-image" alt="Prototype 2" />
          <h6>Inventory list</h6>
          <p>The stock section shows a list of inventory items along with the most important details. On top of the list, users would be able to
            filter products. Those can be edited using the pencil icon, and there's a floating action button to quickly access the new product 
            registration form. More details of each product (such as cost) can be seen by tapping on each.
            </p>
        </div>
        <div className="col-md-4 col-sm-12 text-center mb-5">
          <img src={form} className="img-fluid w-75 mb-3 center-image" alt="Prototype 3" />
          <h6>Add new product</h6>
          <p>Authorized people can add new products by filling out needed details such as name, category, prices, supplier, image and quantity.
            In addition to the icons for increasing or decreasing quantity, the user can tap on the number input field to type in the desired quantity.
          </p>
        </div>
      </div>
    </div>
    {/* Usability test */}
    <div className="mt-5">
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

export default Ferreteria;