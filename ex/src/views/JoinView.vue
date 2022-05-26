<template>
  <b-container class="outer">
    <b-row class="login">
      <b-col style="text-align: center" class="login-img">
        <img src="@/assets/images/joinImg.png" />
      </b-col>
      <b-col class="col-form ml-130">
        <h1 class="fs-48 notoBold mt-20 mb-20">회원가입</h1>
        <h5 class="fs-20 notoMid mb-10">Enter your ID and password to join</h5>
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
              v-model="userid"
              :state="idState"
              trim
            ></b-form-input>
          </b-form-group>
          <!--input NAME-->
          <b-form-group
            id="form-input-name"
            label="NAME"
            label-for="NAME"
            valid-feedback="Okay!"
            :invalid-feedback="nameInvalidFeedback"
            :state="nameState"
          >
            <b-form-input
              id="NAME"
              v-model="username"
              :state="nameState"
              trim
            ></b-form-input>
          </b-form-group>
          <!--input PW-->
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
              v-model="userpwd"
              :state="pwState"
              trim
            ></b-form-input>
          </b-form-group>
          <!--input EMAIL-->
          <b-form-group
            id="form-input-email"
            label="EMAIL"
            label-for="EMAIL"
            valid-feedback="Okay!"
            :invalid-feedback="emailInvalidFeedback"
            :state="emailState"
          >
            <b-form-input
              id="EMAIL"
              v-model="email"
              :state="emailState"
              trim
            ></b-form-input>
          </b-form-group>
          <!--input PHONE-->
          <b-form-group
            id="form-input-phone"
            label="PHONE"
            label-for="PHONE"
            valid-feedback="Okay!"
            :invalid-feedback="phoneInvalidFeedback"
            :state="phoneState"
          >
            <b-form-input
              id="PHONE"
              v-model="phone"
              :state="phoneState"
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
            @click="registUser"
          >
            JOIN
          </button>
        </div>
        <!--find ID / PW -->
        <div>
          <p class="notoNor findid">
            Do you have an account?
            <router-link to="/login" class="notoBold text-dark">
              LOGIN</router-link
            >
          </p>
        </div>

        <div class="line"></div>
        <!--social login-->
        <form class="social-login">
          <form-item>
            <button class="btn-kakao-login btn-user notoMid mb-10">
              <span class="icon"><img src="@/assets/images/kakao.svg" /></span>
              카카오로 시작하기
            </button>
            <!-- <button class="btn-naver-login btn-user notoMid mb-10">
              <span class="icon"><img src="@/assets/images/naver.svg" /></span>
              네이버로 시작하기
            </button>
            <button class="btn-google-login btn-user notoMid mb-10">
              <span class="icon"><img src="@/assets/images/google.svg" /></span>
              구글로 시작하기
            </button> -->
          </form-item>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import http from "@/api/http.js";

export default {
  computed: {
    idState() {
      return this.userid.length >= 4;
    },
    pwState() {
      return this.userpwd.length >= 4;
    },
    nameState() {
      return this.username.length >= 2;
    },
    emailState() {
      return this.email.length >= 4;
    },
    phoneState() {
      return this.phone.length >= 4;
    },
    idInvalidFeedback() {
      if (this.userid.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "";
    },
    pwInvalidFeedback() {
      if (this.userpwd.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "";
    },
    nameInvalidFeedback() {
      if (this.username.length > 0) {
        return "Enter at least 2 characters.";
      }
      return "";
    },
    emailInvalidFeedback() {
      if (this.email.length > 0) {
        return "Enter an available email";
      }
      return "";
    },
    phoneInvalidFeedback() {
      if (this.phone.length > 0) {
        return "Enter at least 10 characters.";
      }
      return "";
    },
  },
  data() {
    return {
      userid: "",
      userpwd: "",
      username: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    registUser() {
      http
        .post("/user/register", {
          userid: this.userid,
          userpwd: this.userpwd,
          username: this.username,
          email: this.email,
        })
        .then(({ data }) => {
          // 서버에서 정상적인 값이 넘어 왔을경우 실행.
          let msg = "문제가 발생했습니다.";
          if (data === "success") {
            msg = "회원가입이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },

    moveList() {
      this.$router.push({ name: "home" });
    },
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
    background-color: $color-white;
    color: $color-dark !important;
    border: $color-gray-8 !important;
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
.join-img {
  text-align: center;

  img {
    width: 600px;
    margin-right: 50px;
  }
}
// input {
//   width: 330px;
//   height: 48px;
// }
</style>
