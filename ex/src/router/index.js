import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// import Vuex from "vuex";
import HouseView from "../views/HouseView.vue";

import UserView from "@/views/UserView.vue";
import LoginView from "../views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";
import UserMyPage from "@/components/user/UserMyPage.vue";
// // import UserModify from "@/components/user/UserModify.vue";

import NewsView from "../views/NewsView.vue";
import HouseNewsList from "@/components/news/HouseNewsList.vue";
import SchoolNewsList from "@/components/news/SchoolNewsList.vue";

import SchoolView from "@/views/SchoolView.vue";

import BoardView from "@/views/BoardView.vue";
// import BoardList from "@/components/Board/BoardList.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import BoardDelete from "@/components/board/BoardDelete.vue";
import BoardModify from "@/components/board/BoardModify.vue";

// // import store from "@/store/index.js";

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
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/join",
    name: "Join",
    component: JoinView,
  },

  {
    path: "/user",
    name: "user",
    redirect: "/user/mypage",
    component: UserView,
    children: [
      {
        path: "mypage",
        name: "MyPage",
        component: UserMyPage,
      },
      {
        path: "modify",
        name: "Modify",
        component: () => import("@/components/user/UserModify.vue"),
      },
      {
        path: "withdraw",
        name: "Withdraw",
        component: () => import("@/components/user/UserWithdraw.vue"),
      },
    ],
  },

  {
    // 뉴스
    path: "/news",
    name: "news",
    component: NewsView,
    // redirect: "/news/list",
    children: [
      {
        path: "hlist",
        name: "houseNewsList",
        component: HouseNewsList,
        // component: () => import("@/components/news/NoticeList.vue"),
      },
      {
        path: "slist",
        name: "schoolNewsList",
        component: SchoolNewsList,
        // component: () => import("@/components/news/NoticeList.vue"),
      },
    ],
  },

  {
    // 질문게시판
    path: "/board",
    name: "board",
    // component: () => import("@/views/QuestionView.vue"),
    component: BoardView,
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardList",
        // component: BoardList,
        component: () => import("@/components/board/BoardList.vue"),
      },
      {
        path: "write",
        name: "boardWrite",
        component: BoardWrite,
        // component: () => import("@/components/Board/BoardWrite.vue"),
      },
      {
        path: "detail/:articleno",
        name: "boardDetail",
        component: BoardDetail,
        // component: () => import("@/components/Board/BoardDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "boardModify",
        component: BoardModify,
        // component: () => import("@/components/Board/BoardModify.vue"),
      },
      {
        path: "delete/:articleno",
        name: "boardDelete",
        component: BoardDelete,
        // component: () => import("@/components/notice/BoardDelete.vue"),
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
