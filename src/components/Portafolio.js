import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import MasonryGallery from "./MasonryGallery";

function Portafolio() {
  return (
    <section id="portafolio">
      <div className="container mb-more">
        <div className="items-center text-center">
          <div className="row">
            <p className="brackets mt-4"> 
                  &#123;
                  <span className="title">Portafolio</span> 
                  &#125;
            </p>
           <MasonryGallery/>
          </div>
        </div>
      </div>
      {/* ... El resto del código del lightbox ... */}
    </section>
  );
}

export default Portafolio;
