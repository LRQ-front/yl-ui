const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const glob = require("glob");

const list = {}; //存放每个组件和总入口的文件路径

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.ts`);
  for (const file of files) {
    let component = file.split("/")[1];
    //将yl-ui打包后的文件变成index.js,而不是yl-ui.js，为了后面的按需导入
    if (component == "yl-ui") {
      component = "index";
    }
    list[component] = `./${file}`;
  }
}

makeList("packages", list);

module.exports = {
  mode: "production",
  entry: list,
  output: {
    path: path.resolve(__dirname, "../dist(gulp+webpack)"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "yl-ui-lib",
    globalObject: "this",
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
