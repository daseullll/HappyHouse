<template>
  <div class="regist_form mypage-box">
    <div class="mypage notoMid">
      <div class="empty mt-40"></div>
      <div class="mypage-name fs-32 mt-40 mb-30 notoBold">
        {{ userInfo.username }}님...
      </div>
      <div class="mypage-name fs-32 mb-30 notoBold">
        정말로 탈퇴하시나요? ㅠㅠ
      </div>
      <!-- <hr /> -->

      <!-- <hr />s -->
      <!--버튼시작-->
      <div class="mypage-btn-form">
        <button class="mypage-btn-modify fs-18 notoMid" @click="moveMyPage">
          취소
        </button>
        <button
          class="mypage-btn-withdraw fs-18 notoMid"
          @click="checkWithdraw"
        >
          확인
        </button>
      </div>
      <!--버튼 끝-->
    </div>

    <!-- </div> -->
  </div>
</template>
<script>
import http from "@/api/http.js";
import { mapState, mapMutations } from "vuex";
const memberStore = "memberStore";
export default {
  name: "UserWithdraw",
  components: {},
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    moveMyPage() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "MyPage" });
    },
    checkWithdraw() {
      http.delete(`/user/${this.userInfo.userid}`).then(({ data }) => {
        let msg = "탈퇴 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "탈퇴 되었습니다.";

          this.SET_IS_LOGIN(false);
          this.SET_USER_INFO(null);
          sessionStorage.removeItem("access-token");
        }
        alert(msg);
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>
