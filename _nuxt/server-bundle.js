module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* template */
var __vue_template__ = __webpack_require__(67)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Footer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4e99f6ef"
if (__vue_options__.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("highlight.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("marked");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(57)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Affix.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0437d0ac"
if (__vue_options__.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Bar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5925e26f"
if (__vue_options__.functional) {console.error("[vue-loader] Bar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(73)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/HtmlParser.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] HtmlParser.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("front-matter");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(66)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/RecursiveList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4c658acc"
if (__vue_options__.functional) {console.error("[vue-loader] RecursiveList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_meta__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nuxt_container_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nuxt_container_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_nuxt_container_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nuxt_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_Atinux_Projets_nuxt_nuxtjs_org_pages_app_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_Atinux_Projets_nuxt_nuxtjs_org_pages_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_Atinux_Projets_nuxt_nuxtjs_org_pages_app_vue__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return app; });
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









// Component: <nuxt-container>
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_4__components_nuxt_container_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_4__components_nuxt_container_vue___default.a);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_5__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_5__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

if (false) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Includes external plugins

__webpack_require__(34);

__webpack_require__(35);

// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = _extends({
  router: __WEBPACK_IMPORTED_MODULE_2__router_js__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store_index_js__["a" /* default */],
  _nuxt: {
    transition: Object.assign({}, defaultTransition),
    setTransition: function setTransition(transition) {
      if (!transition) {
        transition = defaultTransition;
      } else if (typeof transition === 'string') {
        transition = Object.assign({}, defaultTransition, { name: transition });
      }
      this.$options._nuxt.transition.name = transition.name;
      this.$options._nuxt.transition.mode = transition.mode;
      return transition;
    },

    err: null,
    error: function error(err) {
      err = err || null;
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_6__Users_Atinux_Projets_nuxt_nuxtjs_org_pages_app_vue___default.a);

/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__router_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__store_index_js__["a"]; });


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ exports["c"] = getContext;
/* harmony export (immutable) */ exports["d"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ exports["a"] = urlJoin;
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,
    store: context.store,
    route: context.to ? context.to : context.route,
    error: context.error,
    base: '/',
    env: { "githubToken": "4aa6bcf919d238504e7db59a66d32e78281c0ad3" }
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof Promise)) {
    promise = Promise.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("querystring");

/***/ },
/* 16 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'nuxt-container',
  head: { "title": "Nuxt.js - A minimal framework for server-renderer Vue.js applications", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "content": "Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering, code-splitting, hot-reloading, static generation and more!" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "favicon.ico" }] }
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#41B883',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        _vue2.default.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
}; //
//
//
//
//
//
//
//
//

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _error = __webpack_require__(51);

var _error2 = _interopRequireDefault(_error);

var _nuxtLoading = __webpack_require__(45);

var _nuxtLoading2 = _interopRequireDefault(_nuxtLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    _vue2.default.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    _vue2.default.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtError: _error2.default,
    NuxtLoading: _nuxtLoading2.default
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ },
/* 19 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    menu: {
      type: String,
      required: true
    },
    list: {
      type: Object,
      required: true
    }
  }
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Search = __webpack_require__(49);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('toggle');
    }
  },
  components: {
    NuxtSearch: _Search2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _highlight = __webpack_require__(2);

var _highlight2 = _interopRequireDefault(_highlight);

var _RecursiveList = __webpack_require__(10);

var _RecursiveList2 = _interopRequireDefault(_RecursiveList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cacheFiles = {}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    example: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      hidden: false,
      currentFile: null,
      content: ''
    };
  },

  computed: {
    parseContent: function parseContent() {
      if (!this.content) {
        return '';
      }
      if (this.isImage) {
        return 'https://github.com/nuxt/nuxt.js/blob/master/' + this.currentFile.path + '?raw=true';
      }
      return this.content;
    },
    breadcrumb: function breadcrumb() {
      return this.currentFile.path.replace('examples/' + this.example, '');
    },
    isImage: function isImage() {
      if (this.currentFile && /[^\s]+\.(jpe?g|png|gif|bmp)$/i.test(this.currentFile.path)) {
        return true;
      }
      return false;
    },
    isMobile: function isMobile() {
      return window.innerWidth < 576;
    }
  },
  methods: {
    changeFile: function changeFile(file) {
      var _this = this;

      this.currentFile = file;
      this.content = cacheFiles[file.path];
      if (this.isMobile) {
        this.hidden = true;
      }
      if (!this.content) {
        (0, _axios2.default)({
          url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/' + file.path,
          headers: {
            'Authorization': 'token ' + "4aa6bcf919d238504e7db59a66d32e78281c0ad3"
          }
        }).then(function (res) {
          var content = window.atob(res.data.content);
          content = _highlight2.default.highlightAuto(content).value;
          cacheFiles[file.path] = content;
          _this.content = cacheFiles[file.path];
        });
      }
    }
  },
  components: {
    RecursiveList: _RecursiveList2.default
  }
};

/***/ },
/* 22 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  computed: {
    visible: function visible() {
      return this.$store.state.visibleHeader;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleHeader');
    }
  }
};

/***/ },
/* 23 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  props: ['content'],
  mounted: function mounted() {
    this.addListeners();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListeners();
  },

  watch: {
    'content': 'contentUpdated'
  },
  methods: {
    navigate: function navigate(event) {
      var href = event.target.getAttribute('href');
      if (href && href[0] === '/') {
        event.preventDefault();
        this.$router.push(href);
      }
      if (href && href[0] === '#') {
        event.preventDefault();
        var el = document.getElementById(href.slice(1));
        var y = window.outerWidth > 768 ? el.offsetTop - 160 : el.offsetTop - 120;
        window.scrollTo(0, y);
      }
    },
    contentUpdated: function contentUpdated() {
      var _this = this;

      this.removeListeners();
      this.$nextTick(function () {
        _this.addListeners();
      });
    },
    addListeners: function addListeners() {
      this._links = this.$el.getElementsByTagName('a');
      for (var i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false);
      }
    },
    removeListeners: function removeListeners() {
      for (var i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false);
      }
      this._links = [];
    }
  }
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'recursive-list',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  beforeCreate: function beforeCreate() {
    // https://vuejs.org/v2/guide/components.html#Circular-References-Between-Components
    this.$options.components.RecursiveList = __webpack_require__(10);
  },
  mounted: function mounted() {
    var _this = this;

    return (0, _axios2.default)({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/' + this.path,
      headers: {
        'Authorization': 'token ' + "4aa6bcf919d238504e7db59a66d32e78281c0ad3"
      }
    }).then(function (res) {
      res.data.sort(function (f1, f2) {
        // Same type, order by name
        if (f1.type === f2.type) {
          var n1 = f1.name.toUpperCase();
          var n2 = f2.name.toUpperCase();
          if (n1 < n2) return -1;
          if (n1 > n2) return 1;
          return 0;
        }
        if (f1.type === 'dir') return -1;
        return 1;
      });
      if (!_this.currentFile) {
        var f = res.data.find(function (file) {
          return file.name === "package.json";
        });
        if (f) _this.changeFile(f);
      }
      _this.files = res.data.filter(function (f) {
        return f.name.toLowerCase() !== 'readme.md';
      });
    });
  },
  data: function data() {
    return {
      files: []
    };
  },

  computed: {
    currentFile: function currentFile() {
      return this.$parent.currentFile;
    }
  },
  methods: {
    linkClass: function linkClass(f) {
      var c = 'RecursiveList__Item__Link ';
      c += this.currentFile && this.currentFile.path === f.path ? 'RecursiveList__Item__Link--active' : 'RecursiveList__Item__Link--' + f.type;
      return c;
    },
    changeFile: function changeFile(f) {
      if (f.type === 'file' && (!this.currentFile || this.currentFile.path !== f.path)) {
        this.$emit('changeFile', f);
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 25 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      q: ''
    };
  }
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(48);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  watch: {
    $route: 'setStore'
  },
  methods: {
    setStore: function setStore() {
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader');
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix');
    }
  },
  components: {
    Navbar: _Header2.default
  }
}; //
//
//
//
//
//
//

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['error'],
  components: {
    NuxtFooter: _Footer2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = __webpack_require__(3);

var _marked2 = _interopRequireDefault(_marked);

var _highlight = __webpack_require__(2);

var _highlight2 = _interopRequireDefault(_highlight);

var _frontMatter = __webpack_require__(8);

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _Bar = __webpack_require__(5);

var _Bar2 = _interopRequireDefault(_Bar);

var _Affix = __webpack_require__(4);

var _Affix2 = _interopRequireDefault(_Affix);

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _HtmlParser = __webpack_require__(7);

var _HtmlParser2 = _interopRequireDefault(_HtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    NuxtBar: _Bar2.default,
    NuxtAffix: _Affix2.default,
    NuxtFooter: _Footer2.default,
    HtmlParser: _HtmlParser2.default
  },
  data: function data(_ref, callback) {
    var route = _ref.route;

    // Default data
    var data = {
      content: '',
      path: route.params.slug || 'index'
    };
    var path = '/docs/api/' + data.path + '.md';
    if (false) {
      fetch(path).then(function (response) {
        var contenType = response.headers.get('content-type') || '';
        var requestOK = response.status >= 200 && response.status < 300;
        if (!requestOK || contenType.indexOf('text/x-markdown') === -1) {
          throw new Error('API page not found');
        }
        return response.text();
      }).then(function (content) {
        data.content = content;
        callback(null, data);
      }).catch(function (e) {
        callback({ statusCode: 404, message: 'API page not found' }, data);
      });
    } else {
      __webpack_require__(9).readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Documentation page not found' });
        data.content = content;
        callback(null, data);
      });
    }
  },

  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    page: function page() {
      return (0, _frontMatter2.default)(this.content);
    },
    body: function body() {
      return (0, _marked2.default)(this.page.body);
    }
  },
  methods: {
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleAffix');
    }
  },
  head: function head() {
    return {
      title: this.page.attributes.title || 'No title',
      titleTemplate: 'API: %s - Nuxt.js'
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = __webpack_require__(3);

var _marked2 = _interopRequireDefault(_marked);

var _highlight = __webpack_require__(2);

var _highlight2 = _interopRequireDefault(_highlight);

var _frontMatter = __webpack_require__(8);

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _Bar = __webpack_require__(5);

var _Bar2 = _interopRequireDefault(_Bar);

var _Affix = __webpack_require__(4);

var _Affix2 = _interopRequireDefault(_Affix);

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _FilesTree = __webpack_require__(47);

var _FilesTree2 = _interopRequireDefault(_FilesTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = new _marked.Renderer(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

renderer.code = function (code, language) {
  var validLang = !!(language && _highlight2.default.getLanguage(language));
  var highlighted = validLang ? _highlight2.default.highlight(language, code).value : code;
  return '<pre><code class="hljs ' + language + '">' + highlighted + '</code></pre>';
};
_marked2.default.setOptions({ renderer: renderer });

exports.default = {
  components: {
    NuxtBar: _Bar2.default,
    NuxtAffix: _Affix2.default,
    NuxtFooter: _Footer2.default,
    NuxtFilesTree: _FilesTree2.default
  },
  data: function data(_ref, callback) {
    var route = _ref.route;

    var path = route.params.slug || 'hello-world';
    path = '/docs/examples/' + path + '.md';
    if (false) {
      fetch(path).then(function (response) {
        var contenType = response.headers.get('content-type') || '';
        var requestOK = response.status >= 200 && response.status < 300;
        if (!requestOK || contenType.indexOf('text/x-markdown') === -1) {
          throw new Error('Documentation page not found');
        }
        return response.text();
      }).then(function (content) {
        callback(null, { content: content });
      }).catch(function (e) {
        callback({ statusCode: 404, message: 'Example page not found' });
      });
    } else {
      __webpack_require__(9).readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Example page not found' });
        callback(null, { content: content });
      });
    }
  },

  watch: {
    '$route': 'refreshContent'
  },
  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    page: function page() {
      return (0, _frontMatter2.default)(this.content);
    },
    attributes: function attributes() {
      return this.page.attributes;
    },
    body: function body() {
      return (0, _marked2.default)(this.page.body);
    },
    downloadLink: function downloadLink() {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/master/examples/' + this.attributes.github;
    }
  },
  methods: {
    refreshContent: function refreshContent() {
      this.content = this.$options.data().content || '';
    },
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleAffix');
    }
  },
  head: function head() {
    return {
      title: this.page.attributes.title || 'Examples',
      titleTemplate: 'Example: %s - Nuxt.js',
      meta: [{ hid: 'description', name: 'description', content: this.page.attributes.description || 'Nuxt.js example' }]
    };
  }
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = __webpack_require__(3);

var _marked2 = _interopRequireDefault(_marked);

var _highlight = __webpack_require__(2);

var _highlight2 = _interopRequireDefault(_highlight);

var _frontMatter = __webpack_require__(8);

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _Bar = __webpack_require__(5);

var _Bar2 = _interopRequireDefault(_Bar);

var _Affix = __webpack_require__(4);

var _Affix2 = _interopRequireDefault(_Affix);

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _HtmlParser = __webpack_require__(7);

var _HtmlParser2 = _interopRequireDefault(_HtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    NuxtBar: _Bar2.default,
    NuxtAffix: _Affix2.default,
    NuxtFooter: _Footer2.default,
    HtmlParser: _HtmlParser2.default
  },
  data: function data(_ref, callback) {
    var route = _ref.route;

    // Default data
    var data = {
      content: '',
      path: route.params.slug || 'index'
    };
    var path = '/docs/guide/' + data.path + '.md';
    if (false) {
      fetch(path).then(function (response) {
        var contenType = response.headers.get('content-type') || '';
        var requestOK = response.status >= 200 && response.status < 300;
        if (!requestOK || contenType.indexOf('text/x-markdown') === -1) {
          throw new Error('Documentation page not found');
        }
        return response.text();
      }).then(function (content) {
        data.content = content;
        callback(null, data);
      }).catch(function (e) {
        callback({ statusCode: 404, message: 'Documentation page not found' }, data);
      });
    } else {
      __webpack_require__(9).readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Documentation page not found' });
        data.content = content;
        callback(null, data);
      });
    }
  },

  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    page: function page() {
      return (0, _frontMatter2.default)(this.content);
    },
    body: function body() {
      return (0, _marked2.default)(this.page.body);
    }
  },
  methods: {
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleAffix');
    }
  },
  head: function head() {
    return {
      title: this.page.attributes.title || 'No title',
      titleTemplate: '%s - Nuxt.js'
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = __webpack_require__(3);

var _marked2 = _interopRequireDefault(_marked);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _Bar = __webpack_require__(5);

var _Bar2 = _interopRequireDefault(_Bar);

var _Affix = __webpack_require__(4);

var _Affix2 = _interopRequireDefault(_Affix);

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _HtmlParser = __webpack_require__(7);

var _HtmlParser2 = _interopRequireDefault(_HtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    NuxtBar: _Bar2.default,
    NuxtAffix: _Affix2.default,
    NuxtFooter: _Footer2.default,
    HtmlParser: _HtmlParser2.default
  },
  data: function data() {
    // Default data
    var data = {
      releases: []
    };
    return (0, _axios2.default)({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/releases',
      headers: {
        'Authorization': 'token ' + "4aa6bcf919d238504e7db59a66d32e78281c0ad3"
      }
    }).then(function (res) {
      var releases = res.data.filter(function (r) {
        return !r.draft;
      }).map(function (release) {
        return {
          name: release.name,
          date: release.published_at,
          body: (0, _marked2.default)(release.body)
        };
      });
      return { releases: releases };
    });
  },

  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleAffix');
    }
  },
  head: function head() {
    return {
      title: 'Release Notes',
      titleTemplate: '%s - Nuxt.js'
    };
  }
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    NuxtFooter: _Footer2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
'use strict';




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _47f03eea =  false ? function () {
  return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/api.vue');
} : __webpack_require__(52);

var _354ed3ae =  false ? function () {
  return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/examples.vue');
} : __webpack_require__(53);

var _2e1a5e68 =  false ? function () {
  return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide.vue');
} : __webpack_require__(54);

var _23a45d78 =  false ? function () {
  return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide/release-notes.vue');
} : __webpack_require__(55);

var _3494e3a2 =  false ? function () {
  return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/index.vue');
} : __webpack_require__(56);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    // Scroll to the top by default
    var position = { x: 0, y: 0 };
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash };
    }
    return position;
  }
};

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  base: '/',
  linkActiveClass: 'router-link-active',
  scrollBehavior: scrollBehavior,
  routes: [{
    path: '/api',
    component: _47f03eea,
    name: 'api'
  }, {
    path: '/examples',
    component: _354ed3ae,
    name: 'examples'
  }, {
    path: '/guide',
    component: _2e1a5e68,
    name: 'guide'
  }, {
    path: '/guide/release-notes',
    component: _23a45d78,
    name: 'guide-release-notes'
  }, {
    path: '/',
    component: _3494e3a2,
    name: 'index'
  }, {
    path: '/guide/:slug',
    component: _2e1a5e68
  }, {
    path: '/api/:slug',
    component: _47f03eea
  }, {
    path: '/examples/:slug',
    component: _354ed3ae
  }]
});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

if (false) {
  // Include Google Analytics
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  // Set the current page
  ga('create', 'UA-88662854-1', 'auto');
  ga('send', 'pageview');
  // When the app is mounted
  window.onNuxtReady(function (app) {
    // And the route has changed
    app.$nuxt.$on('routeChanged', function (to, from) {
      // We tell Google Analytic to update the page
      ga('set', 'page', to.fullPath);
      ga('send', 'pageview');
    });
  });
}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js__);



var renderer = new __WEBPACK_IMPORTED_MODULE_0_marked__["Renderer"]();
renderer.code = function (code, language) {
  var validLang = !!(language && __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.getLanguage(language));
  var highlighted = validLang ? __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.highlight(language, code).value : code;
  return '<pre><code class="hljs ' + language + '">' + highlighted + '</code></pre>';
};
__WEBPACK_IMPORTED_MODULE_0_marked___default.a.setOptions({ renderer: renderer });

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state: {
    version: '0.8.0',
    visibleHeader: false,
    visibleAffix: false
  },
  mutations: {
    toggle: function toggle(state, key) {
      state[key] = !state[key];
    }
  },
  actions: {
    nuxtServerInit: function nuxtServerInit(_ref, _ref2) {
      var state = _ref.state;
      var req = _ref2.req;

      if (!process.BROWSER) {
        state.guideMenu = __webpack_require__(39);
        state.apiMenu = __webpack_require__(37);
        state.examplesMenu = __webpack_require__(38);
      }
    }
  }
});

/* harmony default export */ exports["a"] = store;

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = {
	"Nuxt Module": [
		{
			"name": "Usage",
			"to": ""
		},
		{
			"name": "Render",
			"to": "/nuxt-render"
		},
		{
			"name": "RenderRoute",
			"to": "/nuxt-render-route"
		}
	],
	"Configuration": [
		{
			"name": "Build",
			"to": "/configuration-build"
		},
		{
			"name": "Cache",
			"to": "/configuration-cache"
		},
		{
			"name": "CSS",
			"to": "/configuration-css"
		},
		{
			"name": "Env",
			"to": "/configuration-env"
		},
		{
			"name": "Generate",
			"to": "/configuration-generate"
		},
		{
			"name": "Head",
			"to": "/configuration-head"
		},
		{
			"name": "Loading",
			"to": "/configuration-loading"
		},
		{
			"name": "Plugins",
			"to": "/configuration-plugins"
		},
		{
			"name": "Router",
			"to": "/configuration-router"
		}
	],
	"pages": [
		{
			"name": "Context",
			"to": "/pages-context"
		},
		{
			"name": "Option: data",
			"to": "/pages-data"
		},
		{
			"name": "Option: fetch",
			"to": "/pages-fetch"
		},
		{
			"name": "Option: transition",
			"to": "/pages-transition"
		},
		{
			"name": "_app.vue",
			"to": "/pages-layout-app"
		},
		{
			"name": "_error.vue",
			"to": "/pages-layout-error"
		},
		{
			"name": "_*.vue",
			"to": "/pages-hidden"
		}
	],
	"store": [
		{
			"name": "Action nuxtServerInit",
			"to": "/store-nuxtserverinit"
		}
	],
	"Commands": [
		{
			"name": "Nuxt",
			"to": "/commands-nuxt"
		},
		{
			"name": "Nuxt build",
			"to": "/commands-nuxt-build"
		},
		{
			"name": "Nuxt start",
			"to": "/commands-nuxt-start"
		},
		{
			"name": "Nuxt generate",
			"to": "/commands-nuxt-generate"
		}
	]
};

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = {
	"Essentials": [
		{
			"name": "Hello world",
			"to": ""
		},
		{
			"name": "SEO HTML Head",
			"to": "/seo-html-head"
		}
	],
	"Customization": [
		{
			"name": "Cached Components",
			"to": "/cached-components"
		},
		{
			"name": "Custom Loading",
			"to": "/custom-loading"
		},
		{
			"name": "Custom Routes",
			"to": "/custom-routes"
		},
		{
			"name": "Global CSS",
			"to": "/global-css"
		},
		{
			"name": "Layouts",
			"to": "/layouts"
		},
		{
			"name": "Plugins",
			"to": "/plugins"
		},
		{
			"name": "Routes transitions",
			"to": "/routes-transitions"
		}
	],
	"Advanced": [
		{
			"name": "Async Datas",
			"to": "/async-datas"
		},
		{
			"name": "Auth Routes",
			"to": "/auth-routes"
		},
		{
			"name": "Vuex Store",
			"to": "/vuex-store"
		},
		{
			"name": "Testing",
			"to": "/testing"
		}
	]
};

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = {
	"Prologue": [
		{
			"name": "What is Nuxt.js ?",
			"to": ""
		},
		{
			"name": "Contribution Guide",
			"to": "/contribution-guide"
		},
		{
			"name": "Release Notes",
			"to": "/release-notes"
		}
	],
	"Getting Started": [
		{
			"name": "Installation",
			"to": "/installation"
		},
		{
			"name": "Directory structure",
			"to": "/directory-structure"
		},
		{
			"name": "Routing",
			"to": "/routing"
		},
		{
			"name": "Pages",
			"to": "/pages"
		},
		{
			"name": "Static files",
			"to": "/static-files"
		},
		{
			"name": "Deployment",
			"to": "/deployment"
		}
	],
	"Customization": [
		{
			"name": "Configuration",
			"to": "/configuration"
		},
		{
			"name": "Custom routes",
			"to": "/custom-routes"
		},
		{
			"name": "Layouts",
			"to": "/layouts"
		},
		{
			"name": "Loading component",
			"to": "/loading-component"
		},
		{
			"name": "Plugins",
			"to": "/plugins"
		},
		{
			"name": "Routes transitions",
			"to": "/routes-transitions"
		},
		{
			"name": "SEO HTML Head",
			"to": "/seo-html-head"
		}
	],
	"Advanced": [
		{
			"name": "Async datas",
			"to": "/async-datas"
		},
		{
			"name": "Vuex store",
			"to": "/vuex-store"
		},
		{
			"name": "Testing",
			"to": "/testing"
		}
	]
};

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = "/_nuxt/img/logo.png?6a5f1ac29f09c930758c123e57d05bee";

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = "/_nuxt/img/logo_nav.png?be08efae0d5c46fd682e2a24f18545ae";

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = "/_nuxt/img/logo_nav_mobile.png?f90e5a3d77508106e815f7179a322c02";

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = "/_nuxt/img/triangles.png?3c20c1813fa54bb34cb3ab00087d4a38";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(72)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/.nuxt/components/nuxt-container.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-container.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/.nuxt/components/nuxt-loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2aeb4e08"
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(70)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/.nuxt/components/nuxt.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/FilesTree.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-df2e5dde"
if (__vue_options__.functional) {console.error("[vue-loader] FilesTree.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(71)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6fcc5ae1"
if (__vue_options__.functional) {console.error("[vue-loader] Header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(69)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Search.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-60d64f08"
if (__vue_options__.functional) {console.error("[vue-loader] Search.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/_app.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] _app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(58)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/_error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-21f6be2e"
if (__vue_options__.functional) {console.error("[vue-loader] _error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(65)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/api.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-47f03eea"
if (__vue_options__.functional) {console.error("[vue-loader] api.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(63)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/examples.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-354ed3ae"
if (__vue_options__.functional) {console.error("[vue-loader] examples.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(61)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2e1a5e68"
if (__vue_options__.functional) {console.error("[vue-loader] guide.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide/release-notes.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-23a45d78"
if (__vue_options__.functional) {console.error("[vue-loader] release-notes.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(62)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3494e3a2"
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('nav', {
    staticClass: "Affix"
  }, [_vm._l((_vm.list), function(links, title) {
    return [_h('h3', {
      staticClass: "Affix__Title"
    }, [_vm._s(title)]), " ", _h('ul', {
      staticClass: "Affix__List"
    }, [_vm._l((links), function(link) {
      return _h('li', {
        staticClass: "Affix__List__Item"
      }, [_h('router-link', {
        staticClass: "Affix__List__Item__Link",
        attrs: {
          "to": _vm.menu + link.to,
          "exact": ""
        }
      }, ["\n          " + _vm._s(link.name) + "\n        "])])
    })])]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', [_h('section', {
    staticClass: "Landscape"
  }, [_h('div', {
    staticClass: "Landscape__Content"
  }, [_h('div', {
    staticClass: "container content"
  }, [_h('img', {
    staticClass: "Landscape__Content__Image",
    attrs: {
      "src": __webpack_require__(43),
      "alt": "Logo nuxt"
    }
  }), " ", _h('h1', {
    staticClass: "Landscape__Content__Title"
  }, ["\n          " + _vm._s(_vm.error.statusCode) + "\n        "]), " ", _h('h2', {
    staticClass: "Landscape__Content__SubTitle"
  }, ["\n          " + _vm._s(_vm.error.message) + "\n        "]), " ", _h('ul', {
    staticClass: "Landscape__Content__List"
  }, [_h('li', {
    staticClass: "Landscape__Content__List__Item"
  }, [(_vm.error.statusCode === 404) ? _h('router-link', {
    staticClass: "button button--green",
    attrs: {
      "to": "/"
    }
  }, ["\n              Homepage\n            "]) : _vm._e()])])])])]), " ", _h('nuxt-footer')])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "Guide"
  }, [_h('nuxt-bar', {
    attrs: {
      "visible": _vm.visible,
      "title": 'Version ' + _vm.$store.state.version
    },
    on: {
      "toggle": _vm.toggle
    }
  }), " ", _h('div', {
    staticClass: "Guide__Left",
    class: {
      'Guide__Left--hidden': !_vm.visible
    }
  }, [_h('div', {
    staticClass: "container"
  }, [_h('nuxt-affix', {
    attrs: {
      "list": _vm.$store.state.guideMenu,
      "menu": "/guide"
    }
  })])]), " ", _h('div', {
    staticClass: "container"
  }, [_h('div', {
    staticClass: "Guide__Right",
    class: {
      'Guide__Right--hidden': _vm.visible
    }
  }, [_h('div', {
    staticClass: "Content"
  }, [_h('h1', ["Release Notes"]), " ", _vm._l((_vm.releases), function(release) {
    return _h('div', [_h('h2', {
      attrs: {
        "id": release.name
      }
    }, [_vm._s(release.name)]), " ", _h('html-parser', {
      staticClass: "Release__Content",
      domProps: {
        "innerHTML": _vm._s(release.body)
      }
    })])
  })])])]), " ", _h('div', {
    staticClass: "Guide__Footer"
  }, [_h('nuxt-footer')])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "Guide"
  }, [_h('nuxt-bar', {
    attrs: {
      "visible": _vm.visible,
      "title": 'Version ' + _vm.$store.state.version
    },
    on: {
      "toggle": _vm.toggle
    }
  }), " ", _h('div', {
    staticClass: "Guide__Left",
    class: {
      'Guide__Left--hidden': !_vm.visible
    }
  }, [_h('div', {
    staticClass: "container"
  }, [_h('nuxt-affix', {
    attrs: {
      "list": _vm.$store.state.guideMenu,
      "menu": "/guide"
    }
  })])]), " ", _h('div', {
    staticClass: "container"
  }, [_h('div', {
    staticClass: "Guide__Right",
    class: {
      'Guide__Right--hidden': _vm.visible
    }
  }, [_h('html-parser', {
    attrs: {
      "content": _vm.body
    }
  }), " ", _h('p', {
    staticClass: "Guide__Contribute"
  }, ["Caught a mistake or want to contribute to the documentation?\n        ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": 'https://github.com/nuxt/docs/blob/master/guide/' + _vm.path + '.md',
      "target": "_blank"
    }
  }, ["\n          Edit this page on Github!\n        "])])])]), " ", _h('div', {
    staticClass: "Guide__Footer"
  }, [_h('nuxt-footer')])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', [_h('section', {
    staticClass: "Landscape"
  }, [_h('div', {
    staticClass: "Landscape__Content"
  }, [_h('div', {
    staticClass: "container content"
  }, [_h('img', {
    staticClass: "Landscape__Content__Image",
    attrs: {
      "src": __webpack_require__(40),
      "alt": "Logo nuxt"
    }
  }), " ", _vm._m(0), " ", _h('ul', {
    staticClass: "Landscape__Content__List"
  }, [_h('li', {
    staticClass: "Landscape__Content__List__Item"
  }, [_h('router-link', {
    staticClass: "button button--green",
    attrs: {
      "to": "/guide/installation"
    }
  }, ["\n              GET STARTED\n            "])]), " ", _vm._m(1)])])])]), " ", _h('nuxt-footer')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _h('h2', {
    staticClass: "Landscape__Content__Title"
  }, ["\n          A minimalistic framework ", _h('br'), "for server-rendered Vue.js applications\n        "])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _h('li', {
    staticClass: "Landscape__Content__List__Item"
  }, [_h('a', {
    staticClass: "button",
    attrs: {
      "href": "https://github.com/nuxt/nuxt.js",
      "target": "_blank"
    }
  }, ["\n              GITHUB\n            "])])
}]}
module.exports.render._withStripped = true

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "Examples"
  }, [_h('nuxt-bar', {
    attrs: {
      "visible": _vm.visible,
      "title": 'Version ' + _vm.$store.state.version
    },
    on: {
      "toggle": _vm.toggle
    }
  }), " ", _h('div', {
    staticClass: "Examples__Left",
    class: {
      'Examples__Left--hidden': !_vm.visible
    }
  }, [_h('div', {
    staticClass: "container"
  }, [_h('nuxt-affix', {
    attrs: {
      "list": _vm.$store.state.examplesMenu,
      "menu": "/examples"
    }
  })])]), " ", _h('div', {
    staticClass: "container"
  }, [_h('div', {
    staticClass: "Examples__Right",
    class: {
      'Examples__Right--hidden': _vm.visible
    }
  }, [_h('div', {
    staticClass: "Content"
  }, [_h('h1', [_vm._s(_vm.attributes.title)]), " ", _h('blockquote', [_h('p', [_vm._s(_vm.attributes.description)])]), " ", (_vm.attributes.youtube) ? _h('div', {
    staticClass: "video"
  }, [_h('iframe', {
    staticClass: "youtube",
    attrs: {
      "src": _vm.attributes.youtube,
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })]) : _vm._e(), " ", _h('h2', ["Source Code"]), " ", _h('nuxt-files-tree', {
    key: _vm.attributes.github,
    attrs: {
      "example": _vm.attributes.github
    }
  }), " ", _h('div', [(_vm.attributes.livedemo) ? _h('a', {
    staticClass: "button",
    attrs: {
      "href": _vm.attributes.livedemo,
      "target": "_blank"
    }
  }, [_vm._m(0), "\n            Live demo\n          "]) : _vm._e(), " ", (_vm.attributes.liveedit) ? _h('a', {
    staticClass: "button",
    attrs: {
      "href": _vm.attributes.liveedit,
      "target": "_blank"
    }
  }, [_vm._m(1), "\n            Live edit\n          "]) : _vm._e(), " ", _h('a', {
    staticClass: "button",
    attrs: {
      "href": _vm.downloadLink,
      "target": "_blank"
    }
  }, [_vm._m(2), "\n            Download\n          "])]), " ", _h('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.body)
    }
  })])])]), " ", _h('div', {
    staticClass: "Examples__Footer"
  }, [_h('nuxt-footer')])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _h('span', [_h('div', {
    staticClass: "icon eye"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _h('span', [_h('div', {
    staticClass: "icon edit"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _h('span', [_h('div', {
    staticClass: "icon download"
  })])
}]}
module.exports.render._withStripped = true

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('nuxt-container', [_h('navbar'), " ", _h('nuxt')])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "API"
  }, [_h('nuxt-bar', {
    attrs: {
      "visible": _vm.visible,
      "title": 'Version ' + _vm.$store.state.version
    },
    on: {
      "toggle": _vm.toggle
    }
  }), " ", _h('div', {
    staticClass: "API__Left",
    class: {
      'API__Left--hidden': !_vm.visible
    }
  }, [_h('div', {
    staticClass: "container"
  }, [_h('nuxt-affix', {
    attrs: {
      "list": _vm.$store.state.apiMenu,
      "menu": "/api"
    }
  })])]), " ", _h('div', {
    staticClass: "container"
  }, [_h('div', {
    staticClass: "API__Right",
    class: {
      'API__Right--hidden': _vm.visible
    }
  }, [_h('html-parser', {
    staticClass: "Content",
    domProps: {
      "innerHTML": _vm._s(_vm.body)
    }
  }), " ", _h('p', {
    staticClass: "API__Contribute"
  }, ["Caught a mistake or want to contribute to the documentation?\n        ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": 'https://github.com/nuxt/docs/blob/master/api/' + _vm.path + '.md',
      "target": "_blank"
    }
  }, ["\n          Edit this page on Github!\n        "])])])]), " ", _h('div', {
    staticClass: "API__Footer"
  }, [_h('nuxt-footer')])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('ul', {
    staticClass: "RecursiveList"
  }, [_vm._l((_vm.files), function(file) {
    return _h('li', {
      staticClass: "RecursiveList__Item"
    }, [_h('div', {
      class: _vm.linkClass(file),
      on: {
        "click": function($event) {
          _vm.changeFile(file)
        }
      }
    }, [_h('div', {
      staticClass: "Icon"
    }, [_h('div', {
      staticClass: "icon",
      class: {
        'folder': file.type === 'dir', 'file': file.type === 'file'
      }
    })]), "\n      " + _vm._s(file.name) + "\n    "]), " ", (file.type === 'dir') ? _h('recursive-list', {
      attrs: {
        "path": file.path
      },
      on: {
        "changeFile": _vm.changeFile
      }
    }) : _vm._e()])
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _h('footer', {
    staticClass: "Footer"
  }, [_h('div', {
    staticClass: "container"
  }, [_h('div', {
    staticClass: "Footer__Text"
  }, ["\n      Made by Chopin Brothers:\n      ", _h('a', {
    attrs: {
      "href": "https://github.com/Atinux",
      "target": "_blank"
    }
  }, ["@Atinux"]), "\n      and\n      ", _h('a', {
    attrs: {
      "href": "https://github.com/alexchopin",
      "target": "_blank"
    }
  }, ["@alexchopin"])])])])
}]}
module.exports.render._withStripped = true

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "Bar"
  }, [_h('div', {
    staticClass: "container"
  }, [_h('div', {
    staticClass: "Bar__Left"
  }, [_h('span', {
    staticClass: "Bar__Left__Text"
  }, [_vm._s(_vm.title)]), " ", _h('div', {
    staticClass: "Bar__Left__Toggler",
    on: {
      "click": _vm.toggle
    }
  }, [_h('div', {
    class: {
      'close icon': _vm.visible, 'indent icon': !_vm.visible
    }
  })])]), " ", _h('div', {
    staticClass: "Bar__Right"
  }, [_h('nuxt-search')])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "Search"
  }, [_h('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.q),
      expression: "q"
    }],
    staticClass: "Search__Input",
    attrs: {
      "type": "text",
      "name": "search",
      "id": "search",
      "placeholder": "Search"
    },
    domProps: {
      "value": _vm._s(_vm.q)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.q = $event.target.value
      }
    }
  }), " ", _h('label', {
    staticClass: "Search__Label",
    attrs: {
      "for": "search"
    },
    on: {
      "click": function($event) {
        _vm.q = ''
      }
    }
  }, [_h('div', {
    class: {
      'icon search': !_vm.q.length, 'icon remove': _vm.q.length
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', [_h('nuxt-loading', {
    ref: "loading"
  }), " ", _h('transition', {
    attrs: {
      "name": _vm.nuxt.transition.name,
      "mode": _vm.nuxt.transition.mode
    }
  }, [(!_vm.nuxt.err) ? _h('router-view') : _vm._e(), " ", (_vm.nuxt.err) ? _h('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('header', {
    staticClass: "Header"
  }, [_h('div', {
    staticClass: "container"
  }, [_h('router-link', {
    staticClass: "Header__Title",
    attrs: {
      "to": "/"
    }
  }, [_h('img', {
    staticClass: "Header__Title__Logo Header__Title__Logo--desktop",
    attrs: {
      "src": __webpack_require__(41),
      "alt": "Logo nuxt"
    }
  }), " ", _h('img', {
    staticClass: "Header__Title__Logo Header__Title__Logo--mobile",
    attrs: {
      "src": __webpack_require__(42),
      "alt": "Logo nuxt"
    }
  }), " ", _h('h1', {
    staticClass: "Header__Title__Text"
  }, ["\n        NUXT\n      "])]), " ", _h('div', {
    staticClass: "Header__Toggler",
    on: {
      "click": _vm.toggle
    }
  }, [_h('div', {
    class: {
      'icon menu': !_vm.visible, 'icon close': _vm.visible
    }
  })]), " ", _h('nav', {
    staticClass: "Header__Nav",
    class: {
      'Header__Nav--hidden': !_vm.visible
    }
  }, [_h('ul', {
    staticClass: "Header__Nav__List"
  }, [_h('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_h('router-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/guide"
    }
  }, ["\n            GUIDE\n          "])]), " ", _h('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_h('router-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/api"
    }
  }, ["\n            API\n          "])]), " ", _h('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_h('router-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/examples"
    }
  }, ["\n            EXAMPLES\n          "])]), " ", _vm._m(0)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _h('li', {
    staticClass: "Header__Nav__List__Item Header__Nav__List__Item--social"
  }, [_h('a', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "href": "https://github.com/nuxt/nuxt.js",
      "target": "_blank"
    }
  }, [_h('i', {
    staticClass: "icon-git"
  })]), " ", _h('a', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "href": "https://twitter.com/nuxt_js",
      "target": "_blank"
    }
  }, [_h('i', {
    staticClass: "icon-twit"
  })])])
}]}
module.exports.render._withStripped = true

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [_vm._t("default")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "Content",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "FilesTree clearfix"
  }, [_h('div', {
    staticClass: "FilesTree__Left",
    class: {
      'FilesTree__Left--hidden': _vm.hidden
    }
  }, [_h('div', {
    staticClass: "FilesTree__Left__Header"
  }, [_h('div', {
    staticClass: "Icon",
    on: {
      "click": function($event) {
        _vm.hidden = true
      }
    }
  }, [_h('div', {
    staticClass: "icon remove"
  })]), "\n      Example Files\n    "]), " ", _h('div', {
    staticClass: "FilesTree__Left__Body"
  }, [_h('recursive-list', {
    attrs: {
      "path": 'examples/' + _vm.example
    },
    on: {
      "changeFile": _vm.changeFile
    }
  })])]), " ", (_vm.currentFile) ? _h('div', {
    staticClass: "FilesTree__Right",
    class: {
      'FilesTree__Right--hidden': _vm.hidden
    }
  }, [_h('div', {
    staticClass: "FilesTree__Right__Header"
  }, [(_vm.hidden) ? _h('div', {
    staticClass: "Icon",
    on: {
      "click": function($event) {
        _vm.hidden = false
      }
    }
  }, [_h('div', {
    staticClass: "icon menu"
  })]) : _vm._e(), "\n      " + _vm._s(_vm.breadcrumb) + "\n    "]), " ", _h('div', {
    staticClass: "FilesTree__Right__Body"
  }, [(_vm.parseContent) ? [(_vm.isImage) ? _h('img', {
    staticClass: "FilesTree__Right__Body__Image",
    attrs: {
      "src": _vm.parseContent,
      "alt": "Image"
    }
  }) : _h('pre', {
    staticClass: "FilesTree__Right__Body__File"
  }, [_h('code', {
    domProps: {
      "innerHTML": _vm._s(_vm.parseContent)
    }
  })]), " "] : _h('div', {
    staticClass: "FilesTree__Right__Body__Wait"
  }, ["Please wait.."]), " "])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = require("vue-meta");

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = require("vuex");

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(12);
'use strict';

var debug = __webpack_require__(13)('nuxt:render');






var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* app */]);

// Fix issue from vue-router Abstract mode with base (used for server-side rendering)


// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  // Add store to the context
  context.store = __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */];
  // Nuxt object
  context.nuxt = { data: [], error: null, state: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* urlJoin */])('/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_3__index__["c" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_3__index__["c" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* getMatchedComponents */])(context.route);

  var promise = __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */]._actions && __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */]._actions.nuxtServerInit ? __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */].dispatch('nuxtServerInit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["omit"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* getContext */])(context), 'redirect', 'error')) : null;
  if (!(promise instanceof Promise)) promise = Promise.resolve();

  return promise.then(function () {
    // Call data & fetch hooks on components matched by the route.
    return Promise.all(Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* getContext */])(context);
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return Promise.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.', url: context.route.path });
      context.nuxt.state = __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */].state;
      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;
    // Add the state from the vuex store
    context.nuxt.state = __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */].state;
    return _app;
  }).catch(function (error) {
    context.nuxt.error = context.error(error);
    context.nuxt.state = __WEBPACK_IMPORTED_MODULE_3__index__["b" /* store */].state;
    return _app;
  });
};

/***/ }
/******/ ]);