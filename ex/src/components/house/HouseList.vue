<template>
  <div class="house-list">
    <b-container v-if="houses && houses.length != 0" class="bv-example-row">
      <b-row class="house-title-row">
        <b-col class="notoMid"> 법정동 </b-col>
        <b-col class="notoMid"> 아파트이름 </b-col>
        <b-col class="notoMid"> 건축년도 </b-col>
        <b-col class="notoMids"> 최근거래금액 </b-col>
      </b-row>
      <house-list-row
        v-for="(house, index) in houses"
        :key="index"
        :house="house"
      />
    </b-container>
    <b-container v-else class="bv-example-row">
      <b-row>
        <b-col
          ><b-alert show variant="warning"
            >주택 목록이 없습니다.</b-alert
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HouseListRow from "@/components/house/HouseListRow.vue";
import { mapState } from "vuex";
const houseStore = "houseStore";
export default {
  name: "HouseList",
  components: {
    HouseListRow,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
};
</script>

<style lang="scss">
.bv-example-row {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  margin-top: 30px;
  width: 900px;
  text-align: center;
}
.house-title-row {
  background-color: $color-primary;
  color: $color-white;
  text-align: center;
  padding-top: 12.5px;
  height: 50px;
}
.house-list {
  // margin-left: 80px;
}
</style>
