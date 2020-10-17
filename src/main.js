import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyAR0DU_ySDKECkdJ_ed8SQ-OcaDdZzPRlg",
  authDomain: "no-card-d6bd3.firebaseapp.com",
  databaseURL: "https://no-card-d6bd3.firebaseio.com",
  projectId: "no-card-d6bd3",
  storageBucket: "no-card-d6bd3.appspot.com",
  messagingSenderId: "867586373609",
  appId: "1:867586373609:web:4af387c8ecafea0863fd78",
  measurementId: "G-BT7BKGZ2EY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  render: h => h(App),
  router 
}).$mount('#app')
