<template>
  <b-container class="regist_form mypage-box" v-if="user">
    <!--작성끝-->
    <div class="modify">
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
            ref="user.userid"
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
            v-model="user.username"
            :state="nameState"
            ref="user.username"
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
            v-model="user.userpwd"
            :state="pwState"
            ref="user.userpwd"
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
            v-model="user.email"
            :state="emailState"
            ref="user.email"
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
            v-model="user.phone"
            :state="phoneState"
            ref="user.phone"
            trim
          ></b-form-input>
        </b-form-group>
      </div>
      <!--버튼시작-->
      <div class="mypage-btn-form">
        <button class="mypage-btn-modify fs-18 notoMid" @click="checkValue">
          수정
        </button>
        <button
          class="mypage-btn-withdraw fs-18 notoMid"
          @click="checkWithdraw"
        >
          탈퇴
        </button>
      </div>
      <!--버튼 끝-->
    </div>
    <div class="line"></div>
  </b-container>
</template>

<script>
import http from "@/api/http.js";
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
export default {
  name: "UserMyPage",
  data() {
    return {
      user: {
        userid: "",
        userpwd: "",
        username: "",
        phone: "",
        email: "",
      },
    };
  },
  computed: {
    idState() {
      return this.user.userid.length >= 4;
    },
    pwState() {
      return this.user.userpwd.length >= 4;
    },
    nameState() {
      return this.user.username.length >= 4;
    },
    emailState() {
      return this.user.email.length >= 4;
    },
    phoneState() {
      return this.user.phone.length >= 4;
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
    nameInvalidFeedback() {
      if (this.user.username.length > 0) {
        return "Enter at least 2 characters.";
      }
      return "";
    },
    emailInvalidFeedback() {
      if (this.user.email.length > 0) {
        return "Enter an available email";
      }
      return "";
    },
    phoneInvalidFeedback() {
      if (this.user.phone.length > 0) {
        return "Enter at least 10 characters.";
      }
      return "";
    },
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
    moveList() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
.mypage-box {
  margin: 0 50px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.mypage-btn-form {
  margin: vh(70px) vw(20px) 0px vw(20px);
  align-content: center;
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
.modify {
  // background-color: $color-gray-5;
  color: $color-dark;
  padding: 40px 40px;

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

  #ID,
  #PW,
  #EMAIL,
  #PHONE,
  #NAME {
    width: 330px;
    height: 48px;
    margin-bottom: 8px;
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

  span {
    text-align: center;
  }
}
</style>
