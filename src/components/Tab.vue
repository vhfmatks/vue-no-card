<template>
  <div>
      <v-sheet
    height="10"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in d_items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon>
        
      </v-app-bar-nav-icon>
      <v-btn @click.stop="drawer = !drawer">abcd</v-btn>
      <v-toolbar-title> {{ title }} </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <!-- <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <router-link
            tag="div"
            class="v-tab"
            v-for="item in items"
            :to="item.link"
            :key="item.text"
          >
            {{ item.text }}
          </router-link>
        </v-tabs>
      </template> -->
    </v-toolbar>
    
  </v-card>
  </div>
</template>

<script>
// import Menu from './Menu'
export default {
  components : {
    // Menu,
  },
  props : {
    title : String
  },
  data() {
    return {
      tab: null,
      items: [
        { text : "home" , link : '/'},
        { text : "list" , link : '/list'},
        { text : "admin" , link : '/admin'},
      ],
        drawer: null,
        d_items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
    };
  },
};
</script>

<style>
</style>