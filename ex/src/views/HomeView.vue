<template>
  <div
    id="fullpage main banner"
    style="
       {
        background-color: #fffcf7;
      }
    "
  >
    <!--section 1 start-->
    <section class="active page-container num1">
      <b-row>
        <b-col>
          <div class="home-title">
            <div class="title-main">
              <img src="@/assets/images/logo-gray-main.svg" class="logo-home" />
            </div>
            <div class="sub-main fs-28 notoMid">
              서울시 주택정보와 학군정보를 한눈에
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
        </b-col>
        <b-col style="text-align: center, z-index: 1;" class="main-img">
          <img src="@/assets/images/main.png" />
        </b-col>
      </b-row>
      <div class="custom-shape-divider-bottom-1653549259">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    <!--section 1 end-->
    <!--section 2 start-->
    <section class="active page-container num2">
      <b-row>
        <b-col style="text-align: center" class="num2-img">
          <img src="@/assets/images/17.png" />
        </b-col>
        <b-col>
          <div class="section-contents">
            <div class="home-title ta-r">
              <div class="sub-main fs-40 roBold">01</div>
              <div class="mb-30">
                <div class="title-main fs-48 notoBold">아파트 정보와</div>
                <div class="title-main fs-48 notoBold mt--15">
                  학군 정보까지
                </div>
              </div>
              <div class="sub-sub-main fs-20 notoMid">
                시, 군, 동 코드를 활용한
              </div>
              <div class="sub-sub-main fs-20 notoMid">
                아파트 실거래가 정보 및 학군 정보 제공
              </div>
              <button class="btn-num2 fs-20 notoBold" @click="moveHouse">
                부동산 정보
              </button>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <!--section 2 end-->
    <!--section 3 start-->
    <section class="active page-container num3">
      <b-row>
        <b-col>
          <div class="section-contents">
            <div class="home-title ta-l">
              <div class="sub-main fs-40 roBold">02</div>
              <div class="pb-30">
                <div class="title-main fs-48 notoBold">우리 동네 정보</div>
                <div class="title-main fs-48 notoBold mt--15">궁금하다면?</div>
              </div>

              <div class="sub-sub-main fs-20 notoMid">
                커뮤니티 게시판에서 공유하는
              </div>
              <div class="sub-sub-main fs-20 notoMid">우리 동네 꿀팁!!!</div>
              <button class="btn-num3 fs-20 notoBold" @click="moveBoard">
                커뮤니티 둘러보기
              </button>
            </div>
          </div>
        </b-col>
        <b-col style="text-align: center" class="num3-img">
          <img src="@/assets/images/asset10.png" />
        </b-col>
      </b-row>
    </section>
    <!--section 3 end-->
    <!--section 4 start-->
    <section class="active page-container num4">
      <div class="section-contents">
        <b-row
          ><b-col style="text-align: center">
            <li class="show-news item-card">
              <div
                style="
                   {
                    margin-right: 100px;
                  }
                "
                class="newscard"
              >
                <div class="fs-28" style="margin: 25px 20px 20px 25px">
                  <div class="fs-14 notoMid new-list-cata">전체 뉴스</div>
                </div>
                <div class="news-title notoBold fs-20">
                  매일 바뀌는 아파트&학군 관련 뉴스를 확인해보세요 :)
                </div>
                <div class="home-news-img">
                  <img src="@/assets/images/news-temp.png" />
                </div>
              </div></li
          ></b-col>
          <b-col>
            <div class="home-title ta-r">
              <div class="sub-main fs-40 roBold">03</div>
              <div class="pb-30">
                <div class="title-main fs-48 notoBold">부동산 뉴스</div>
                <div class="title-main fs-48 notoBold mt--15">학교 뉴스</div>
              </div>
              <div class="sub-sub-main fs-20 notoMid">
                데이터 크롤링을 활용한
              </div>
              <div class="sub-sub-main fs-20 notoMid">
                부동산 및 학교 뉴스 확인
              </div>
              <button class="btn-num2 fs-20 notoBold" @click="moveHouseNews">
                부동산 정보
              </button>
              <button class="btn-num2 fs-20 notoBold" @click="moveSchoolNews">
                학군 정보
              </button>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <!--section 4 end-->
    <!--section 5 start-->
    <section class="active page-container num5">
      <div class="section-contents-1">
        <b-row>
          <b-col>
            <div class="home-title ta-l">
              <div class="sub-main fs-40 roBold">+</div>
              <div class="pb-30">
                <div class="title-main fs-48 notoBold">CONTACT</div>
              </div>

              <div class="sub-sub-main fs-20 notoMid">
                삼성 청년SW아카데미 7기 광주 4반
              </div>
              <div class="sub-sub-main fs-20 notoMid mt-10">안다슬, 이정민</div>
              <button class="btn-num3 fs-20 notoBold mt-70">
                응원 하기ㅎㅎ
              </button>
            </div>
          </b-col>
          <b-col style="text-align: center" class="num3-img">
            <img src="@/assets/images/last.png" />
          </b-col>
        </b-row>
      </div>
    </section>
    <!--section 5 end-->
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
      this.$router.push({ name: "Join" });
    },
    moveHouse() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "house" });
    },
    moveHouseNews() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "news" });
    },
    moveSchoolNews() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "news" });
    },
    moveBoard() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "board" });
    },
  },
};
// <!-- import $ from "jquery"; -->
</script>

