import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/EducationCards.css';
import '../../styles/WorkCard.css';
import '../../App.css';
import { Link } from 'react-router-dom';

function WorkCard ({ title, image, link }) {
	return (
    <div className="col-sm-6">
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
    </div>
  );
}

export default WorkCard;