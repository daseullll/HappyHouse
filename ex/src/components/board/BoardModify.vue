<template>
  <div class="regist">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/PencilEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">커뮤니티 글 수정</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">
      다시 한번 꼼꼼히 살펴보세요!
    </div>
    <!--작성시작-->
    <div class="regist_form write-box">
      <table class="write-table">
        <tbody>
          <tr class="tb-first-line tb-line-line">
            <td class="tb-category">
              <label for="userid" class="fs-22 notoMid">작성자</label>
            </td>
            <td>
              <input
                type="text"
                id="userid"
                name="userid"
                v-model="userid"
                ref="userid"
              /><br />
            </td>
          </tr>
          <tr class="tb-line-line">
            <td class="tb-category">
              <label for="subject" class="fs-22 notoMid">제목</label>
            </td>
            <td>
              <input
                type="text"
                id="subject"
                name="subject"
                v-model="subject"
                placeholder="제목을 입력하세요"
                ref="subject"
              /><br />
            </td>
          </tr>
          <tr class="tb-last-line">
            <td class="tb-category">
              <label for="content" class="fs-22 notoMid">내용</label><br />
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
        수정
      </button>
    </div>
    <!--버튼 끝-->
  </div>
</template>

<script>
import http from "@/api/http.js";

export default {
  name: "BoardModify",
  data() {
    return {
      articleno: 0,
      userid: "",
      subject: "",
      content: "",
    };
  },
  created() {
    http.get(`/board/${this.$route.params.articleno}`).then(({ data }) => {
      this.articleno = data.articleno;
      this.userid = data.userid;
      this.subject = data.subject;
      this.content = data.content;
    });
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 registBook 호출
    checkValue() {
      // 사용자 입력값 체크하기
      // isbn, 제목, 저자, 가격, 설명이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.userid &&
        ((msg = "작성자 입력해주세요"),
        (err = false),
        this.$refs.userid.focus());
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
      // 만약, 내용이 다 입력되어 있다면 modify호출
      else this.modifyBoard();
    },

    modifyBoard() {
      http
        .put(`/board/${this.$route.params.articleno}`, {
          articleno: this.articleno,
          userid: this.userid,
          subject: this.subject,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.moveList();
        });
    },
    moveList() {
      // 현재 route를 /list로 변경.
      this.$router.push({ name: "board" });
    },
  },
};
</script>

<style></style>
