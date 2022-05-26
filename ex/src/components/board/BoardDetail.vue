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
          <span class="fs-20 ml-10 fs-18">{{ article.userid }}</span>
        </div>
      </div>
    </div>
    <div class="regist_form board-detail-box">
      <div class="view ta-r">
        <label for="price" class="mr-20 fs-18">작성일 : </label>
        <span class="fs-20 ml-10 fs-18">{{ article.regtime }}</span>
      </div>
    </div>
    <!--text 시작-->
    <div class="line-line-gray mt-40 mb-40"></div>
    <div
      id="ariticle-board-write"
      class="view mr-30 ml-30 fs-18 mb-40"
      v-html="article.content"
    ></div>
    <div class="like-cnt-btn mt-40">
      <span @click="likeClick" class="ml-30 board-heart">
        <img
          v-if="likeClicked"
          class="favorite-icon"
          src="@/assets/images/favorite-fill.svg"
        /><img
          v-else
          class="favorite-icon"
          src="@/assets/images/favorite-border.svg"
        />
      </span>
      <span class="ml-15 fs-16 board-heart roMid"></span>
    </div>
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
    <div class="line-line-gray mt-40 mb-40"></div>
    <!--text end-->

    <div class="empty mt-40"></div>
    <!--댓글 작성 시작-->
    <div class="comment-board-box">
      <span class="fs-22 notoMid comment-id">{{ article.userid }}님</span>
      <input id="comment" v-model="boardComment" trim />
      <button class="comment-btn notoMid">확인</button>
    </div>
    <!--댓글 작성 끝!-->
  </div>
</template>

<script>
import http from "@/api/http.js";
export default {
  name: "BoardDetail",
  data: function () {
    return {
      article: {},
      likeClicked: false,
      hit: "", // 임의로 0으로 집어넣음
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
    likeClick() {
      this.likeClicked = !this.likeClicked;
      if (this.likeClicked == true) {
        this.likecnt++;
      } else {
        this.likecnt--;
      }
    },
  },
};
</script>

<style lang="scss">
.favorite-icon {
  width: 30px;
  height: 30px;
}
.like-cnt-btn {
  display: flex;
  // justify-content: center;
  align-content: center;
}
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
#ariticle-board-write {
  margin-bottom: 100px;
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
  margin: 30px 20px 0px 20px;
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
      justify-content: center;
    }
  }
  .detail-btn-delete,
  .detail-btn-list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 48px;

    background: $color-gray-9;
    border-radius: 20px;
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

    background: $color-primary;
    border-radius: 20px;
    border: none;
    color: $color-white;
    margin: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  justify-content: center;
}
.comment-board-box {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 20px 40px 80px 40px;
  span {
    display: flex;
    width: 130px;
    text-align: center;
    color: $color-gray-7;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  #comment {
    border: 1px solid $color-gray-5;
    margin: 10px 10px;
    border-radius: 10px;
    padding: 0 20px;
  }
  .comment-btn {
    width: 100px;
    height: 40px;
    border: 2px solid $color-primary;
    margin: 10px 20px;
    color: $color-dark;
    border-radius: 10px;
    background-color: $color-white;
  }
  .comment-btn:hover {
    background-color: $color-primary;
    color: $color-white;
  }
}
</style>
