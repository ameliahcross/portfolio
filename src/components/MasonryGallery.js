import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import "../styles/MasonryGallery.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaArrowCircleLeft ,FaArrowCircleRight } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

// Arreglo de imagenes
const images = [
  "https://picsum.photos/2000/3000?",
  "https://picsum.photos/4000/3000?",
  "https://picsum.photos/2000/1000?",
  "https://picsum.photos/1300/1000?",
  "https://picsum.photos/3000/1500?",
  "https://picsum.photos/3000/2000?",
]

const images2 = [
  { url: "https://picsum.photos/2000/3000?", 
    pieFoto: "Este es el pie de foto de mi primer objeto de imagen"
  },
  { url: "https://picsum.photos/4000/3000?", 
    pieFoto: "Este es el pie de foto de mi segundo objeto de imagen"
  },
  { url: "https://picsum.photos/2000/1000?", 
    pieFoto: "Este es el pie de foto de mi tercer objeto de imagen"
  },
  { url: "https://picsum.photos/1300/1000?", 
    pieFoto: "Este es el pie de foto de mi cuarto objeto de imagen"
  },
  { url: "https://picsum.photos/3000/2000?", 
    pieFoto: "Este es el pie de foto de mi quinto objeto de imagen"
  },
  { url: "https://picsum.photos/4000/3003?", 
  pieFoto: "Este es el pie de foto de mi sexto objeto de imagen"
  },
  { url: "https://picsum.photos/2040/1000?", 
    pieFoto: "Este es el pie de foto de mi septimo objeto de imagen"
  },
]

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

  const getIndex = () => {
    console.log(openImage)
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
      {openImage && (
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
            {images2.map((image, i) => (
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