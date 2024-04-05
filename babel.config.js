module.exports = {
  presets: [
    ["@babel/preset-env"],
    "@babel/preset-typescript", // 解析ts语法，在采用preset-env
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ["@babel/transform-typescript"],
    },
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "yl-ui-lib",
        styleLibrary: {
          name: "css",
          base: false,
          path: "[module].css", //yl-ui-lib/css/button.css
        },
        libDir: "dist",
      },
    ],
  ],
};
