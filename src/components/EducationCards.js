import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EducationCards.css';

function EducationCards(props) {

	return (
    <div className="col-sm-6">
      <div className="card ">
        <img src={props.image} className="card-img-top card-img" alt={props.imageAlt} style={props.imgStyle}/>
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-text">
            {props.text}
          </div>
          <span>
            {props.span}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EducationCards;