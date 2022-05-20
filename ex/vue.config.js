const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/assets/styles/variables.scss';
        @import '@/assets/styles/typography.scss';
        @import '@/assets/styles/utilities.scss';
        @import '@/assets/styles/reset.scss';

        `,
      },
    },
  },
});
