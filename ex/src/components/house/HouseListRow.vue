<template>
  <b-row
    class="house-list-row-show"
    @click="showHouseDealModal"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col>
      {{ house.dongName }}
    </b-col>
    <b-col>
      {{ house.aptName }}
    </b-col>
    <b-col>
      {{ house.buildYear }}
    </b-col>
    <b-col>
      {{ (parseInt(house.recentPrice.replace(",", "")) * 10000) | price }}원
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
const houseStore = "houseStore";
export default {
  name: "HouseListRow",
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    house: Object,
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    ...mapState(houseStore, [""]),
  },
  methods: {
    ...mapActions(houseStore, ["getHouseDealList", "toggleHouseDealModal"]),
    colorChange(flag) {
      this.isColor = flag;
    },
    showHouseDealModal() {
      this.getHouseDealList(this.house.aptCode);
      this.toggleHouseDealModal();
      // console.log("목록 호출!!~~");
      alert;
    },
  },
};
</script>

<style lang="scss">
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: $color-secondary;
}
.house-list-row-show {
  padding-top: 10px;
  text-align: center;
  border: #fff3cd;
  margin-top: 10px;
  height: 50px;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>
