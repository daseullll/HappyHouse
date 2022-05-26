<template>
  <b-container class="outer">
    <b-row class="login">
      <b-col class="col-form">
        <h1 class="fs-48 notoBold mt-20 mb-20">로그인</h1>
        <h5 class="fs-20 notoMid mb-10">
          Enter your ID and password to sign in
        </h5>
        <!-- Sign In Form -->

        <div class="mb-20">
          <!--input ID-->
          <b-form-group
            id="form-input-id"
            label="ID"
            label-for="ID"
            valid-feedback="Okay!"
            :invalid-feedback="idInvalidFeedback"
            :state="idState"
          >
            <b-form-input
              id="ID"
              v-model="user.userid"
              :state="idState"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="form-input-pw"
            label="Password"
            label-for="Password"
            valid-feedback="Okay!"
            :invalid-feedback="pwInvalidFeedback"
            :state="pwState"
          >
            <b-form-input
              id="PW"
              v-model="user.userpwd"
              :state="pwState"
              trim
            ></b-form-input>
          </b-form-group>
        </div>
        <!-- btn submit -->
        <div>
          <button
            type="primary"
            block
            html-type="submit"
            class="login-form-button btn-user notoBold mb-15"
            @click="confirm"
          >
            LOG IN
          </button>
        </div>
        <!--find ID / PW -->
        <div>
          <p class="notoNor findid">
            Don't have an account?
            <router-link to="/join" class="notoBold text-dark">
              JOIN</router-link
            >
          </p>
          <p class="notoNor findpw">
            Forget your Password?
            <router-link to="/join" class="notoBold text-dark">
              FIND PW</router-link
            >
          </p>
        </div>
        <div class="line"></div>
        <!--social login-->
        <form class="social-login">
          <form-item>
            <button class="btn-kakao-login btn-user notoMid mb-10">
              <span class="icon"><img src="@/assets/images/kakao.svg" /></span>
              <span>카카오로 시작하기</span>
            </button>
            <!-- <button class="btn-naver-login btn-user notoMid mb-10">
              <span class="icon"><img src="@/assets/images/naver.svg" /></span>
              <span>네이버로 시작하기</span>
            </button>
            <button class="btn-google-login btn-user notoMid mb-10">
              <span class="icon"><img src="@/assets/images/google.svg" /></span>
              <span>구글로 시작하기</span>
            </button> -->
          </form-item>
        </form>
      </b-col>
      <b-col style="text-align: center" class="login-img">
        <img src="@/assets/images/loginImg.png" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError"]),

    idState() {
      return this.user.userid.length >= 4;
    },
    pwState() {
      return this.user.userpwd.length >= 4;
    },
    idInvalidFeedback() {
      if (this.user.userid.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "";
    },
    pwInvalidFeedback() {
      if (this.user.userpwd.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "";
    },
  },
  data() {
    return {
      user: {
        userid: "",
        userpwd: "",
      },
    };
  },

  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
        await this.getUserInfo(token);
        this.$router.push({ name: "home" });
      }
    },
    // movePage() {
    //   this.$router.push({ name: "signup" });
    // },
  },
};
</script>
<style lang="scss">
.login {
  // background-color: $color-gray-5;
  color: $color-dark;
  padding: 40px 40px;
  .login-img {
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: block;
  }
  .col-form {
    margin-right: 5px;
    h1 {
      letter-spacing: 0.2em;
    }
    h5 {
      color: $color-dark;
      margin-bottom: 16px;
    }
  }
  label {
    font-size: 18px;
    // font-weight: $fw-semibold;
    color: $color-gray-12;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .login-form-button {
    background: #ff6b6b;
    border: none;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  .btn-kakao-login {
    background-color: $KAKAO-YELLOW;
    color: $KAKAO-BROWN !important;
    border: none;
  }
  .btn-naver-login {
    background-color: $NAVER;
    border: none;
    color: $color-white;
  }
  .btn-google-login {
    background-color: $color-dark;
    color: $color-dark !important;
    border: $color-gray-10 !important;
  }

  .btn-user {
    // display: flex;
    align-items: center;
  }
  #ID,
  #PW {
    width: 330px;
    height: 48px;
    margin-bottom: 8px;
  }
  .findid {
    color: $color-gray-7;
  }
  .findpw {
    color: $color-gray-7;
    margin-top: -8px;
  }
  button {
    display: inline;
  }
  .line {
    margin: 30px 0;
    width: 330px;
    height: 2px;
    background-color: #cbcbcb;
  }
  // .social-login {
  //   display: block;
  // }
  .icon {
    height: 16px;
    margin-right: 5px;
    align-items: center;
  }
  span {
    text-align: center;
  }
}
.login-img {
  text-align: center;

  img {
    width: 600px;
    margin-left: -50px;
  }
}
// input {
//   width: 330px;
//   height: 48px;
// }
</style>
