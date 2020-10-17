<template>
  <div id="app">
    <v-app>
     <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>NO CARD</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <router-link tag='div' class='v-tab' v-for="item in items" :to="item.link" :key="item.text">
              
                {{ item.text }}
              
            </router-link>
          </v-tabs>
        </template>
      </v-toolbar>

    </v-card>

    <router-view></router-view>

    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Tab from './components/Tab.vue'

export default {
  name: "App",
  components: {},
  mounted() {},
  methods : {
  },
  data() {
    return {
      tab: null,
      items: [
        { text : "home" , link : '/'},
        { text : "list" , link : '/list'},
        { text : "admin" , link : '/admin'},
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>

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
  /* margin-top: 60px; */
}
</style>
