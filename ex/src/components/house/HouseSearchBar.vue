<template>
  <div class="house-nav-bar">
    <b-form-select
      name="sido"
      id="sido"
      class="ml-10"
      v-model="sidoCode"
      :options="sidos"
      @change="gugunList"
    ></b-form-select>

    <b-form-select
      name="gugun"
      id="gugun"
      class="ml-10"
      v-model="gugunCode"
      :options="guguns"
      @change="dongList"
    >
      <!-- <option value="">구/군선택</option> -->
    </b-form-select>
    <b-form-select
      name="dong"
      id="dong"
      class="ml-10"
      v-model="dongCode"
      :options="dongs"
      @change="searchApt"
    >
      <!-- <option value="">동 선택</option> -->
    </b-form-select>
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

      // sidoCode: null,
      // gugunCode: null,
      // dongCode: null,

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
    console.log(this.sidoCode);
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
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      var iwContent = '<div style="padding:5px;">Hello World!</div>',
        iwPosition = new kakao.maps.LatLng(34.9406968, 127.6958882),
        iwRemoveable = true;

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map,
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },
  },
};
</script>

<style></style>
