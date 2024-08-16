import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EducationCards.css';
import '../styles/WorkCard.css';
import '../App.css';

function WorkCard (props) {
	return (
    <div className="col-sm-6">
    <a href={props.link} className="card-link">
        <div className="work-card">
          <div className="card-image">
            <img src={props.image} alt={props.title} className="img-fluid" />
          </div>
          <div className="card-overlay">
            <h3 className="card-title">{props.title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default WorkCard;