import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import "../App.css";
import MasonryGallery from "./MasonryGallery";

function Portafolio() {
  return (
    <section id="portafolio" className="pb-4 mb-4">
      <div className="container mb-more">
        <div className="items-center text-center">
          <div className="row">
              <h3 className="mt-3">Portfolio</h3> 
           <MasonryGallery/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
