const Lectro = require("@lectro/core");
const Buildutils = require("@lectro/enhancer-buildutils");

process.env.NODE_ENV = "production";

exports.domEffect = new Lectro("node")
  .use(Buildutils)
  .devtool("none")
  .addProgressBar({ name: "domEffect", color: "purple" });
