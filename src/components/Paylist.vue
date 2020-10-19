<template>
  <div id='paylist'>
    <v-card class="mx-auto" max-width="100%" title>
      <v-divider></v-divider>
      <v-list-item three-line  v-for="(item, i) in merData" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ item.data.merNm }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.data.merAddr }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ item.data.desc }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    merData: Array,
  },
  data: () => ({
  }),
};
</script>
<style>
#paylist {
  height: 85vh;
  overflow: auto;
}
</style>