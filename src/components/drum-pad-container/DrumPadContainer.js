import './drumPadContainer.css';
import DrumPad from '../drum-pad/DrumPad';

function DrumPadContainer(props) {
  return(
    <div id="drum-pad-container">
      {
        props.audioClips.map(clip => {
          return <DrumPad clip={clip}/>
        })
      }
    </div>
  )
}

export default DrumPadContainer;