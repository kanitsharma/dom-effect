# dom-effect :rocket:

- vdom implmentation in just 2 kb of javascript

## Example

- With Elm Like Syntax ( Using functions )

```javascript
import render, { f } from "dom-effect";
import { className, onClick } from "dom-effect";

const first = f(
  "div",
  [className("main-heading"), onClick(_ => console.log("Hi"))],
  ["Hi from vdom", h("h3", [], ["this is cool"])]
);

const second = f(
  "div",
  [className("main-heading")],
  ["Hi from vdom", h("h3", [], ["re-rendered"])]
);

const $root = document.getElementById("root");

render($root, first);

setTimeout(_ => {
  render($root, second, first);
}, 5000);
```

- Using jsx

```javascript
import render, { h } from "dom-effect";

const first = (
  <div className="main-heading" onClick={_ => console.log("Hi")}>
    {"Hi from vdom"}
    <h3>this is cool</h3>
  </div>
);

const second = (
  <div className="main-heading">
    {"Hi from vdom"}
    <h3>re-rendered</h3>
  </div>
);

const $root = document.getElementById("root");

render($root, first);

setTimeout(_ => {
  render($root, second, first);
}, 5000);
```
