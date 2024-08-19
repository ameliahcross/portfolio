import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Habilidades.css";
import { ProgressBar } from 'react-bootstrap';

function ProgressBar({ icon: Icon, label, percentage }) {
  return (
    <div className="progressBar mt-5">
        <ProgressBar now={props.percentage} />
    </div>
  );
}

export default ProgressBar;
