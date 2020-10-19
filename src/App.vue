<template>
  <div id="app">
    <v-app>
      <v-card class="container overflow-hidden" >
        <v-app-bar color="deep-purple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title > NO !! CARD! !</v-toolbar-title>
        </v-app-bar>
        <!-- <v-btn> abcd </v-btn> -->
        <router-view></router-view>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >

              <router-link :to="item.link" v-for="(item,i) in menuItems" :key="i">
              <v-list-item >
                <v-list-item-icon>
                  <v-icon> {{ item.icon }} </v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <!-- <router-view class="router-view"></router-view> -->
      <!-- <Nav /> -->
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Tab from './components/Tab.vue'
export default {
  name: "App",
  components: {  },
  mounted() {},
  methods: {},
  computed : {
    // title : function() {  
    //     return this.menuItems[this.group].title  
    // } 
  },
  data() {
    return {
      tab: null,
      drawer: false,
      group: 0,
      menuItems : [
        { title : 'home' , link : '/' , icon : 'mdi-home' },
        // { title : 'list' , link : '/list' , icon : 'mdi-format-list-bulleted-square' },
        { title : 'admin' , link : '/admin' , icon : 'mdi-new-box' },
      ]
    };
  },
};
</script>

<style>
.router-view {
  overflow: scroll hidden;
  height: 80vh;
}
.content {
  height: 100px;
}
a {
  text-decoration: none;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* margin-top: 60px; */
}
</style>
