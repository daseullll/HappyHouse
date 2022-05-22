<template>
  <div class="regist">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/ThoughtEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">뉴스</span>
    </div>
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
          <news-list-item
            v-for="article in articles"
            :key="article.articleno"
            :article="article"
          ></news-list-item>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">게시글이 없습니다.</div>
  </div>
</template>

<script>
import http from "@/api/http.js";
import NewsListItem from "@/components/news/NewsListItem.vue";

export default {
  name: "NewsList",
  components: { NewsListItem },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    http.get("/news").then(({ data }) => {
      this.articles = data;
    });
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "newsWrite" });
    },
  },
};
</script>

<style></style>
