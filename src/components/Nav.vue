<template>
  <v-bottom-navigation v-model="value">
      <v-btn v-for="item in items" :key="item.text" :value="item.text">
          <router-link tag="div" :to="item.link">
          <span>{{ item.text }}</span>
          <v-icon>{{ item.icon }}</v-icon>
          </router-link>
      </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: "recent" ,
    items: [
            { text : "home" , link : '/', icon : 'mdi-map-marker'},
            { text : "list" , link : '/list', icon:'mdi-heart'},
            { text : "admin" , link : '/admin', icon:'mdi-history'},
            ],
    }),
};
</script>

<style>
</style>