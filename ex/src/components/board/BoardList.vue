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
      <b-table
        class="board-table"
        :items="articles"
        id="board-list"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
      >
        <template #cell(subject)="data"
          ><router-link
            :to="{
              name: 'boardDetail',
              // query: { isbn: data.item.subject },
              params: { articleno: data.item.articleno },
            }"
            >{{ data.item.subject }}</router-link
          ></template
        >
      </b-table>
    </div>
    <div v-else class="text-center board-box-empty">
      <p>게시글이 없습니다ㅠ^ㅠ</p>
      <p style="margin-top: -8px">첫 게시글을 작성해 보세요:)</p>
    </div>
    <!--페이지네이션-->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="board-list"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import http from "@/api/http.js";
// import BoardListItem from "@/components/board/BoardListItem.vue";

export default {
  name: "BoardList",
  // components: { BoardListItem },
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      articles: [],
      fields: [
        { key: "subject", label: "제목", tdClass: "tdClass" },
        { key: "userid", label: "작성자", tdClass: "tdClass" },
        // { key: "hit", label: "좋아요", tdClass: "tdClass" },
        { key: "regtime", label: "작성일", tdClass: "tdClass" },
      ],
    };
  },
  created() {
    http.get("/board").then(({ data }) => {
      this.articles = data;
    });
  },
  computed: {
    rows() {
      return this.articles.length;
    },
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "boardWrite" });
    },
    moveDetail() {
      this.$router.push({
        name: "boardDetail",
        params: { articleno: this.article.articleno },
        // path: "detail/:articleno",
      });
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
.pagination {
  margin-top: 60px;
  margin-bottom: 60px;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  // color: $color-primary;
}

.page-item.active .page-link {
  background-color: $color-primary;
  border-color: $color-primary;
}

.page-link {
  color: $color-gray-7;
}
</style>
