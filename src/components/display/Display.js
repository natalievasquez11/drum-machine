import './display.css';
import './toggle.css';

function Display() {
  return(
    <div id="display">
      <p id="power">Power</p>
      <input className="toggle" type="checkbox" />
    </div>
  )
}

export default Display;