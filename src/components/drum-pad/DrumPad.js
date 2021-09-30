import './drumPad.css';

function DrumPad() {
  let handleDrumSound = () => {
    console.log('click works')
  }

  return(
    <div className="drum-pad"
    onClick={handleDrumSound}>
        <h1>A</h1>
    </div>
  )
}

export default DrumPad;