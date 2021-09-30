import './drumPad.css';

function DrumPad() {
  let handleDrumSound = () => {
    console.log('click works');
  }

  return(
    <div className="drum-pad" onClick={handleDrumSound}>
        <p>A</p>
    </div>
  )
}

export default DrumPad;