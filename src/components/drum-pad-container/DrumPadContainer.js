import './drumPadContainer.css';
import DrumPad from '../drum-pad/DrumPad';

function DrumPadContainer(props) {
  console.log(props.audioClips)
  return(
    <div id="drum-pad-container">
      {
        props.audioClips.map(clip => {
          return <DrumPad clip={clip}/>
        })
      }

      {/* <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad /> */}
    </div>
  )
}

export default DrumPadContainer;