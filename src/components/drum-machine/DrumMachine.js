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
    { sound: ClapCrackle, label: "Q", padID: "Q-pad" }, 
    { sound: ClapNeat, label: "W", padID: "W-pad"  },
    { sound: HatsMetal, label: "E", padID: "E-pad"  },
    { sound: KickBoiler, label: "A", padID: "A-pad"  },
    { sound: KickCoffeeShop, label: "S", padID: "S-pad"  },
    { sound: PercKungFu, label: "D", padID: "D-pad"  },
    { sound: PercTomtom, label: "Z", padID: "Z-pad"  },
    { sound: SnareBlackout, label: "X", padID: "X-pad"  },
    { sound: SnareDatasette, label: "C", padID: "C-pad"  }
  ]

  return(
    <div id="drum-machine">
      <DrumPadContainer audioClips={audioClips}/>
      <Display />
    </div>
  )
}

export default DrumMachine;
