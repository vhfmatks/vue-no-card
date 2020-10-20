<template>
  <div>
    <!-- <v-btn @click='showMarkers' > show </v-btn>
    <v-btn @click='hideMarkers' > clear </v-btn>
    <v-btn @click='clearMarkers' > clear </v-btn> -->

    <div id="map"></div>
    <MerDialog :dialog="dialog" :closeDialog="closeDialog" :data="dialogData" />
  </div>
</template>

<script>
// import firebase from "firebase";
import MerDialog from "../components/MerDialog";
export default {
  name: "Paymap",
  props: {
    merData: Array,
  },
  data: () => ({
    map: null,
    dialog: false,
    dialogData: {},
    markers :[]
  }),
  mounted() {
    if( this.map == null )
        this.initMap();
  },
  components: {
    MerDialog,
  },
  watch : {  
    merData : function(newMer) {
        // if(this.map == null) 
        //     this.initMap();
        // else 
        this.clearMarkers();
        newMer.forEach( (element )=>{
            this.merMarker(element.data);
        });
        this.showMarkers();
    }
  },
  methods: {
    openDialog(merInfo) {
      this.dialog = true;
      this.dialogData = merInfo;
    },
    closeDialog() {
      this.dialog = false;
    },
    merMarkerInit(){
      var marker = new window.kakao.maps.Marker({
        map: this.map,
      });
      marker.setMap(null);
    },
    setMarkers(map){
      this.markers.forEach( (marker) =>{
        marker.setMap(map);
      })
    },
    showMarkers(){
      this.setMarkers(this.map);
    },
    hideMarkers(){
      this.setMarkers(null);
    },
    clearMarkers(){
      this.hideMarkers();
      this.markers = [];
    },
    merMarker(merInfo) {
      var openDialog = this.openDialog;
      
      var marker = new window.kakao.maps.Marker({
        map: this.map,
        position: new window.kakao.maps.LatLng(
          merInfo.position.y,
          merInfo.position.x
        ),
      });
      marker.setMap(this.map);
      this.markers.push(marker);
      
      window.kakao.maps.event.addListener(this.map, "click", function () {
        // overlay.setMap(null);
        // isOverlay = false;
      });
      window.kakao.maps.event.addListener(marker, "click", function () {
        // 오버레이 출력
        openDialog(merInfo);
      });
    },
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new window.kakao.maps.LatLng(37.56637, 126.99676),
        level: 4,
      };
      this.map = new window.kakao.maps.Map(container, options);

      this.merData.forEach((element) => {
        this.merMarker(element.data);
      });
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
}
#map {
  width: 100%;
  height: 85vh;
}
</style>