import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// import Vuex from "vuex";
import HouseView from "../views/HouseView.vue";

// // import UserView from "@/views/UserView.vue";
import LoginView from "../views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";
// // import UserMyPage from "@/components/user/UserMyPage.vue";
// // import UserModify from "@/components/user/UserModify.vue";

import NewsView from "../views/NewsView.vue";
import NewsList from "@/components/news/NewsList.vue";
import NewsDetail from "@/components/news/NewsDetail.vue";

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

  //   {
  //     // path: "/user",
  //     // name: "user",
  //     // component: () => import("@/views/UserView.vue"),
  //     // children: [
  //     // {
  //     //   path: "usermypage",
  //     //   name: "userMyPage",
  //     //   component: () => import("@/components/user/UserMyPage.vue"),
  //     // },
  //     // {
  //     //   path: "usermodify",
  //     //   name: "userModify",
  //     //   component: () => import("@/components/user/UserModify.vue"),
  //     // },
  //     // ],
  //   },
  {
    // 뉴스
    path: "/news",
    name: "news",
    component: NewsView,
    // redirect: "/news/list",
    children: [
      {
        path: "list",
        name: "newsList",
        component: NewsList,
        // component: () => import("@/components/news/NoticeList.vue"),
      },

      {
        path: "detail/:articleno",
        name: "newsDetail",
        component: NewsDetail,
        // component: () => import("@/components/news/NewsDetail.vue"),
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
