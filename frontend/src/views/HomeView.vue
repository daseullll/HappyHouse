<template>
  <div>
    <main-content :msg="msg"></main-content>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  name: "HomeView",
  components: { MainContent },
  data() {
    return {
      msg: "해피하우스",
    };
  },
};
</script>
