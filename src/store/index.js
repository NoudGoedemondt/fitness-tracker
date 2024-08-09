import { createStore } from 'vuex';
import routine from './modules/routine';
import log from './modules/log';

const store = createStore({
  modules: {
    routine,
    log,
  },
});

export default store;
