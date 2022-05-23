<template>
  <div id="fullpage main banner">
    <!--section 1 start-->
    <section class="active page-container num1">
      <div class="section-contents">
        <div class="home-title">
          <div class="sub-main fs-28 notoMid">
            주택정보와 학군 정보를 한눈에
          </div>
          <div class="title-main fs-80 notoBlack">해피하우스</div>
          <div class="sub-sub-main fs-20 notoMid">
            공공데이터와 카카오맵 API를 활용한
          </div>
          <div class="sub-sub-main fs-20 notoMid">
            아파트 실거래가 정보 및 학군 정보 제공 사이트
          </div>
          <button class="btn-main fs-24 notoBold" @click="moveJoin">
            START
          </button>
        </div>
      </div>
    </section>
    <!--section 1 end-->
    <!--section 2 start-->
    <section class="active page-container num2">
      <div class="section-contents">
        <div class="home-title ta-r">
          <div class="sub-main fs-40 roBold">01</div>
          <div class="mb-30">
            <div class="title-main fs-48 notoBold">아파트 정보와</div>
            <div class="title-main fs-48 notoBold mt--15">학군 정보까지</div>
          </div>
          <div class="sub-sub-main fs-20 notoMid">
            공공데이터와 카카오맵 API를 활용한
          </div>
          <div class="sub-sub-main fs-20 notoMid">
            아파트 실거래가 정보 및 학군 정보 제공 사이트
          </div>
          <button class="btn-num2 fs-20 notoBold" @click="moveJoin">
            부동산 정보
          </button>
          <button class="btn-num2 fs-20 notoBold" @click="moveJoin">
            학군 정보
          </button>
        </div>
      </div>
    </section>
    <!--section 2 end-->
    <!--section 3 start-->
    <section class="active page-container num3">
      <div class="section-contents">
        <div class="home-title ta-l">
          <div class="sub-main fs-40 roBold">02</div>
          <div class="mb-30">
            <div class="title-main fs-48 notoBold">우리 동네 최근 이슈</div>
            <div class="title-main fs-48 notoBold mt--15">
              궁금해? 그럼 오백원.
            </div>
          </div>

          <div class="sub-sub-main fs-20 notoMid">
            뭐라고 써야할지 아주 머리가 아프지만
          </div>
          <div class="sub-sub-main fs-20 notoMid">
            이 정도면 해피하우스 아니고 언해피하우스
          </div>
          <button class="btn-num3 fs-20 notoBold" @click="moveJoin">
            커뮤니티 둘러보기
          </button>
        </div>
      </div>
    </section>
    <!--section 3 end-->
  </div>
  <!-- <main-content :msg="msg"></main-content> -->
</template>

<script>
// import MainContent from "@/components/MainContent.vue";
// export default {
//   name: "HomeView",
//   components: { MainContent },
//   data() {
//     return {
//       msg: "해피하우스",
//     };
//   },
// };
// <!-- import $ from "jquery"; -->

export default {};
</script>

<style lang="scss">
.main-banner {
  height: 540px;
  background-color: $KAKAO_YELLOW;
}

.page-container {
  // position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.num1 {
  background-color: red;
  width: 100vw;
  height: 100vh;

  padding: 80px 0 0px 0;
  .title-main {
    letter-spacing: 0.1em;
    margin-bottom: 40px;
  }
  .sub-main {
    // letter-spacing: 0.05em;
    color: $color-dark;
    margin-top: 30px;
  }

  .sub-sub-main {
    width: 500px;
    color: $color-gray-9;
  }
}

.num2 {
  background-color: blue;
  width: 100vw;
  height: 100vh;
  padding: 80px 0 0px 0;
  .title-main {
    margin-bottom: 0px;
  }
  .sub-sub-main {
    color: $color-gray-9;
  }
}

.num3 {
  background-color: green;
  width: 100vw;
  height: 100vh;
  padding: 80px 0 0px 0;
  .title-main {
    margin-bottom: 0px;
  }
  .sub-sub-main {
    color: $color-gray-9;
  }
}

.section-contents {
  padding: 150px 120px;
}

.btn-main {
  border-radius: 30px;
  line-height: 40px;
  border: none;
  align-content: center;
  color: $color-white;
  background-color: $color-primary;
  margin: 60px 0;
  padding: 20px 80px;
}
.btn-num2 {
  border-radius: 30px;
  line-height: 40px;
  border: none;
  align-content: center;
  color: $color-white;
  background-color: $color-primary;
  margin: 60px 0 60px 30px;
  padding: 10px 60px;
}

.btn-num3 {
  border-radius: 30px;
  line-height: 40px;
  border: none;
  align-content: center;
  color: $color-white;
  background-color: $color-primary;
  margin: 60px 0 60px 0;
  padding: 10px 60px;
}
</style>
