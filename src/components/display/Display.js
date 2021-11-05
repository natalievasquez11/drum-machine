import './display.css';
import './toggle.css';
import { connect } from 'react-redux';

function Display({ currentAudioClip }) {
  return(
    <div id="display">
      <p className="display-p">Power</p>
      <input className="toggle" type="checkbox" />

      <p className="display-p">Volume</p>
      {/* <input type="range" id='volume-range'/> */}
      <div className="button-div">
        <button className="volume-button"><i className="fas fa-plus"></i></button>
        <button className="volume-button"><i className="fas fa-minus"></i></button>
      </div>

      <p className="display-p">{currentAudioClip.name}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return { currentAudioClip: state.currentAudioClip }
}

export default connect(mapStateToProps)(Display);
