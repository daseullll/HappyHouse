<template>
  <div class="regist">
    <h1 class="notoBold fs-32">SSAFY 글 삭제</h1>
    <div class="notoBold fs-32">삭제중...</div>
  </div>
</template>

<script>
import http from "@/api/http.js";

export default {
  name: "BoardDelete",
  created() {
    http.delete(`/board/${this.$route.params.articleno}`).then(({ data }) => {
      let msg = "삭제 처리시 문제가 발생했습니다.";
      if (data === "success") {
        msg = "삭제가 완료되었습니다.";
      }
      alert(msg);
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "board" });
    });
  },
};
</script>

<style></style>
