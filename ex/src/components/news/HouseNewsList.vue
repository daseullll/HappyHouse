<template>
  <div class="pt-40 house-list-box" style="display: inline-block">
    <ul class="list-card">
      <news-list-item
        v-for="article in articles"
        :key="article.title"
        v-bind="article"
      />
    </ul>
  </div>
</template>

<script>
import http from "@/api/http.js";
import NewsListItem from "./HouseNewsListItem.vue";

export default {
  name: "NewsList",
  components: {
    NewsListItem,
  },
  data() {
    return {
      articles: [],
    };
  },

  created() {
    http.get("/news/crawl").then(({ data }) => {
      this.articles = data;
    });
  },

  // created(){
  //   listNews(
  //     (response) => {
  //       this.articles = response.data;
  //     },
  //   );
  // },

  computed: {
    rows() {
      return this.articles.length;
    },
  },
};
</script>

<style lang="scss">
ul {
  padding-inline-start: 0px;
  display: block;
}
.list-card {
  text-align: left;
  list-style: none;
  display: block;
  word-break: keep-all;
  word-wrap: break-word;
  overflow: auto;

  // padding: 0;
}
.board-box-empty {
  padding-top: 10px;
}
.house-list-box {
  height: 600px;
  //overflow: scroll;
}
// .show-news {
//   display: inline-flex;
// }
</style>
