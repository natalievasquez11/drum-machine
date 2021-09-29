import './drumMachine.css';
import DrumPadContainer from '../drum-pad-container/DrumPadContainer';
import Display from '../display/Display';

function DrumMachine() {
  return(
    <div id="drum-machine">
      <DrumPadContainer />
      <Display />
    </div>
  )
}

export default DrumMachine;