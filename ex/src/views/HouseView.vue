<template>
  <div class="container outer">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/PencilEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">주택정보</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">
      관심 지역을 선택해보세요! 아파트의 실거래가를 조회할 수 있습니다 :)
    </div>

    <section>
      <div class="apt_page">
        <div class="apt_title">
          <div id="blank_1"></div>
        </div>
        <div class="apt_show">
          <house-search-bar></house-search-bar>
        </div>
        <b-row>
          <b-col cols="6" align="left">
            <house-list />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <house-info-modal />
          </b-col>
        </b-row>
      </div>
    </section>
    <div class="apt_show" id="map" style="width: 500px; height: 400px"></div>
  </div>
</template>

<script>
// import { mapState, mapActions, mapMutations } from "vuex";
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseInfoModal from "@/components/house/HouseInfoModal.vue";

// const houseStore = "houseStore";

export default {
  components: {
    HouseSearchBar,
    HouseList,
    HouseInfoModal,
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  /* height: vh(800px); */
}
</style>
