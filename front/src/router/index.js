import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// import Vuex from "vuex";
import HouseView from "@/views/HouseView.vue";

// import UserView from "@/views/UserView.vue";
// import UserLogin from "@/components/user/UserLogin.vue";
// import UserJoin from "@/components/user/UserJoin.vue";
// import UserMyPage from "@/components/user/UserMyPage.vue";
// import UserModify from "@/components/user/UserModify.vue";

import NoticeView from "@/views/NoticeView.vue";
// import NoticeList from "@/components/notice/NoticeList.vue";
// import NoticeWrite from "@/components/notice/NoticeWrite.vue";
// import NoticeDetail from "@/components/notice/NoticeDetail.vue";
// import NoticeModify from "@/components/notice/NoticeModify.vue";
// import NoticeDelete from "@/components/notice/NoticeDelete.vue";

import SchoolView from "@/views/SchoolView.vue";

import QuestionView from "@/views/QuestionView.vue";
// import QuestionList from "@/components/question/QuestionList.vue";
import QuestionWrite from "@/components/question/QuestionWrite.vue";
import QuestionDetail from "@/components/question/QuestionDetail.vue";
import QuestionDelete from "@/components/question/QuestionDelete.vue";
import QuestionModify from "@/components/question/QuestionModify.vue";

// import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/house",
    name: "house",
    component: HouseView,
    // component: () => import("@/views/HouseView.vue"),
  },
  {
    path: "/school",
    name: "school",
    component: SchoolView,
    // component: () => import("@/views/HouseView.vue"),
  },

  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/components/user/UserLogin.vue"),
      },
      {
        path: "join",
        name: "Join",
        component: () => import("@/components/user/UserJoin.vue"),
      },
      // {
      //   path: "usermypage",
      //   name: "userMyPage",
      //   component: () => import("@/components/user/UserMyPage.vue"),
      // },
      // {
      //   path: "usermodify",
      //   name: "userModify",
      //   component: () => import("@/components/user/UserModify.vue"),
      // },
    ],
  },
  {
    // 공지사항
    path: "/notice",
    name: "notice",
    component: NoticeView,
    redirect: "/notice/list",
    // children: [
    //   {
    //     path: "list",
    //     name: "noticeList",
    //     component: () => import("@/components/notice/NoticeList.vue"),
    //   },
    //   {
    //     path: "write",
    //     name: "noticeWrite",
    //     component: () => import("@/components/notice/NoticeWrite.vue"),
    //   },
    //   {
    //     path: "detail/:articleno",
    //     name: "noticeDetail",
    //     component: () => import("@/components/notice/NoticeDetail.vue"),
    //   },
    //   {
    //     path: "modify/:articleno",
    //     name: "noticeModify",
    //     component: () => import("@/components/notice/NoticeModify.vue"),
    //   },
    //   {
    //     path: "delete/:articleno",
    //     name: "noticeDelete",
    //     component: () => import("@/components/notice/NoticeDelete.vue"),
    //   },
    // ],
  },

  {
    // 질문게시판
    path: "/question",
    name: "question",
    // component: () => import("@/views/QuestionView.vue"),
    component: QuestionView,
    redirect: "/question/list",
    children: [
      {
        path: "list",
        name: "questionList",
        // component: QuestionList,
        component: () => import("@/components/question/QuestionList.vue"),
      },
      {
        path: "write",
        name: "questionWrite",
        component: QuestionWrite,
        // component: () => import("@/components/question/QuestionWrite.vue"),
      },
      {
        path: "detail/:articleno",
        name: "questionDetail",
        component: QuestionDetail,
        // component: () => import("@/components/question/QuestionDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "questionModify",
        component: QuestionModify,
        // component: () => import("@/components/question/QuestionModify.vue"),
      },
      {
        path: "delete/:articleno",
        name: "questionDelete",
        component: QuestionDelete,
        // component: () => import("@/components/notice/QuestionDelete.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
