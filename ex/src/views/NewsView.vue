<template>
  <div class="container outer">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/FireEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">뉴스</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">우리 동네 HOT한 소식!!</div>
    <!--news 시잓-->
    <div class="news-box select-news">
      <button class="news-cata-btn fs-16 notoMid" @click="moveWrite">
        전체
      </button>
      <button class="news-cata-btn fs-16 notoMid" @click="moveWrite">
        아파트 소식
      </button>
      <button class="news-cata-btn fs-16 notoMid" @click="moveWrite">
        학군 소식
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>
