const first = h(
  "div",
  [className("main-heading"), onClick(_ => console.log("Hi"))],
  ["Hi from vdom", h("h3", [], ["this is cool"])]
);

const second = h(
  "div",
  [className("main-heading")],
  ["Hi from vdom", h("h3", [], ["re-rendered"])]
);

const $root = document.getElementById("root");

render($root, first);

setTimeout(_ => {
  render($root, second, first);
}, 5000);
