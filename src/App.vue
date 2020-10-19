<template>
  <div id="app">
    <v-app>
      <router-view class='router-view'></router-view>
      <Nav />
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Tab from './components/Tab.vue'
import Nav from './components/Nav'
export default {
  name: "App",
  components: { Nav },
  mounted() {},
  methods : {
  },
  data() {
    return {
      tab: null,
      
    };
  },
};
</script>

<style>
.router-view {
  overflow: scroll hidden;
  height : 90vh;
}
.content {
  height : 100px;
}
a {
  text-decoration: none;
  color:white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height : 100vh;
  /* margin-top: 60px; */
}
</style>
