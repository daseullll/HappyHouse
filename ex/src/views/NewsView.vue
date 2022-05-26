<template>
  <div class="container outer">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/FireEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">뉴스</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">우리 동네 HOT한 소식!!</div>
    <!--news 시잓-->
    <div class="news-box select-news">
      <button class="news-cata-btn fs-16 notoMid" @click="showNewsAll">
        전체
      </button>
      <button class="news-cata-btn fs-16 notoMid" @click="showNewsHouse">
        아파트 소식
      </button>
      <button class="news-cata-btn fs-16 notoMid" @click="showNewsSchool">
        학군 소식
      </button>
    </div>
    <div class="mb-40 empty"></div>
    <house-news-list v-if="houseClicked"></house-news-list>
    <school-news-list v-if="schoolClicked"></school-news-list>
  </div>
</template>

<script>
import HouseNewsList from "@/components/news/HouseNewsList.vue";
import SchoolNewsList from "@/components/news/SchoolNewsList.vue";

export default {
  data() {
    return {
      houseClicked: true,
      schoolClicked: true,
    };
  },
  components: {
    HouseNewsList,
    SchoolNewsList,
  },
  methods: {
    showNewsAll() {
      this.houseClicked = true;
      this.schoolClicked = true;
    },
    showNewsHouse() {
      this.houseClicked = true;
      this.schoolClicked = false;
      // console.log("clicked");
    },
    showNewsSchool() {
      this.houseClicked = false;
      this.schoolClicked = true;
      // console.log("clicked");
    },
  },
};
</script>
<style lang="scss">
.news-cata-btn {
  margin-left: 0px;
  // width: 100px;
  height: 48px;

  background: $color-gray-6;
  border-radius: 35px;
  border: none;
  color: $color-white;
  margin-right: 20px;
  padding: 0 20px 0 20px;
  float: left;

  :hover {
    color: $color-primary;
  }
  :active {
    color: $color-primary;
  }
}
.empty {
  height: 50px;
}
</style>
