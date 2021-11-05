import { UPDATE_AUDIO, INCREASE_VOLUME, DECREASE_VOLUME } from '../constants/action-types';

const initialState = {
  currentAudioClip: {}, 
  volume: .5
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_AUDIO:
      return {...state, currentAudioClip: action.payload}
    case INCREASE_VOLUME:
      return {...state, volume: action.payload}
    case DECREASE_VOLUME:
      return {...state, volume: action.payload}
    default:
      return state;
  }

}

export default rootReducer;