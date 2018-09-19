# dom-effect :rocket:

- vdom implmentation in just 1.1 kb of javascript

## Example

```javascript
const first = h("div", { class: "main-heading" }, [
  "Hi from vdom",
  h("h3", {}, ["this is cool"])
]);

const second = h("div", { class: "main-heading" }, [
  "Hi from vdom",
  h("h3", {}, ["re-rendered"])
]);

const $root = document.getElementById("root");

render($root, first);

setTimeout(_ => {
  render($root, second, first);
}, 5000);
```
