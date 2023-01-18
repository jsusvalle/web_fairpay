const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  staticDirs: ["../public"],
  options: {
    postcssLoaderOptions: {
      implementation: require("postcss"),
    },
  },
  viteFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'app': resolve("../src/app"),
      'components': resolve("../src/components"),
      'hooks': resolve("../src/hooks"),
      'infrastructure': resolve("../src/infrastructure"),
      'models': resolve("../src/models"),
      'mock_services': resolve("../src/mock_services"),
      'context': resolve("../src/context"),
      'utils': resolve("../src/utils"),
    };

    return config;
  }
}