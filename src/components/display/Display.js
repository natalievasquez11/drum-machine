import './display.css';
import './toggle.css';
import { connect } from 'react-redux';
import { decreaseVolume } from '../../redux/actions/decreaseVolume';
import { increaseVolume } from '../../redux/actions/increaseVolume';

function Display({ currentAudioClip, volume, increaseVolume, decreaseVolume }) {
  console.log(volume)
  const disableVolumeButton = () => {
    if(volume === 1) {
      document.getElementById("inc-vol").disabled = true;
    } else if(volume === 0) {
      document.getElementById("dec-vol").disabled = true;
    } else {
      document.getElementById("dec-vol").disabled = false;
      document.getElementById("inc-vol").disabled = false;
    }
  }

  return(
    <div id="display">
      <p className="display-p">Power</p>
      <input className="toggle" type="checkbox" />

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
    volume: state.volume
   }
}

const mapDispatchToProps = { increaseVolume, decreaseVolume };

export default connect(mapStateToProps, mapDispatchToProps)(Display);
