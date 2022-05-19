<template>
  <div class="header text-center">
    <div class="logo">
      <router-link to="/"
        ><img src="@/assets/images/ssafy_logo.png" class="logoimg"
      /></router-link>
    </div>
    <div class="catagory fs-16 notoReg">
      <router-link to="/">홈</router-link>
      <router-link to="/house">주택</router-link>
      <router-link to="/house">학군</router-link>
      <router-link to="/notice">커뮤니티</router-link>
      <router-link to="/question">Q&A</router-link>
    </div>

    <div class="user">
      <router-link to="/user/join">회원가입</router-link>
      <router-link to="/user/login">로그인</router-link>
    </div>
  </div>
</template>

<script>
import "./HeaderNav.scss";

export default {
  name: "HeaderNav",
};
</script>

<style lang="scss"></style>
