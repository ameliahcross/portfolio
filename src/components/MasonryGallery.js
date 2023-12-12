import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import "../styles/MasonryGallery.css";
import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaArrowCircleLeft ,FaArrowCircleRight } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import anxietin from '../images/anxietin.png';
import ui_1 from '../images/location_app_ui_start.png';
import ui_2 from '../images/location_app_ui_front.png';
import ui_3 from '../images/perspective_ui.png';
import anxiologica_cards from '../images/anxiologica_cards.png';
import into_lettering from '../images/into_lettering.png';
import card1 from '../images/miguel.png';
import card2 from '../images/saleo.png';
import brascaribe from '../images/brascaribe.png';
import insumisas from '../images/insumisas.png';
import senaletica from '../images/senaletica.png';
import violet from '../images/violetcharm.png';
import venaver from '../images/venaver_branding.png';
import arcadia from '../images/socual_media.png';

// Arreglo de imagenes

const images2 = [
  {
    url: anxietin,
    pieFoto: "Este es el pie de foto de mi primer objeto de imagen",
  },
  {
    url: ui_1,
    pieFoto: "Este es el pie de foto de mi segundo objeto de imagen",
  },
  {
    url: ui_2,
    pieFoto: "Este es el pie de foto de mi tercer objeto de imagen",
  },
  {
    url: ui_3,
    pieFoto: "Este es el pie de foto de mi cuarto objeto de imagen",
  },
  {
    url: venaver,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
  {
    url: anxiologica_cards,
    pieFoto: "Este es el pie de foto de mi quinto objeto de imagen",
  },
  {
    url: senaletica,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
  {
    url: insumisas,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
  {
    url: card1,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
  {
    url: into_lettering,
    pieFoto: "Este es el pie de foto de mi sexto objeto de imagen",
  },
  {
    url: violet,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
  {
    url: arcadia,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },

  {
    url: brascaribe,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
  {
    url: card2,
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  },
 
];

function MasonryGallery() {

  // OpenImage = el nombre de mi estado
  // setOpenImage = función que se utiliza para actualizar el estado "OpenImage"
  // = useState(null) = declarando (null) el estado "OpenImage"
  const [openImage, setOpenImage] = useState(null);

  const viewImage = (imageIndex) => {
    setOpenImage(imageIndex);
    console.log(imageIndex);
  };

  const closeImage = () => {
    setOpenImage(null);
  };

  const previousImage = (i) => {
    if (openImage !== null && openImage > 0) {
      setOpenImage(openImage - 1);
      
    }
    console.log("Previous Image Index:", openImage);
  }

  const nextImage = () => {
    if (openImage !== null && openImage < images2.length - 1) {
      setOpenImage(openImage + 1);
       console.log("Next Image Index:", openImage + 1);
    }
  }

  return (
    <>
      {openImage !== null && (
        <div className="fullscreen-image row">
          <div className="close-button col-1" onClick={closeImage}><IoMdCloseCircle /></div>
          <img src={images2[openImage].url} alt={images2[openImage].pieFoto} className="fullscreen-img" />
          <div className="row">
            <p className="">{images2[openImage].pieFoto}</p>
            <button className="col-6 prev-button" onClick={previousImage}> <FaArrowCircleLeft /></button>
            <button className="col-6 next-button" onClick={nextImage}><FaArrowCircleRight /></button>
          </div>
          
        </div>
      )}
      <div style={{ paddingTop: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3}}>
        <Masonry gutter="10px">
            {images2.map((image,i) => (
                <img
                key={i}
                src={image.url}
                alt={image.pieFoto}
                className="gallery-image"
                onClick={() => viewImage(i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
  
}
export default MasonryGallery;