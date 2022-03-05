module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@react-theming/storybook-addon",
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: [".ts", ".tsx", ".js"],
    };
    config.module.rules = config.module.rules.filter((f) => f.test.toString() !== "/\\.css$/");
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[path]-[hash:base64:5]",
            },
          },
        },
      ],
    });
    config.resolve.mainFields = ["src", "module", "main"];
    return config;
  },
};
