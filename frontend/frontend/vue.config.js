const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/_variables.scss";`,
      },
    },
  },
});
