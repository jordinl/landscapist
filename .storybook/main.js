const { mergeConfig } = require("vite");
const { resolve } = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "storybook-addon-react-router-v6",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: "@storybook/react",
  typescript: {
    reactDocgen: "react-docgen",
  },
  staticDirs: ["../stories"],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@landscapist/core": resolve(__dirname, "../packages/core/src"),
          "@landscapist/react": resolve(__dirname, "../packages/react/src"),
          landscapist: resolve(__dirname, "../packages/landscapist"),
        },
      },
    });
  },
};
