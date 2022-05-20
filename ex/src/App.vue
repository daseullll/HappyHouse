<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
  </div>
</template>
<script>
import HeaderNav from "@/components/layout/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/font.css";
</style>

<!-- publishing end -->
