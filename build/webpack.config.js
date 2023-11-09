const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const glob = require("glob");

const list = {}; //存放每个组件和总入口的文件路径

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.ts`);
  //   console.log(files);
  for (const file of files) {
    const component = file.split("/")[1];
    list[component] = `./${file}`;
  }
  console.log(list);
}

makeList("packages", list);

module.exports = {
  mode: "production",
  entry: list,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].umd.js",
    libraryTarget: "umd",
    library: "yl-ui",
  },
  externals: {
    // 排除vue打包
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [new VueLoaderPlugin()],
};
