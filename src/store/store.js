import { createStore } from 'redux';
import rootReducer from './reducers/audioClipReducer';

const store = createStore(rootReducer);

export default store;