import './drumPadContainer.css';
import DrumPad from '../drum-pad/DrumPad';

function DrumPadContainer(props) {

  return(
    <div id="drum-pad-container" tabIndex="0">
      {
        props.audioClips.map(clip => {
          return <DrumPad key={clip.label} clip={clip} />
        })
      }
    </div>
  )
}

export default DrumPadContainer;
