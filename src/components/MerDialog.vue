<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="headline">
          {{ data.merNm }}
        </v-card-title>
        <v-card-text>{{ data.merAddr }}</v-card-text>
        <v-card-text>{{ data.desc }}</v-card-text>
    <v-list-item v-for="(item, i) in data.merPayMthd" :key="i">
      <v-list-item-content>
        <v-list-item-title> {{ item }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="closeDialog"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    closeDialog: Function,
    data: Object,
  },
};
</script>