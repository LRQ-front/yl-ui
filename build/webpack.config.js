const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const glob = require("glob");

const list = {}; //存放每个组件和总入口的文件路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    path: path.resolve(__dirname, "../dist(webpack)"),
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
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "css/font/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new VueLoaderPlugin(),
    // 提取 CSS 文件的插件
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
