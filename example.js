const a = h("div", {}, ["HI", h("h3", {}, ["Cool"])]);

const $root = document.getElementById("root");

render($root, a);
