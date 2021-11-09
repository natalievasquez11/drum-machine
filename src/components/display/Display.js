import './display.css';
import './toggle.css';
import { connect } from 'react-redux';
import { decreaseVolume } from '../../redux/actions/decreaseVolume';
import { increaseVolume } from '../../redux/actions/increaseVolume';
import { updatePower } from '../../redux/actions/power';

function Display({ currentAudioClip, volume, power, increaseVolume, decreaseVolume, updatePower }) {

  function disableVolumeButton() {
    if(volume === 0.9) {
      document.getElementById("inc-vol").disabled = true;
    } else if(volume === 0.1) {
      document.getElementById("dec-vol").disabled = true;
    } else {
      document.getElementById("dec-vol").disabled = false;
      document.getElementById("inc-vol").disabled = false;
    }
  }

  return(
    <div id="display">
      <p className="display-p">Power</p>
      <input className="toggle" type="checkbox" onChange={updatePower}/>

      <p className="display-p">Volume</p>
      <div className="button-div">
        <button className="volume-button" id="dec-vol"
        onClick={() => {decreaseVolume(); disableVolumeButton()}}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="volume-button" id="inc-vol"
        onClick={() => {increaseVolume(); disableVolumeButton()}}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <p className="display-p">{currentAudioClip.name}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    currentAudioClip: state.currentAudioClip,
    volume: state.volume,
    power: state.power
   }
}

const mapDispatchToProps = { increaseVolume, decreaseVolume, updatePower };

export default connect(mapStateToProps, mapDispatchToProps)(Display);
