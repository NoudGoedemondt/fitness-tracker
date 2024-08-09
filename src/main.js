import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index';

import BaseListItem from './components/base/BaseListItem.vue';

const app = createApp(App);

app.use(store);

app.component('base-list-item', BaseListItem);

app.mount('#app');
