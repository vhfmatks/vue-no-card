<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
</template>

<script>
export default {
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
    };
  },
};
</script>

<style>
</style>