import { UPDATE_AUDIO } from '../constants/action-types';

export function updateAudioClip(payload) {
  return {
    type: UPDATE_AUDIO,
    payload
  }
}