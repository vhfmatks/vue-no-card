<template>
  <div>
    <!-- <div id="map"></div>
    <MerDialog :dialog="dialog" :closeDialog="closeDialog" :data="dialogData" /> -->
    <v-tabs>
      <v-tab @click="showMap()">MAP</v-tab>
      <v-tab @click="showList()">LIST</v-tab>
      <v-spacer></v-spacer>

      <v-menu :close-on-content-click="false"
              min-width="50vw" min-height="100vh">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon large> mdi-magnify </v-icon>
              </v-btn>
            </template>
          
            <v-form>
              <v-card>
                <v-text-field label="검색" v-model="mapSearchKey"></v-text-field>
                <v-checkbox v-for="(item, i) in items" :key="i"
                            :label="item" :value="item" v-model="payMthd">
                </v-checkbox>
                 <!-- <v-select
                  v-model="payMthd"
                  :items="items"
                  attach
                  chips
                  label="Pay"
                  multiple
                  outlined
                ></v-select> -->
                <v-btn> Find </v-btn>
              </v-card>
            </v-form>
           
          </v-menu>
    </v-tabs>

    <Paymap v-if="showmap" v-bind:merData="merData" />
    <Paylist v-if="showlist" v-bind:merData="merData" />
  </div>
</template>

<script>
import firebase from "firebase";
import Paymap from "../components/Paymap";
import Paylist from "../components/Paylist";
export default {
  name: "HomePage",
  data: () => ({
    merData: [],
    showmap: true,
    showlist: false,
    mapSearchKey :"",
    payMthd :[] ,
    items: ["MS", "NFC", "BC QR", "KakaoPay"],
  }),
  methods: {
    showMap() {
      this.showmap = true;
      this.showlist = false;
    },
    showList() {
      this.showmap = false;
      this.showlist = true;
    },
  },
  mounted() {
    firebase
      .firestore()
      .collection("merInfo")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.merData.push({ key: doc.id, data: doc.data() });
        });
      })
      .catch((err) => {
        alert(err);
      });
  },
  components: {
    Paymap,
    Paylist,
  },
};
</script>

<style>
.wrap {
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  line-height: 1.5;
}
.wrap * {
  padding: 0;
  margin: 0;
}
.wrap .info {
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
}
.wrap .info:nth-child(1) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.info .title {
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
}
.info .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
}
.info .close:hover {
  cursor: pointer;
}
.info .body {
  position: relative;
  overflow: hidden;
}
.info .desc {
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
}
.desc .ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc .jibun {
  font-size: 11px;
  color: #888;
  margin-top: -2px;
}
.info .img {
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
}
.info:after {
  content: "";
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.info .link {
  color: #5085bb;
}
</style>