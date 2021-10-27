import { UPDATE_AUDIO } from '../constants/action-types';

const initialState = {
  currentAudioClip: {}
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_AUDIO:
      return {...state, currentAudioClip: action.payload}
    default:
      return state;
  }

}

export default rootReducer;