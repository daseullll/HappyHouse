<template>
  <tr>
    <td>{{ article.articleno }}</td>
    <td>
      <router-link
        :to="{
          name: 'boardDetail',
          params: { articleno: article.articleno },
        }"
        >{{ article.subject }}</router-link
      >
    </td>
    <td>{{ article.userid }}</td>
    <td>{{ article.regtime | formatDate }}</td>
  </tr>
</template>

<script>
// import moment from "moment";

export default {
  name: "BoardListItem",
  props: {
    article: Object, // 넘어온 객체 받기
  },
  filters: {
    formatDate(regtime) {
      return regtime;
      // return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
};
</script>

<style></style>
