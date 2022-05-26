<template>
  <li class="show-news item-card">
    <div class="newscard">
      <a :href="'https://land.naver.com/' + url">
        <div class="fs-28" style="margin: 25px 20px 20px 25px">
          <!-- <img class="newsIcon" src="@/assets/images/emoji/VoltageEmoji.png" />

          🏢 -->
          <div class="fs-14 notoMid new-list-cata">아파트</div>
        </div>
        <div class="news-title notoBold fs-20">{{ title }}</div>
        <div class="news-img"><img :src="img" /></div>
      </a>
    </div>
  </li>
</template>

<script>
import { url } from "vuelidate/lib/validators";
export default {
  name: "HouseNewsListItem",
  props: {
    url: url,
    img: url,
    title: String,
  },
};
</script>

<style lang="scss">
li {
  // display: inline-block;
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
  // position: relative;
  border-radius: 15px;
}
.new-list-cata {
  border-radius: 17px;
  background-color: $color-sub;
  color: #ffffff;
  width: 80px;
  padding: 5px 0;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.show-news {
  display: inline-flex;
}
.item-card {
  overflow: hidden;
  position: relative;
}
.newscard {
  // display: block;

  width: 300px;
  height: 450px;
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.18);
  margin: 30px 30px 40px 30px;
  border-radius: 15px;
  position: relative;
  box-sizing: border-box;
  text-overflow: hidden;
  display: block;
  justify-content: center;
  align-content: center;
  text-align: center;

  a {
    text-decoration: none;
    color: $color-dark;
  }
  a:hover {
    text-decoration: none;
    color: $color-sub;
  }
  .newsIcon {
    weight: 40px;
    height: 40px;
  }
  .news-title {
    // text-overflow: hidden;
    margin: 0 25px 35px 30px;
    // word-break: keep-all;
    // word-wrap: break-word;
    height: 120px;
    overflow: auto;
    justify-content: center;
    align-content: center;
    text-align: left;
  }

  .news-img {
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
}
</style>
