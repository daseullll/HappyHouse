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
          <!-- <h3 class="apt_title_detail hidden">아파트 조회 상세</h3>
          <button
            class="apt_title_detail hidden"
            id="detail_btn"
            onclick="location.reload()"
          >
            리셋
          </button> -->
          <div id="blank_1"></div>
        </div>
        <div class="apt_show">
          <house-search-bar></house-search-bar>
        </div>

        <!-- <div class="apt_show mt-20">
          <table id="price">
            <tr class="tr_size">
              <th id="first_th">아파트</th>
              <th class="price_th">금액</th>
              <th class="price_th">동</th>
              <th class="price_th">년</th>
              <th class="price_th">월</th>
              <th class="price_th">일</th>
              <th id="last_th">전용면적</th>
            </tr>
            <tbody id="aptinfo"></tbody>
          </table>
        </div> -->
      </div>
    </section>
    <div class="apt_show" id="map"></div>
  </div>
</template>

<script>
// import { mapState, mapActions, mapMutations } from "vuex";
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
// const houseStore = "houseStore";

export default {
  components: {
    HouseSearchBar,
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  /* height: vh(800px); */
}
</style>
