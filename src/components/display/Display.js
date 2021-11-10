import './display.css';
import './toggle.css';
import { connect } from 'react-redux';
import { decreaseVolume } from '../../redux/actions/decreaseVolume';
import { increaseVolume } from '../../redux/actions/increaseVolume';
import { updatePower } from '../../redux/actions/power';

function Display({ currentAudioClip, volume, power, increaseVolume, decreaseVolume, updatePower }) {
  return(
    <div id="display">
      <p className="display-p">Power</p>
      <input className="toggle" type="checkbox" onChange={updatePower}/>

      <p className="display-p">Volume</p>
      <div className="button-div">
        <button className="volume-button" onClick={decreaseVolume} disabled={volume === 0 || !power ? true : false}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="volume-button"  onClick={increaseVolume} disabled={volume === 1 || !power ? true : false}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      {!power ? <p></p> : <p className="display-p">{currentAudioClip.name}</p>}
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
