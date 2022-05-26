<template>
  <div class="regist_form mypage-box">
    <div class="mypage notoMid">
      <div class="empty"></div>
      <div class="mypage-name fs-32 mt-40 mb-30 notoBold">
        {{ userInfo.username }}님의 회원정보입니다 :)
      </div>
      <hr />
      <table class="mt-40 mb-40">
        <tr class="mypage-id" id="ID">
          <td class="fs-18 mr-15 mypage-label">ID</td>
          <td class="fs-18 mypage-text">{{ userInfo.userid }}</td>
        </tr>
        <tr class="mypage-name" id="NAME">
          <td class="fs-18 mr-15 mypage-label">NAME</td>
          <td class="fs-18 mypage-text">{{ userInfo.username }}</td>
        </tr>
        <tr class="mypage-email" id="EMAIL">
          <td class="fs-18 mr-15 mypage-label">EMAIL</td>
          <td class="fs-18 mypage-text">{{ userInfo.email }}</td>
        </tr>
        <tr class="mypage-joindate" id="DATE">
          <td class="fs-18 mr-15 mypage-label">가입일</td>
          <td class="fs-18 mypage-text">{{ userInfo.joindate }}</td>
        </tr>
      </table>
      <hr />
      <!--버튼시작-->
      <div class="mypage-btn-form">
        <button class="mypage-btn-modify fs-18 notoMid" @click="moveModify">
          수정
        </button>
        <button class="mypage-btn-withdraw fs-18 notoMid" @click="moveWithdraw">
          탈퇴
        </button>
      </div>
      <!--버튼 끝-->
    </div>

    <!-- </div> -->
  </div>
</template>

<script>
// import http from "@/api/http.js";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "UserMyPage",
  components: {},
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    moveModify() {
      // 현재 route를 /list로 변경.
      this.$router.push({
        name: "Modify",
      });
    },
    moveWithdraw() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "Withdraw" });
    },
  },
};
</script>

<style lang="scss">
.mypage-label {
  text-align: right;
}
.mypage-box {
  margin: 0 50px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.mypage-btn-form {
  margin: vh(70px) vw(20px) 0px vw(20px);
  align-content: center;
  justify-content: center;
  display: flex;
}
.mypage-btn-modify {
  margin-left: 0px;
  width: 100px;
  height: 48px;

  background: $color-primary;
  border-radius: 30px;
  border: none;
  color: $color-white;
  margin: 0 25px;
  float: right;
}
.mypage-btn-withdraw {
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
.mypage {
  // background-color: $color-gray-5;
  color: $color-dark;
  padding: 40px 40px;
  text-align: center;
  // display: flex;
  justify-content: center;
  align-content: center;

  .mypage-label {
    font-size: vw(18px);
    // font-weight: $fw-semibold;
    color: $color-gray-12;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .mypage-text {
    font-size: vw(18px);
    // font-weight: $fw-semibold;
    color: $color-gray-12;
    padding: 10px 0 10px 50px;
    text-align: left;
  }

  #ID,
  #PW,
  #EMAIL,
  #PHONE,
  #NAME {
    width: 330px;
    height: 48px;
    margin-bottom: 8px;
  }

  hr {
    color: #000000;
  }
  // .social-login {
  //   display: block;
  // }

  span {
    text-align: center;
  }
}
</style>
