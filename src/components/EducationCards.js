import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EducationCards.css';

function EducationCards(props) {
	return (
    <div className="col">
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationCards;