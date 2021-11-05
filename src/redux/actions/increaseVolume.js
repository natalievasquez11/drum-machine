import { INCREASE_VOLUME } from '../constants/action-types';

export function increaseVolume(payload) {
  return {
    type: INCREASE_VOLUME,
    payload
  }
}