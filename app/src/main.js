import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import routes from './routes';
import plausible from './plugins/plausible';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faVuejs,faLaravel } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus,faVuejs,faLaravel);

const plausibleOptions = { 
  domain: 'www.gummersbach-webentwickler.de',
  apiHost: 'https://tracking.jmartz.gmbh',
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);

app.use(plausible,plausibleOptions);
app.use(routes);
app.use(store);
app.component('fa', FontAwesomeIcon);
app.mount('#app');
