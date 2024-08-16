import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EducationCards.css';
import '../App.css';

function WorkCard (props) {
	return (
    <div className="col-sm-6">
      <div className="card">
        <img src={props.image} className="card-img-top card-img" alt={props.imageAlt} style={props.imgStyle}/>
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-text">
            {props.text}
          </div>
          <span style={{ color: 'cornflowerblue', fontStyle: 'italic', fontWeight:'bold', backgroundColor:'' }}>
            {props.span}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;