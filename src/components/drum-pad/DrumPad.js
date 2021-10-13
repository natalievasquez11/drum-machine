import './drumPad.css';
import clap1 from '../../audio/Clap-Neat.wav';
import { Howl, Howler } from 'howler';


const audioClip = {
  sound: clap1,
  label: "B"
}

function DrumPad() {

  let soundPlay = (src) => {
    const sound = new Howl({
      src
    });
    sound.play();
  }

  Howler.volume(1.0);

  return(
    <div className="drum-pad" onClick={() => soundPlay(audioClip.sound)}>
      <p>{audioClip.label}</p>
    </div>
  )
}

export default DrumPad;