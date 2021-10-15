import './drumMachine.css';
import DrumPadContainer from '../drum-pad-container/DrumPadContainer';
import Display from '../display/Display';
import ClapCrackle from '../../audio/Clap-Crackle.wav';
import ClapNeat from '../../audio/Clap-Neat.wav';
import HatsMetal from '../../audio/Hats-Metal.wav';
import KickBoiler from '../../audio/Kick-Boiler.wav';
import KickCoffeeShop from '../../audio/Kick-CoffeeShop.wav';
import PercKungFu from '../../audio/Perc-KungFu.wav';
import PercTomtom from '../../audio/Perc-Tomtom.wav';
import SnareBlackout from '../../audio/Snare-Blackout.wav';
import SnareDatasette from '../../audio/Snare-Datasette.wav';




function DrumMachine() {

  const audioClips = [
    { sound: ClapCrackle, label: "Q" }, 
    { sound: ClapNeat, label: "W" },
    { sound: HatsMetal, label: "E" },
    { sound: KickBoiler, label: "A" },
    { sound: KickCoffeeShop, label: "S" },
    { sound: PercKungFu, label: "D" },
    { sound: PercTomtom, label: "Z" },
    { sound: SnareBlackout, label: "X" },
    { sound: SnareDatasette, label: "C" }
  ]
  return(
    <div id="drum-machine">
      <DrumPadContainer audioClips={audioClips}/>
      <Display />
    </div>
  )
}

export default DrumMachine;