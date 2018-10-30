import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
// import Vuex from 'vuex'
import {store} from './store'
import DateFilter from './filters/date';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import AlertComponent from '@/components/Shared/Alert';

Vue.component('app-alert', AlertComponent);

Vue.filter('date', DateFilter);
Vue.use(Vuetify, { theme: {
  primary: colors.red.darken3,
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDrYpXtRyythpSPjSkXWzV1flXC6EfxAEUraPOrt",
      authDomain: "meetup-1128d.firebaseapp.com",
      databaseURL: "https://meetup-1128d.firebaseio.com",
      projectId: "meetup-1128d",
      storageBucket: "meetup-1128d.appspot.com",
    });
  }
})
