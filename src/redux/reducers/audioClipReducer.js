import { UPDATE_AUDIO, INCREASE_VOLUME, DECREASE_VOLUME } from '../constants/action-types';

const initialState = {
  currentAudioClip: {}, 
  volume: .5
};

function incVol(volume) {
  if(volume < 1) {
    return Math.round(volume * 10)/10 + 0.1;
  }
  return volume;
}

function decVol(volume) {
  if(volume > 0) {
    return Math.round(volume * 10)/10 - 0.1;
  }
  return volume;
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_AUDIO:
      return {...state, currentAudioClip: action.payload}
    case INCREASE_VOLUME:
      return {...state, volume: incVol(state.volume)}
    case DECREASE_VOLUME:
      return {...state, volume: decVol(state.volume)}
    default:
      return state;
  }
}

export default rootReducer;