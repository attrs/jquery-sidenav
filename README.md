# sidenav

jquery plugin for accordion side navigation

[![NPM Version][npm-version]][npm-url] [![NPM Downloads][npm-total]][npm-url] [![NPM Downloads][npm-month]][npm-url] [![NPM Downloads][license]][npm-url]

[npm-version]: https://img.shields.io/npm/v/sidenav.svg?style=flat
[npm-url]: https://npmjs.org/package/sidenav
[npm-total]: https://img.shields.io/npm/dt/sidenav.svg?style=flat
[npm-month]: https://img.shields.io/npm/dm/sidenav.svg?style=flat
[license]: https://img.shields.io/npm/l/sidenav.svg?style=flat


## Installation
```sh
$ npm install sidenav --save
```

## Usage
### commonjs
```javascript
require('sidenav');
```

### browser
```html
<script src="dist/sidenav.min.js"></script>
```

### Example
```javascript
// init
$('#sidebar').sidenav();

// mark as active
$('#sidebar').sidenav('/href/for/active');
```

```html
<ul class="nav sidenav">
  <li>
    <a href="/a">
      <i class="fa fa-cube"></i>
      <span class="sidebar-title">menu A</span>
    </a>
  </li>
  <li>
    <a href="/b">
      <i class="fa fa-cube"></i>
      <span class="sidebar-title">menu B</span>
    </a>
  </li>
  <li>
    <a class="accordion-toggle" href>
      <i class="fa fa-cube"></i>
      <span class="sidebar-title">accordion</span>
      <span class="caret"></span>
    </a>
    <ul class="nav sub-nav">
      <li>
        <a href="/sub/a">
          <i class="fa fa-cube"></i>
        <span class="sidebar-title">submenu A</span>
        </a>
      </li>
    </ul>
  </li>
</ul>
```


### License
Licensed under the MIT License.
See [LICENSE](./LICENSE) for the full license text.
