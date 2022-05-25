<template>
  <b-tr>
    <a :href="'https://land.naver.com/' + url">
      <b-td> <b-img-lazy :src="img" /></b-td>
      <b-td> {{ title }} </b-td>
    </a>
  </b-tr>
</template>

<script>
import { url } from "vuelidate/lib/validators";
export default {
  name: "NewsListItem",
  props: {
    url: url,
    img: url,
    title: String,
  },
};
</script>

<style></style>
