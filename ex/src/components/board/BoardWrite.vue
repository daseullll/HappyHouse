<template>
  <div class="regist">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/PencilEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">글 작성</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">
      나만 아는 꿀팁들을 공유해주세요!
    </div>
    <!--작성시작-->
    <div class="regist_form write-box">
      <table class="write-table">
        <tbody>
          <tr class="tb-first-line tb-line-line">
            <td class="tb-category">
              <label for="userid" class="fs-20 notoMid mr-30 ml-30"
                >작성자</label
              >
            </td>
            <td>
              <div class="fs-18 ml-30">
                {{ userInfo.userid }}
              </div>
            </td>
          </tr>
          <tr class="tb-line-line">
            <td class="tb-category">
              <label for="subject" class="fs-20 notoMid ml-30 mr-30"
                >제목</label
              >
            </td>
            <td>
              <input
                type="text"
                id="subject"
                name="subject"
                v-model="subject"
                placeholder="제목을 입력하세요"
                ref="subject"
                class="fs-18 ml-30"
              /><br />
            </td>
          </tr>
          <tr class="tb-last-line">
            <td class="tb-category">
              <label for="content" class="fs-20 notoMid ml-30 mr-30">내용</label
              ><br />
            </td>
            <td>
              <textarea
                id="content"
                name="content"
                v-model="content"
                placeholder="내용을 입력하세요"
                ref="content"
                cols="110"
                rows="15"
                class="fs-18 ml-30 mt-20"
              ></textarea
              ><br />
            </td>
          </tr>
        </tbody>
      </table>
      <!--작성끝-->
    </div>
    <!--버튼시작-->
    <div class="write-btn-form">
      <button class="board-write-btn-cancle fs-18 notoMid" @click="moveList">
        취소
      </button>
      <button class="board-write-btn-confirm fs-18 notoMid" @click="checkValue">
        확인
      </button>
    </div>
    <!--버튼 끝-->
  </div>
</template>

<script>
import http from "@/api/http.js";
import { mapState } from "vuex";
const memberStore = "memberStore";

export default {
  name: "BoardWrite",
  data() {
    return {
      // userid: "",
      subject: "",
      content: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 registBoard 호출
    checkValue() {
      // 사용자 입력값 체크하기
      let err = true;
      let msg = "";
      // !this.userid &&
      //   ((msg = "작성자 입력해주세요"),
      //   (err = false),
      //   this.$refs.userid.focus());
      err &&
        !this.subject &&
        ((msg = "제목 입력해주세요"),
        (err = false),
        this.$refs.subject.focus());
      err &&
        !this.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBoard 호출
      else this.registBoard();
    },

    registBoard() {
      http
        .post("/board", {
          userid: this.userInfo.userid,
          subject: this.subject,
          content: this.content,
        })
        .then(({ data }) => {
          // 서버에서 정상적인 값이 넘어 왔을경우 실행.
          let msg = "문제가 발생했습니다.";
          if (data === "success") {
            msg = "글 작성이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    moveList() {
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style lang="scss">
.write-box {
  margin-top: vh(75px);
}

.write-btn-form {
  // margin-top: 70px;
  margin: vh(70px) vw(20px) 0px vw(20px);
  align-content: center;
  display: flex;

  .board-write-btn-cancle {
    position: relative;
    width: vw(150px);
    height: vh(48px);

    background: $color-gray-9;
    border-radius: 20px;
    border: none;
    color: $color-white;
    margin: 0 vw(25px);
  }
  .board-write-btn-confirm {
    position: relative;
    width: vw(150px);
    height: vh(48px);

    background: $color-primary;
    border-radius: 20px;
    border: none;
    color: $color-white;
    margin: 0 vw(25px);
  }
  justify-content: center;
}

#content {
  border: none;
}

label {
  margin: vh(15px) 0 vh(15px) 0;
}
input {
  width: 100%;
  margin-right: 20px;
}
</style>