<style lang="scss">
.main-img {
  text-align: center;
  position: absolute;

  img {
    position: absolute;
    width: 650px;
    left: 0;
    bottom: 0;
    margin-left: -70px;
    margin-bottom: -30px;
  }
}
.num2-img {
  text-align: center;
  position: absolute;

  img {
    position: absolute;
    width: 800px;
    left: 0;
    bottom: 0;
    margin-left: 60px;
    margin-bottom: -20px;
  }
}
.num3-img {
  text-align: center;
  position: absolute;

  img {
    position: absolute;
    width: 600px;
    left: 0;
    bottom: 0;
    margin-left: -60px;
    margin-bottom: -30px;
  }
}
.custom-shape-divider-bottom-1653549259 svg {
  // position: absolute;
  // bottom: 0;
  left: 0;
  width: 100%;
  // overflow: hidden;
  line-height: 0;
  height: 130px;
}

.custom-shape-divider-bottom-1653549259 {
  position: absolute;
  // margin-top: -200px;
  bottom: 0;
  display: block;
  width: calc(100% + 1.3px);
  // height: 300px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1653549259 .shape-fill {
  fill: #fffcf7;
}

.page-container {
  // position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.num1 {
  width: 100vw;
  height: vh(1440px);
  padding-top: 50px;

  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #fefcfe,
    #fff9fb,
    #fff6f4,
    #fff4ed,
    #ffecda,
    #ffe6c6,
    #fde1b2,
    #fed38e,
    #fec46a,
    #ffb444,
    #ffa310
  );

  // margin: vh(150px) vw(130px) 0 vw(130px);

  // padding: 80px 0 0 0;
  .title-main {
    margin-top: vh(30px);
    margin-bottom: 40px;
  }
  .logo-home {
    // margin-top: vh(30px);
    height: vw(128px);
  }
  .sub-main {
    // letter-spacing: 0.05em;
    color: $color-dark;
    margin-top: 70px;
    margin-bottom: 30px;
  }

  .sub-sub-main {
    color: $color-gray-9;
  }

  .home-title {
    margin: 150px 130px 0 130px;
    // top: 0;
  }
}

.num2 {
  background-color: #fffcf7;
  // width: 100vw;
  // height: 100vh;
  padding: vh(80px) 0 0 0;
  .title-main {
    margin-bottom: vh(0px);
  }
  .sub-sub-main {
    color: $color-gray-9;
  }
}

.num3 {
  background-color: #fffcf7;
  // width: 100vw;
  // height: 100vh;
  padding: vh(80px) 0 0 0;
  .title-main {
    margin-bottom: 0px;
  }
  .sub-sub-main {
    color: $color-gray-9;
  }
}

.num4 {
  // width: 100vw;
  // height: 100vh;
  background-color: #fffcf7;
  padding: vh(80px) 0 0 0;
}
.num5 {
  // width: 100vw;
  // height: 100vh;
  background-color: #fffcf7;
  padding: vh(80px) 0 vh(80px) 0;
  margin-bottom: -80px;
}

.section-contents {
  margin: vh(500px) vw(130px) 0 vw(130px);
}
.section-contents-1 {
  margin: vh(300px) vw(130px) vh(350px) vw(130px);
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
.home-news-img {
  postion: relative;
  bottom: 30px;
  width: 300px;
  height: 220px;
  border: 0;
  overflow: hidden;
  border-radius: 0 0 15px 15px;

  img {
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }
}
</style>
