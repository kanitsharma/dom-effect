const path = require("path");
const { domEffect } = require("./webpack.config");

domEffect.setOutputPath(path.resolve(__dirname, "dist")).build();
