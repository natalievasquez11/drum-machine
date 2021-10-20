import './display.css';
import './toggle.css';

function Display() {
  return(
    <div id="display">
      <p className="display-p">Power</p>
      <input className="toggle" type="checkbox" />

      <p className="display-p">Volume</p>
      <input type="range" />
       
      <p className="display-p">"Sound Title"</p>
    </div>
  )
}

export default Display;
