import './drumPad.css';

function DrumPad(props) {

  let soundPlay = () => {
    const audio = document.getElementById(props.clip.label);
    audio.play();
  }

  let handleKeyDown = (e) => {
    console.log('working');
    console.log(e.key)
  }

  return(
    <div className="drum-pad"  id={props.clip.padID} onClick={soundPlay} tabIndex="-1" onKeyDown={handleKeyDown}>
      <audio src={props.clip.sound} className="clip" id={props.clip.label} />
      <p>{props.clip.label}</p>
    </div>
  )
}

export default DrumPad;
