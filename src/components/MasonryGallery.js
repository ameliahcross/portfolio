import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import "../styles/MasonryGallery.css";
import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaArrowCircleLeft ,FaArrowCircleRight } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import anxietin from '../images/anxietin.png';
import ui_1 from '../images/location_ui_high.png';
import ui_2 from '../images/location_app_ui_front.png';
import card3 from '../images/card_ana.png';
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
import hablamoelmarte from '../images/hablamoelmarte.png';
import enplan from '../images/enplan.png';
import majavi_mobile from '../images/majavi_mobile_high.png';
import majavi_print from '../images/majavi_menu_2.png';
import lettering from '../images/coffee_lettering.png'
import paginasA_redes from '../images/paginas-movil.jpg';
import paginasA_imac from '../images/paginas-ui2_high.jpg';
import paginasA_macbook from '../images/paginasA_macbook.jpg';
import purple_ui from '../images/purple_ui.png';
import optica from '../images/optica.png';

// Arreglo de imagenes

const images2 = [
  {
    url: anxietin,
    pieFoto: "Branding | Therapist - Anxiety Disorders",
  },
  {
    url: ui_1,
    pieFoto: "UI/UX | SD App - Navigation Services",
  },
  {
    url: ui_2,
    pieFoto: "UI/UX | SD App - Navigation Services",
  },
  {
    url: paginasA_redes,
    pieFoto: "Social Media Content and Design | Yellow Pages",
  },
  {
    url: hablamoelmarte,
    pieFoto: "Handlettering | Mental Health Podcast",
  },
  {
    url: venaver,
    pieFoto: "Branding | Venaver App - eCommerce",
  },
  {
    url: card1,
    pieFoto: "Branding | Business Card - Electrical Engineer",
  },
  {
    url: paginasA_macbook,
    pieFoto: "UI | Landing Page - Yellow Pages",
  },
  {
    url: senaletica,
    pieFoto: "Signage | Plaza de la Cultura",
  },
  {
    url: into_lettering,
    pieFoto: "Branding | Into Lettering - My handlettering name",
  },
  {
    url: arcadia,
    pieFoto: "Social Media Content and Design | Arcadia - Online Perfume Shopping",
  },
  {
    url: insumisas,
    pieFoto: "Branding | Insumisas - Women's Rights Podcast",
  },
  {
    url: enplan,
    pieFoto: "Branding | En Plan App - Delivery Services",
  },
  {
    url: anxiologica_cards,
    pieFoto: "Branding | Business Card Therapist - Anxiety Disorders",
  },
  {
    url: purple_ui,
    pieFoto: "UI/UX | SD App - Navigation Services",
  },
  // {
  //   url: brascaribe,
  //   pieFoto: "Este es el pie de foto de mi septimo objeto de imagen",
  // },
  {
    url: optica,
    pieFoto: "Logo Redesign | Optometry Clinic / Eyewear Store",
  },
  {
    url: violet,
    pieFoto: "Branding | Costume Jewelry Store",
  },
  {
    url: card2,
    pieFoto: "Branding | Business Card - Catering and Food Services",
  },
  {
    url: paginasA_imac,
    pieFoto: "UI | Landing Page - Yellow Pages",
  },
  {
    url: majavi_mobile,
    pieFoto: "Branding | UI | Majavi - Restaurant Mobile Menu",
  },
  {
    url: majavi_print,
    pieFoto: "Branding | Majavi - Restaurant Menu",
  }, 
  {
    url: lettering,
    pieFoto: "Handlettering",
  },
  {
    url: card3,
    pieFoto: "Branding | Business Card - Attorney and Notary Public"
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