import './drumPadContainer.css';
import { useEffect } from 'react';

function DrumPadContainer(props) {
  useEffect(() => {
    function handleKeyDown(e) {
      for(let x = 0; x < props.audioClips.length; x++) {
        if(e.key.toUpperCase() === props.audioClips[x].label) {
          soundPlay(props.audioClips[x]);
        }
      }
      return;
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
         document.removeEventListener('keydown', handleKeyDown);
       };
   }, [props.audioClips]);

  let soundPlay = (clip) => {
    if(props.power) {
      props.updateAudioClip(clip);
      const audio = document.getElementById(clip.label);
      audio.volume = props.volume;
      audio.play();
    }
  }

  return(
    <div id="drum-pad-container">
      {
        props.audioClips.map(clip => {
          return (
            <div key={clip.label} className={"drum-pad" + (!props.power ? " disable-pads" : "")}  id={clip.padID} onClick={() => soundPlay(clip)}>
              <audio src={clip.sound} className="clip" id={clip.label} />
              <p>{clip.label}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DrumPadContainer;
