module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-transform-runtime",
      "babel-plugin-syntax-async-functions",
      "react-hot-loader/babel",
    ]
}