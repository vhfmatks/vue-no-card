import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase'
import VueSession from 'vue-session'

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyDeu4JqbhxChB2mVJSuxyWjk1Xmmhb3XCw",
  authDomain: "pay-map.firebaseapp.com",
  databaseURL: "https://pay-map.firebaseio.com",
  projectId: "pay-map",
  storageBucket: "pay-map.appspot.com",
  messagingSenderId: "110922632702",
  appId: "1:110922632702:web:fba71e27946fc3292884af",
  measurementId: "G-5RQC0VHDH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var sessionOptions = {
  persist : true
}
Vue.use(VueSession, sessionOptions);

new Vue({
  vuetify,
  render: h => h(App),
  router 
}).$mount('#app')
