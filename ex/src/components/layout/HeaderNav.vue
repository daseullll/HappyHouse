<template>
  <div class="header text-center">
    <div class="logo">
      <router-link to="/"
        ><img src="@/assets/images/logo-gray-main.svg" class="logoimg"
      /></router-link>
    </div>
    <div class="catagory">
      <router-link to="/">홈</router-link>
      <router-link to="/house">주택</router-link>
      <!-- <router-link to="/notice">커뮤니티</router-link> -->
      <router-link to="/board">커뮤니티</router-link>
      <router-link to="/news">뉴스</router-link>
    </div>
    <div class="user" v-if="userInfo">
      <router-link class="fs-16" to="/user">마이페이지</router-link>
      <button class="logout-btn fs-16" @click.prevent="onClickLogout">
        로그아웃
      </button>
    </div>
    <div class="user" v-else>
      <router-link to="/join">회원가입</router-link>
      <router-link to="/login">로그인</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import ms from "@/store/modules/memberStore";

const memberStore = "memberStore";

export default {
  name: "HeaderNa",
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    onClickLogout() {
      // console.log("memberStore : ", ms);
      this.SET_IS_LOGIN(false);
      this.SET_USER_INFO(null);
      sessionStorage.removeItem("access-token");
      alert("로그아웃 되었습니다.");
      if (this.$route.path != "/") this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
.header {
  height: 78px;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0%;
  top: 0%;
  // position: fixed;

  background: #ffffff;
  box-shadow: 0px 2px 9px 8px rgba(210, 210, 210, 0.65);
}
.logoimg {
  position: absolute;
  height: 30px;
  left: 130px;
  top: 21px;
}
.catagory {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  position: absolute;
  left: 270px;
  top: 28px;
  font-size: 16px;
  a {
    color: $color-gray-7;
    font-family: "NotoSansMedium";
  }
  a:hover {
    text-decoration: none;
    color: $color-primary;
  }
}
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 0px;
  gap: 40px;

  position: absolute;
  // width: vw(128px);
  height: 23px;
  // left: calc(50% - 128px / 2 + 521px);
  right: 120px;
  top: 26px;
  font-size: 16px;
  a {
    color: $color-gray-6;
    font-family: "NotoSansMedium";
    // text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: $color-primary;
  }

  .logout-btn {
    border: none;
    background-color: #ffffff;
    color: $color-gray-6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "NotoSansMedium";
  }
}
</style>
