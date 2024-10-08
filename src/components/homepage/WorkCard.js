import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/EducationCards.css';
import '../../styles/WorkCard.css';
import '../../App.css';
import { Link } from 'react-router-dom';

function WorkCard({ title, image, link, hasContent }) {
  return (
    <div className="col-sm-6">
      {hasContent ? (
        <Link to={link} className="card-link">
          <div className="work-card">
            <div className="card-image">
              <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="card-overlay">
              <h3 className="card-title">{title}</h3>
            </div>
          </div>
        </Link>
      ) : (
        <div className="card-link">
          <div className="work-card">
            <div className="card-image">
              <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="card-overlay">
              <h3 className="card-title">{title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkCard;
