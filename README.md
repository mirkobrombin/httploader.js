# httploader.js
Load content from an url in an element (without jQuery)

## How to use
First of all import `httploader.js` in your project. 

Assuming we have a `data.html` page:
```html
<ul>
  <li>Hello</li>
  <li>World</li>
</ul>
```
and `index.html`:
```html
<html>
  <body>
    <h1>Words</h1>
    <div id="data"></div>
  </body>
</html>
```
we want to load data inside the `#data` element, so:
```javascript
var data = document.getElementById("data");
load(data, "data.html");
```
This will put the content of `data.html` into` # data`.

### Load portion of source
Let's say we have a `data.html` like the following:
```html
<html>
  <body>
    <ul>
      <li>Hello</li>
      <li>World</li>
    </ul>
  </body>
</html>
```
we want to load only the `ul` inside our `#data` element. We are going to do this:
```javascript
var data = document.getElementById("data");
load(data, "data.html", "body>ul");
```
That's all Folks.
