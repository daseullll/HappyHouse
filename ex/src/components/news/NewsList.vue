<template>
  <b-col>
    <b-table-simple hover responsive>
      <tbody>
        <news-list-item
          v-for="article in articles"
          :key="article.title"
          v-bind="article"
        /></tbody
    ></b-table-simple>
  </b-col>
</template>

<script>
import http from "@/api/http.js";
import NewsListItem from "./NewsListItem.vue";

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
.board-box-empty {
  padding-top: 150px;
}
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
}
</style>
