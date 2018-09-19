import config from './config';
config.environment = __ENV__;  //eslint-disable-line
config.api = __API__;          //eslint-disable-line

import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import Multiselect from 'vue-multiselect';
import router from './router';
import FontAwesomeIcon from './fontAwesomeIcons';
import store from './stores';
import './styles/global.css';


// https://bootstrap-vue.js.org/docs
Vue.use(BootstrapVue);

//https://monterail.github.io/vuelidate
Vue.use(Vuelidate);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// https://vue-multiselect.js.org
Vue.component('multiselect', Multiselect);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

if (config.environment !== 'PRODUCTION') {
  console.info(`${config.environment} MODE\n\nConfig:\n`, config); // eslint-disable-line
}
