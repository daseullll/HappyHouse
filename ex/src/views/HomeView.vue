<template>
  <div id="fullpage main banner">
    <!--section 1 start-->
    <section class="active page-container num1">
      <div class="section-contents">
        <div class="home-title">
          <div class="title-main">
            <img src="@/assets/images/logo-gray-main.svg" class="logo-home" />
          </div>
          <div class="sub-main fs-28 notoMid">
            주택정보와 학군 정보를 한눈에
          </div>
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
    <!--section 2 end-->
    <!--section 3 start-->
    <section class="active page-container num3">
      <div class="section-contents">
        <div class="home-title ta-r">
          <div class="sub-main fs-40 roBold">03</div>
          <div class="mb-30">
            <div class="title-main fs-48 notoBold">광주 4반</div>
            <div class="title-main fs-48 notoBold mt--15">파이팅...</div>
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
    <!--section 3 end-->
  </div>
  <!-- <main-content :msg="msg"></main-content> -->
</template>

<script>
// import MainContent from "@/components/MainContent.vue";
export default {
  // name: "HomeView",
  // components: { MainContent },
  data() {
    return {};
  },
  methods: {
    moveJoin() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "join" });
    },
  },
};
// <!-- import $ from "jquery"; -->
</script>

<style lang="scss">
// .main-banner {
//   height: 540px;
//   background-color: $KAKAO_YELLOW;
// }

.page-container {
  // position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.num1 {
  width: 100vw;
  height: 100vh;

  padding: vh(100px) 0 0 0;
  .title-main {
    margin-top: vh(20px);
    margin-bottom: vh(40px);
  }
  .logo-home {
    margin-top: vh(30px);
    height: vh(220px);
  }
  .sub-main {
    // letter-spacing: 0.05em;
    color: $color-dark;
    margin-top: vh(80px);
    margin-bottom: vh(50px);
  }

  .sub-sub-main {
    color: $color-gray-9;
  }
}

.num2 {
  background-color: skyblue;
  width: 100vw;
  height: 100vh;
  padding: vh(80px) 0 0 0;
  .title-main {
    margin-bottom: vh(0px);
  }
  .sub-sub-main {
    color: $color-gray-9;
  }
}

.num3 {
  background-color: yellow;
  width: 100vw;
  height: 100vh;
  padding: vh(80px) 0 0 0;
  .title-main {
    margin-bottom: 0px;
  }
  .sub-sub-main {
    color: $color-gray-9;
  }
}

.section-contents {
  margin: vh(150px) vw(130px);
}

.btn-main {
  border-radius: 60px;
  line-height: vh(60px);
  border: none;
  align-content: center;
  color: $color-white;
  background-color: $color-primary;
  margin: vh(60px) 0;
  padding: vh(20px) vw(60px);
}
.btn-num2 {
  border-radius: 30px;
  line-height: vh(60px);
  border: none;
  align-content: center;
  color: $color-white;
  background-color: $color-primary;
  margin: vh(60px) 0 vh(60px) vw(30px);
  padding: vh(20px) vw(40px);
}

.btn-num3 {
  border-radius: 30px;
  line-height: vh(60px);
  border: none;
  align-content: center;
  color: $color-white;
  background-color: $color-primary;
  margin: vh(60px) 0 vh(60px) 0;
  padding: vh(20px) vw(40px);
}
</style>
