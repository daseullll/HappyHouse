<template>
  <div class="regist">
    <div class="title-container board-detail-title">
      <div class="board-title-img">
        <img
          class="boardTitleIcon"
          src="@/assets/images/emoji/SparklingPinkHeart.png"
        />
        <div class="view fs-40 board-title notoBold mt-20">
          {{ article.subject }}
        </div>
        <div class="view">
          <label for="userid" class="mr-20 mt-20 notoReg fs-20">작성자 :</label>
          <span class="fs-20 ml-10">{{ article.userid }}</span>
        </div>
      </div>
    </div>
    <div class="regist_form board-detail-box">
      <div class="view ta-r">
        <label for="price" class="mr-20 fs-14">작성일 : </label>
        <span class="fs-20 ml-10">{{ article.regtime }}</span>
      </div>
    </div>
    <!--text 시작-->
    <div class="line-line-gray mt-40 mb-40"></div>
    <div class="view mr-30 ml-30" v-html="article.content"></div>
    <div class="line-line-gray mt-40 mb-40"></div>
    <!--text end-->

    <!--버튼 시작-->
    <div class="detail-btn-form">
      <router-link
        :to="{
          name: 'boardDelete',
          params: { articleno: article.articleno },
        }"
        class="detail-btn-delete fs-18 notoMid"
      >
        <span>삭제</span>
      </router-link>
      <button class="detail-btn-list fs-18 notoMid" @click="moveList">
        목록
      </button>
      <router-link
        :to="{
          name: 'boardModify',
          params: { articleno: article.articleno },
        }"
        class="detail-btn-modify fs-18 notoMid"
      >
        수정
      </router-link>
    </div>
    <!--버튼 끝-->
  </div>
</template>

<script>
import http from "@/api/http.js";
export default {
  name: "BoardDetail",
  data: function () {
    return {
      article: {},
    };
  },
  created() {
    http.get(`/board/${this.$route.params.articleno}`).then(({ data }) => {
      this.article = data;
    });
  },
  methods: {
    moveList() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "board" });
    },
  },
};
</script>

<style lang="scss">
.boardTitleIcon {
  weight: 40px;
  height: 40px;
  // display: block;
  align-content: center;
}
.board-detail-title {
  align-content: center;
  display: block;
  // display: flex;
  text-align: center;
}
.board-title-img {
  align-content: center;
  // text-align: center !important;
  display: block;
  margin: 0px auto;
}
.board-detail-box {
  margin-top: 120px;
}
.line-line-gray {
  border-bottom: 1px solid $color-gray-5;
}
.detail-btn-form {
  // margin-top: 70px;
  margin: 70px 20px 0px 20px;
  align-content: center;
  display: flex;
  a {
    text-decoration: none;
    text-align: center;
    // display: flex;
    // padding: auto;
    // align-items: center;
    // flex-direction: column;
    span {
      text-align: center;
      align-items: center;
    }
  }
  .detail-btn-delete,
  .detail-btn-list {
    position: relative;
    width: 150px;
    height: 48px;

    background: $color-gray-9;
    border-radius: 6px;
    border: none;
    color: $color-white;
    margin: 0 25px;
    text-align: center;
    // margin: auto;
    // flex-direction: column;
  }
  .detail-btn-modify {
    position: relative;
    width: 150px;
    height: 48px;

    background: #ff6b6b;
    border-radius: 6px;
    border: none;
    color: $color-white;
    margin: 0 25px;
  }
  justify-content: center;
}
</style>
