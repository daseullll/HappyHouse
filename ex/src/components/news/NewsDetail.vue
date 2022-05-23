<template>
  <div class="regist">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/ThoughtEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">SSAFY 글 목록</span>
    </div>
    <div class="regist_form">
      <label for="articleno">글번호</label>
      <div class="view">{{ article.articleno }}</div>
      <label for="subject">제목</label>
      <div class="view">{{ article.subject }}</div>
      <label for="userid">작성자</label>
      <div class="view">{{ article.userid }}</div>
      <label for="price">작성일</label>
      <div class="view">{{ article.regtime }}</div>
      <label for="content">내용</label>
      <div class="view" v-html="article.content"></div>
      <div style="padding-top: 15px">
        <router-link
          :to="{
            name: 'boardModify',
            params: { articleno: article.articleno },
          }"
          class="btn"
          >수정</router-link
        >
        <router-link
          :to="{
            name: 'boardDelete',
            params: { articleno: article.articleno },
          }"
          class="btn"
          >삭제</router-link
        >
        <router-link to="/board/list" class="btn">목록</router-link>
      </div>
    </div>
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
};
</script>

<style></style>
