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
    { sound: ClapCrackle, label: "Q", padID: "Q-pad", name: "Crackle Clap" }, 
    { sound: ClapNeat, label: "W", padID: "W-pad", name: "Neat Clap"  },
    { sound: HatsMetal, label: "E", padID: "E-pad", name: "Metal Hats"  },
    { sound: KickBoiler, label: "A", padID: "A-pad", name: "Boiler Kick"  },
    { sound: KickCoffeeShop, label: "S", padID: "S-pad", name: "Coffee Shop Kick"  },
    { sound: PercKungFu, label: "D", padID: "D-pad", name: "Kung Fu Perc"  },
    { sound: PercTomtom, label: "Z", padID: "Z-pad", name: "Tomtom Perc"  },
    { sound: SnareBlackout, label: "X", padID: "X-pad", name: "Blackout Snare"  },
    { sound: SnareDatasette, label: "C", padID: "C-pad", name: "Datasette Snare"  }
  ]

  return(
    <div id="drum-machine">
      <DrumPadContainer audioClips={audioClips}/>
      <Display />
    </div>
  )
}

export default DrumMachine;
