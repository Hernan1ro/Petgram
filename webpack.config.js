const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/home",
  },
  mode: "development",
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json", to: "" },
        { from: "public/service-worker.js", to: "" },
        { from: "public/icon.png", to: "assets" },
      ],
    }),
    // new WebpackPwaManifestPlugin({
    //   name: "Petgram - Tu app de fotos de mascotas",
    //   shortname: "Petgram 🐶",
    //   description: "Con Petgram puedes encontrar fotos de animales domésticos",
    //   background_color: "#fff",
    //   theme_color: "#ffa",
    //   icons: [
    //     {
    //       src: path.resolve("src/assets/icon.png"),
    //       sizes: [96, 128, 144, 192, 256, 384, 512],
    //       purpose: "maskable",
    //     },
    //   ],
    // }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp(
    //         "https://(res.cloudinary.com|images.unsplash.com)"
    //       ),
    //       handler: "CacheFirst",
    //       options: {
    //         cacheName: "images",
    //       },
    //     },
    //     {
    //       urlPattern: new RegExp(
    //         "https://petgram-server-clgg.vercel.app/graphql"
    //       ),
    //       handler: "NetworkFirst",
    //       options: {
    //         cacheName: "api",
    //       },
    //     },
    //   ],
    // }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-syntax-dynamic-import"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
