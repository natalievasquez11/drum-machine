import './drumPadContainer.css';
import { useEffect } from 'react';

function DrumPadContainer(props) {

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
         document.removeEventListener('keydown', handleKeyDown);
       };
   }, [])

   function handleKeyDown(e) {
    for(let x = 0; x < props.audioClips.length; x++) {
      if(e.key.toUpperCase() === props.audioClips[x].label) {
        soundPlay(e.key.toUpperCase())
      }
    }
    return;
  }

  let soundPlay = (label) => {
    const audio = document.getElementById(label);
    audio.play();
  }

  return(
    <div id="drum-pad-container">
      {
        props.audioClips.map(clip => {
          return (
            <div key={clip.label} className="drum-pad"  id={clip.padID} onClick={() => soundPlay(clip.label)}>
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
