<template>
  <div class="house-nav-bar">
    <b-row class="mt-4 mb-4 text-center">
      <b-col class="sm-1">
        <b-form-select
          name="sido"
          id="sido"
          class="ml-10"
          v-model="sidoCode"
          :options="sidos"
          @change="gugunList"
        ></b-form-select>
      </b-col>
      <b-col class="sm-1">
        <b-form-select
          name="gugun"
          id="gugun"
          class="ml-10"
          v-model="gugunCode"
          :options="guguns"
          @change="dongList"
        >
        </b-form-select>
      </b-col>
      <b-col class="sm-1">
        <b-form-select
          name="dong"
          id="dong"
          class="ml-10"
          v-model="dongCode"
          :options="dongs"
          @change="searchApt"
        >
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
const houseStore = "houseStore";

export default {
  name: "KakaoMap",
  data() {
    return {
      markers: [],
      infowindow: null,

      sidoCode: null,
      gugunCode: null,
      dongCode: null,

      map: null,
      ps: null,
      geocoder: null,
      infoWindow: null,

      customOverlays: [],
      overlayIdx: 0,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=08985b67250897bfb740eaa75f2f566f";
      document.head.appendChild(script);
    }
  },
  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.getSido();
  },

  methods: {
    ...mapActions(houseStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
    ]),
    ...mapMutations(houseStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
    ]),
    gugunList() {
      console.log("gugunList - " + this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList() {
      console.log("dongList - " + this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },
    async searchApt() {
      if (this.dongCode) {
        await this.getHouseList(this.dongCode);
        this.displayMarkers(this.houses);
      }
    },

    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(34.9406968, 127.6958882),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);

      this.ps = new kakao.maps.services.Places();
      this.infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      this.geocoder = new kakao.maps.services.Geocoder();
    },

    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    displayMarkers(places) {
      let fragment = document.createDocumentFragment();
      let bounds = new kakao.maps.LatLngBounds();
      // 지도에 표시되고 있는 마커를 제거합니다
      this.removeMarker();
      for (var i = 0; i < places.length; i++) {
        let placePosition = new kakao.maps.LatLng(places[i].lat, places[i].lng);
        let marker = this.addMarker(placePosition, i);
        let itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);
        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function (
          map,
          marker,
          title,
          code,
          place,
          displayInfowindow,
          removeInfowindow
        ) {
          kakao.maps.event.addListener(marker, "click", function () {
            displayInfowindow(marker, title, place);
            console.log(title + " " + code);
          });
          kakao.maps.event.addListener(map, "click", function () {
            removeInfowindow();
          });
          itemEl.onmouseover = function () {
            displayInfowindow(marker, title);
          };
          itemEl.onmouseout = function () {
            removeInfowindow();
          };
        })(
          this.map,
          marker,
          places[i].aptName,
          places[i].aptCode,
          places[i],
          this.displayInfowindow,
          this.removeInfowindow
        );
        fragment.appendChild(itemEl);
      }
      // 마커를 생성하고 지도에 표시합니다
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      this.map.setBounds(bounds);
    },
    addMarker(position, idx) {
      //마커 생성하고 지도 위에 마커를 표시
      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });
      marker.setMap(this.map); // 지도 위에 마커를 표출합니다
      this.markers.push(marker); // 배열에 생성된 마커를 추가합니다
      return marker;
    },
    removeMarker() {
      //지도 위에 표시되고 있는 모든 마커 제거
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },
    getListItem(index, place) {
      //검색결과 항목을 Element로 반환
      let el = document.createElement("li");
      let itemStr = `
          <span class="markerbg marker_${index + 1}></span>
          <div class="info"><h5>${place.aptName}</h5> <button>관심등록</button>
          <span>${place.sidoName} ${place.gugunName} ${place.dongName} ${
        place.jibun
      }</span>
          `;
      el.innerHTML = itemStr;
      el.className = "item";
      return el;
    },
    displayInfowindow(marker, title, place) {
      //   console.log(title);
      var content = `
          <div class="mapoverlaybox">
              <div class="boxtitle">${title}</div>
              <ul>
                  <li class="up">
                      <span class="title">건축년도</span>
                      <span class="count">${place.buildYear}</span>
                  </li>
                  <li>
                      <span class="title">주소</span>
                      <span class="count">${place.gugunName} ${place.dongName} ${place.jibun}</span>
                  </li>
                  <li>
                      <span class="title">최신거래금액</span>
                      <span class="count">${place.recentPrice}</span>
                  </li>
              </ul>
          </div>
      `;
      let position = new kakao.maps.LatLng(
        marker.getPosition().getLat() + 0.00033,
        marker.getPosition().getLng() - 0.00003
      );
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        xAnchor: 0.3,
        yAnchor: 0.91,
      });
      this.customOverlays[this.overlayIdx] = customOverlay;
      this.customOverlays[this.overlayIdx++].setMap(this.map);
      //	console.log("인덱스 증가 : "+overlayIdx);
    },

    removeInfowindow() {
      if (this.overlayIdx > 0) {
        this.customOverlays[--this.overlayIdx].setMap(null);
      }
      //	console.log("인덱스 감소 : "+overlayIdx);
    },
  },
};
</script>

<style></style>
