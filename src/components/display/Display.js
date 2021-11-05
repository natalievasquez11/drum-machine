import './display.css';
import './toggle.css';
import { connect } from 'react-redux';
import { decreaseVolume } from '../../redux/actions/decreaseVolume';
import { increaseVolume } from '../../redux/actions/increaseVolume';

function Display({ currentAudioClip, increaseVolume, decreaseVolume }) {
  return(
    <div id="display">
      <p className="display-p">Power</p>
      <input className="toggle" type="checkbox" />

      <p className="display-p">Volume</p>
      <div className="button-div">
        <button className="volume-button"><i className="fas fa-plus"></i></button>
        <button className="volume-button"><i className="fas fa-minus"></i></button>
      </div>

      <p className="display-p">{currentAudioClip.name}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    currentAudioClip: state.currentAudioClip
   }
}

const mapDispatchToProps = { increaseVolume, decreaseVolume };

export default connect(mapStateToProps, mapDispatchToProps)(Display);
