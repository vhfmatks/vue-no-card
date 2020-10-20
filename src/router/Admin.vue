<template>
  <div id="admin">
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="5">
            <v-text-field
              label="검색"
              placeholder="search keword.."
              v-model="srchKey"
              hide-details='auto'
              @keyup.enter="addrSearch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn  @click="addrSearch()" x-large color="secondary" outlined>
              검색
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-list-item
            v-show="srchResult.length"
            v-for="item in srchResult"
            :key="item.index"
            @click="selectSrchResult(item)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.merNm }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.merAddr }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              :value="merNm"
              label="이름"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              :value="merAddr"
              label="주소"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              :value="desc"
              label="DESC"
              outlined
              disabled
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-select
              v-model="payMthd"
              :items="items"
              attach
              chips
              label="Pay"
              multiple
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="12">
            <v-btn @click="registerMerInfo()" block outlined> 저장 </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios"
import firebase from 'firebase'

export default {
  components : {
    
  },
  data: () => ({
    // items: [ { key: 1, value : "MS" } , { key: 2, value : "QR" } , { key: 3, value : "KakaoPay" }, { key: 4, value : "NFC" } ],
    items: ["MS", "NFC", "BC QR", "KakaoPay"],
    payMthd: [],
    srchKey: "",
    merNm: "",
    merAddr: "",
    desc: "",
    position: { x: 0, y: 0 },
    srchResult: [],
  }),
  methods: {
    init() {
      this.payMthd = [];
      this.srchKey = this.merNm = this.merAddr = this.desc  = "";
      this.srchResult = [];
    },
    registerMerInfo() {
      if( this.merNm == "" ) return alert("가맹점명을 입력하세요.")
      if( this.merAddr == "" ) return alert("가맹점주소를 입력하세요.")
      if( this.payMthd.length <= 0 ) return alert("결제방식을 1개이상 입력하세요.")

      // var newMerKey = firebase.database().ref().child("merInfo").push().key;

      // var position = { y: y, x: x };
      var merData = {
        merNm: this.merNm,
        merAddr: this.merAddr,
        merPayMthd: this.payMthd,
        position: this.position,
        desc: this.desc,
      };
      
      firebase.firestore().collection('merInfo').add(merData).then( () => { 
        alert('성공'); 
        this.init() 
      
      });
      // var updates = {};
      // updates["/merInfo/" + newMerKey] = merData;
      // updates['/merInfo/'] = merData;
      // firebase.database().ref().update(updates).then(() => {alert('성공'); this.init()});
      // callback('성공');
    },
    selectSrchResult(selectedItem) {
      this.merNm = selectedItem.merNm;
      this.merAddr = selectedItem.merAddr;
      this.desc = selectedItem.desc;
      this.position = selectedItem.position;
      this.srchResult = [];
    },
    addrSearch() {
      if (this.srchKey == "") return alert("검색어를 입력하세요");
      this.srchResult = [];
      var url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${this.srchKey}`;
      axios
        .request({
          method: "GET",
          url: url,
          headers: {
            Authorization: "KakaoAK 6d623db42c62a7b4d05667ec5352a03c",
          },
        })
        .then((response) => {
          response.data.documents.forEach((element, index) => {
            this.srchResult.push({
              index: index,
              merNm: element.place_name,
              merAddr: element.road_address_name,
              desc: element.category_name,
              position: { x: element.x, y: element.y },
            });
          });
        });
    },
  },
};
</script>

<style>
</style>