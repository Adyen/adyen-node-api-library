module.exports = {
 presets: [
  "@babel/env",
  [
   "@babel/preset-typescript",
   {
    targets: {
     node: "current"
    }
   }
  ]
  ],
 plugins: [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread"
  ],
 env: {
  test: {
   plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-typescript"
   ]
  }
  }
}