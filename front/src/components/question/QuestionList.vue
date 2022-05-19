<template>
  <div class="regist">
    <h1 class="underline">SSAFY 글 목록</h1>
    <div style="text-align: right">
      <button @click="moveWrite">글 등록</button>
    </div>
    <div v-if="articles.length">
      <table id="book-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 45%" />
          <col style="width: 25%" />
          <col style="width: 25%" />
        </colgroup>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <question-list-item
            v-for="article in articles"
            :key="article.articleno"
            :article="article"
          ></question-list-item>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">게시글이 없습니다.</div>
  </div>
</template>

<script>
import http from "@/api/http.js";
import QuestionListItem from "@/components/question/QuestionListItem.vue";

export default {
  name: "QuestionList",
  components: { QuestionListItem },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    http.get("/question").then(({ data }) => {
      this.articles = data;
    });
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "questionWrite" });
    },
  },
};
</script>

<style></style>
