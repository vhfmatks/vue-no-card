<template>
  <div>
    <div id="map"></div>
    <MerDialog :dialog="dialog" :closeDialog="closeDialog" :data="dialogData" />
  </div>
</template>

<script>
import firebase from "firebase";
import MerDialog from '../components/MerDialog'

export default {
  name: "HomePage",
  data: () => ({
    map: null,
    merData: [],
    dialog: false,
    dialogData : {}
  }),
  mounted() {
    // console.log(this.map)
    if (this.map == null) {
      this.initMap();
    } else {
      console.log(this.map);
    }
  },
  components : {
    MerDialog
  },
  methods: {
    openDialog(merInfo){
      this.dialog = true;
      this.dialogData=merInfo;
    },
    closeDialog(){
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

      // var content = `
			// 				<div class="wrap">
			// 					<div class="info">
			// 						<div class="title">
			// 							${merInfo.merNm}
			// 						</div>
			// 						<div class="body">
			// 							${merInfo.merAddr}<br>
			// 							${merInfo.payMthdDiv}<br>
			// 							${merInfo.desc} 
			// 						</div>
			// 					</div>
			// 				</div>
			// `;
      // var overlay = new window.kakao.maps.CustomOverlay({
      //   content: content,
      //   map: this.map,
      //   position: marker.getPosition(),
      // });
      // overlay.setMap(this.map);
    //   var isOverlay = false;
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
      firebase
        .database()
        .ref("/merInfo")
        .on("value", (snap) => {
          for (const [key, value] of Object.entries(snap.val())) {
            this.merData.push({ key, data: value });
            this.merMarker(value);
          }
        });
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 70vh;
}
.wrap {position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
.wrap * {padding: 0;margin: 0;}
.wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
.wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
.info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
.info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
.info .close:hover {cursor: pointer;}
.info .body {position: relative;overflow: hidden;}
.info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
.desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
.info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
.info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
.info .link {color: #5085BB;}
</style>