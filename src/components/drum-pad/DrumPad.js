import './drumPad.css';
import clap1 from '../../audio/Clap-Neat.wav';
import { Howl, Howler } from 'howler';

const audioClip = {
  sound: clap1,
  label: "B"
}

function DrumPad(props) {

  let soundPlay = (src) => {
    const sound = new Howl({
      src
    });
    sound.play();
  }

  Howler.volume(1.0);

  return(
    <div className="drum-pad" id={props.clip.label} onClick={() => soundPlay(props.clip.sound)}>
      <p>{props.clip.label}</p>
    </div>
  )
}

export default DrumPad;