import './drumPad.css';

function DrumPad(props) {

  let soundPlay = () => {
    const audio = document.getElementById(props.clip.label);
    audio.play();
  }

  return(
    <div className="drum-pad"  id={props.clip.padID} onClick={() => soundPlay()}>
      <audio src={props.clip.sound} className="clip" id={props.clip.label} />
      <p >{props.clip.label}</p>
    </div>
  )
}

export default DrumPad;