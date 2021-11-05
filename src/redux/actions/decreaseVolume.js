import { DECREASE_VOLUME } from '../constants/action-types';

export function decreaseVolume(payload) {
  return {
    type: DECREASE_VOLUME,
    payload
  }
}