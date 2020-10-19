<template>
  <div>
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
        if(this.map == null) 
            this.initMap();
        else 
            newMer.forEach( (element )=>{
                this.merMarker(element.data);
            })
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

      window.kakao.maps.event.addListener(this.map, "click", function () {
        // overlay.setMap(null);
        // isOverlay = false;
      });
      window.kakao.maps.event.addListener(marker, "click", function () {
        // 오버레이 출력
        openDialog(merInfo);
        // console.log("click marker", marker , overlay);
        // overlay.setMap(this.map);
      });
    },
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new window.kakao.maps.LatLng(37.56637, 126.99676),
        level: 4,
      };
      this.map = new window.kakao.maps.Map(container, options);
      // //마커추가하려면 객체를 아래와 같이 하나 만든다.
      // var marker = new window.kakao.maps.Marker({
      //     position: this.map.getCenter()
      // });
      // marker.setMap(this.map);
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