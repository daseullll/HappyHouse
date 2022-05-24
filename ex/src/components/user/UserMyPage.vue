<template>
  <div class="regist">
    <div class="title-container"></div>

    <!-- 버튼 시작-->
    <!-- <div class="mypage-btn-form">
      <router-link
        :to="{
          name: 'user',
          params: { articleno: article.articleno },
        }"
        class="mypage-btn-delete fs-18 notoMid"
      >
        <span>탈퇴</span>
      </router-link>
      <button class="mypage-btn-modify fs-18 notoMid" @click="moveModify">
        수정
      </button>
    </div> -->
    <!--버튼 끝 -->
  </div>
</template>

<script>
import http from "@/api/http.js";

export default {
  name: "BoardList",
  components: {},
  data() {
    return {
      articles: [],
    };
  },
  created() {
    http.get("/board").then(({ data }) => {
      this.articles = data;
    });
  },
  methods: {
    moveModify() {
      this.$router.push({ name: "Modify" });
    },
  },
};
</script>

<style lang="scss">
.board-table {
  text-align: center;
  width: 100%;
  color: $color-dark;
  td,
  th {
    padding: 15px 0px 15px 0px;
  }

  .tb-first-line {
    padding: 20px 0;
    border-top: 1.5px solid $color-gray-7;
    border-bottom: 1.5px solid $color-gray-7;
  }
  .tb-last-line {
    border-bottom: 1.5px solid $color-gray-7;
  }
  .tb-line-line {
    border-bottom: 1px solid $color-gray-5;
  }
}

.mypage-btn-delete,
.mypage-btn-delete {
  margin-left: 0px;
  width: 100px;
  height: 48px;

  background: $color-gray-6;
  border-radius: 30px;
  border: none;
  color: $color-white;
  margin: 0 25px;
  float: right;
}
</style>
