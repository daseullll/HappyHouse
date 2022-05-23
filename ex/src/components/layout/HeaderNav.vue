<template>
  <div class="header text-center">
    <div class="logo">
      <router-link to="/"
        ><img src="@/assets/images/ssafy_logo.png" class="logoimg"
      /></router-link>
    </div>
    <div class="catagory">
      <router-link to="/">홈</router-link>
      <router-link to="/house">주택</router-link>
      <router-link to="/house">학군</router-link>
      <!-- <router-link to="/notice">커뮤니티</router-link> -->
      <router-link to="/board">커뮤니티</router-link>
      <router-link to="/news">뉴스</router-link>
    </div>
    <div class="user">
      <router-link to="/join">회원가입</router-link>
      <router-link to="/login">로그인</router-link>
    </div>
  </div>
</template>

<script>
// import "./HeaderNav.scss";

export default {
  name: "HeaderNav",
};
</script>

<style lang="scss">
.header {
  height: 80px;
  width: 100%;
  //   position: absolute;
  // position: absolute;
  left: 0%;
  top: 0%;
  // position: fixed;

  background: #ffffff;
  box-shadow: 0px 2px 9px 8px rgba(210, 210, 210, 0.65);
}
.logoimg {
  position: absolute;
  height: 36px;
  left: 130px;
  top: 18px;
}
.catagory {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  position: absolute;
  left: 270px;
  top: 26px;
  font-size: 16px;
  a {
    color: $color-gray-7;
    font-family: "NotoSansMedium";
  }
}
.user {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 128px;
  height: 23px;
  // left: calc(50% - 128px / 2 + 521px);
  right: 120px;
  top: 26px;
  font-size: 16px;
  a {
    color: $color-gray-6;
    font-family: "NotoSansMedium";
  }
}
</style>
