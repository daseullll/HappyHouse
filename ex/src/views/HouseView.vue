<template>
  <div class="container outer">
    <div class="title-container">
      <span
        ><img class="titleIcon" src="@/assets/images/emoji/PencilEmoji.png" />
      </span>
      <span class="underline title fs-48 notoBold">주택정보</span>
    </div>
    <div class="sub-title fs-24 mt-15 notoMid">
      관심 지역을 선택해보세요! 아파트의 실거래가를 조회할 수 있습니다 :)
    </div>

    <!--select 시작-->
    <section>
      <div class="apt_page">
        <div class="apt_title">
          <h3 class="apt_title_detail hidden">아파트 조회 상세</h3>
          <button
            class="apt_title_detail hidden"
            id="detail_btn"
            onclick="location.reload()"
          >
            리셋
          </button>
          <div id="blank_1"></div>
        </div>
        <div class="apt_show">
          <select name="sido" id="sido" class="ml-10"></select>
          <select name="gugun" id="gugun" class="ml-10">
            <option value="">구/군선택</option>
          </select>
          <select name="dong" id="dong" class="ml-10">
            <option value="">동 선택</option>
          </select>
        </div>

        <div class="apt_show mt-20">
          <table id="price">
            <tr class="tr_size">
              <th id="first_th">아파트</th>
              <th class="price_th">금액</th>
              <th class="price_th">동</th>
              <th class="price_th">년</th>
              <th class="price_th">월</th>
              <th class="price_th">일</th>
              <th id="last_th">전용면적</th>
            </tr>
            <tbody id="aptinfo"></tbody>
          </table>
        </div>
      </div>
    </section>
    <div class="apt_show" id="map"></div>
  </div>
</template>

<script>
export default {
  name: "HouseView",
  components: {},
};
</script>

<style lang="scss">
.apt_show {
  display: block;
  /* width: 800px; */
  margin: 0 auto;
  margin-bottom: 0.6em;
  text-align: center;
  /* align-content: center; */
}
.apt_title {
  text-align: center;
  padding-bottom: 80px;
  color: $color-dark;
}
select {
  /* margin: 0 auto; */
  width: 150px;
  height: 30px;
  margin-right: 0px;
  margin-left: 20px;
  margin-bottom: 10px;
  // padding: 10px;
}
#price {
  text-align: center;
  margin: 0 auto;
}
.tr_size th {
  height: 40px;
  color: black;
  border-bottom: 2px solid black;
  padding: 20px;
  font-size: vw(20px);
  vertical-align: top;
  background-color: white;
}
#first_th {
  width: 230px;
}
.price_th {
  width: 100px;
}
#last_th {
  width: 150px;
}

#aptinfo > tr > td {
  height: 30px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
  color: black;
}
#map {
  height: 800px;
  width: 1200px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.hidden {
  display: none;
}

#detail-link-title:hover {
  color: #ffb62c;
}

#detail-link-marker:hover {
  color: #ffb62c;
}

#detail_btn {
  /* height : 30px; */
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  padding: 10px 10px;
  margin-top: 30px;
  width: 60px;
  /* display : inline; */
  background-color: grey;
  color: white;
  border: none;
}

#detail_btn:hover {
  background-color: $color-primary;
}
</style>
