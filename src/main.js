import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import store from './store';
import App from './App.vue'
import router from './routes'
import VueCryptojs from 'vue-cryptojs'


createApp(App)
    .use(router).use(store).use(VueCryptojs)
    .mount('#app')

import 'bootstrap/dist/js/bootstrap.js'

