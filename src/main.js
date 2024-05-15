import { createApp } from 'vue';
import App from './App.vue';
import BaseListItem from './components/base/BaseListItem.vue';

const app = createApp(App);

app.component('base-list-item', BaseListItem);

app.mount('#app');
