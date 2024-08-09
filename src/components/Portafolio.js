import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import MasonryGallery from "./MasonryGallery";

function Portafolio() {
  return (
    <section id="portafolio" className="pb-4 mb-4">
      <div className="container mb-more">
        <div className="items-center text-center">
          <div className="row">
            <p className="brackets mt-4"> 
                  &#123;
                  <span className="title-b">Portfolio</span> 
                  &#125;
            </p>
           <MasonryGallery/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
