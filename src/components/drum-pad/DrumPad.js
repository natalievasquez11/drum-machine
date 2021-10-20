import './drumPad.css';
import { useEffect } from 'react';

function DrumPad(props) {

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
         document.removeEventListener('keydown', handleKeyDown);
       };
   }, [])

   function handleKeyDown(e) {
    console.log('working');
    console.log(e.key)
  }

  // let soundPlay = () => {
  //   const audio = document.getElementById(props.clip.label);
  //   audio.play();
  // }

  return(
    <div className="drum-pad"  id={props.clip.padID} onClick={props.soundPlay(props.clip.sound)} 
    // tabIndex="-1" 
    // onKeyDown={handleKeyDown}
    >
      <audio src={props.clip.sound} className="clip" id={props.clip.label} />
      <p>{props.clip.label}</p>
    </div>
  )
}

export default DrumPad;
