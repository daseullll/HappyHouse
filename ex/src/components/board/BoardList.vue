<template>
  <div class="regist">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/ThoughtEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">커뮤니티</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">
      우리 동네 이웃들의 소근소근 이야기
      <button class="board-write-btn fs-16 notoMid" @click="moveWrite">
        글 작성
      </button>
    </div>
    <div class="board-box" v-if="articles.length">
      <table class="board-table" id="book-list">
        <colgroup>
          <col style="width: 10%" />
          <col style="width: 40%" />
          <col style="width: 25%" />
          <col style="width: 25%" />
        </colgroup>
        <thead>
          <tr class="fs-18 notoMid tb-first-line">
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <board-list-item
            v-for="article in articles"
            :key="article.articleno"
            :article="article"
          ></board-list-item>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center board-box-empty">
      <p>게시글이 없습니다ㅠ^ㅠ</p>
      <p style="margin-top: -8px">첫 게시글을 작성해 보세요:)</p>
    </div>
  </div>
</template>

<script>
import http from "@/api/http.js";
import BoardListItem from "@/components/board/BoardListItem.vue";

export default {
  name: "BoardList",
  components: { BoardListItem },
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
    moveWrite() {
      this.$router.push({ name: "boardWrite" });
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

.board-box-empty {
  padding-top: 150px;
}

.board-write-btn {
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
