<template>
  <tr>
    <!-- s -->
    <td>
      <div>{{ article.subject }}</div>
    </td>
    <td>{{ article.userid }}</td>
    <td>{{ article.articleno }}</td>
    <!--좋아요 수로 교체해야함-->
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
  methods: {},
};
</script>

<style lang="scss">
a,
td,
tr {
  font-size: vw(16px);
}
</style>
