import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/User.store';
import Groups from './modules/Groups.store';
import Messaging from './modules/Messaging.store';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    User,
    Groups,
    Messaging
  }
});
export default store;
