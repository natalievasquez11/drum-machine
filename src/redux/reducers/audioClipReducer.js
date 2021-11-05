import { UPDATE_AUDIO, INCREASE_VOLUME, DECREASE_VOLUME } from '../constants/action-types';

const initialState = {
  currentAudioClip: {}, 
  volume: {
    num: .5,
    max: false,
    min: false
  }
};

//TODO: fix rounding issue
function incVol(volume) {
  if(volume.num < 1) {
    return { num: volume.num + 0.1, max: false, min: false };
  }
  return { num: volume.num, max: true, min: false };
}

function decVol(volume) {
  if(volume.num > 0) {
    return { num: volume.num - 0.1, max: false, min: false };
  }
  return { num: volume.num, max: false, min: true };
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