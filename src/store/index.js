import { createStore } from 'vuex';
import routine from './modules/routine';

const store = createStore({
  modules: {
    routine,
  },
});

export default store;
