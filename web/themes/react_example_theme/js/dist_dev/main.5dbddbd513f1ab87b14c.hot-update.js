"use strict";
self["webpackHotUpdatereact_example_theme"]("main",{

/***/ "./js/src/components/NodeListOnly.jsx":
/*!********************************************!*\
  !*** ./js/src/components/NodeListOnly.jsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var NodeItem = function NodeItem() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/node/".concat(drupal_internal__nid)
  }, title));
};

var NoData = function NoData() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "No articles found");
};

var NodeListOnly = function NodeListOnly() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var API_ROOT = '/drupal-try-again/web/jsonapi/';
    var url = "".concat(API_ROOT, "node/article?fields[node--article]=id,drupal_internal__nid,title,body&sort=-created&page[limit]=10");
    var headers = new Headers({
      Accept: 'application/vnd.api+json'
    });
    fetch(url, {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setContent(data.data);
    })["catch"](function (err) {
      return console.log('There was an error accessing the API', err);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Site content"), content ? content.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NodeItem, _extends({
      key: item.id
    }, item.attributes));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NoData, null));
};

__signature__(NodeListOnly, "useState{[content, setContent](false)}\nuseEffect{}");

var _default = NodeListOnly;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NodeItem, "NodeItem", "C:\\xampp\\htdocs\\drupal-try-again\\web\\themes\\react_example_theme\\js\\src\\components\\NodeListOnly.jsx");
  reactHotLoader.register(NoData, "NoData", "C:\\xampp\\htdocs\\drupal-try-again\\web\\themes\\react_example_theme\\js\\src\\components\\NodeListOnly.jsx");
  reactHotLoader.register(NodeListOnly, "NodeListOnly", "C:\\xampp\\htdocs\\drupal-try-again\\web\\themes\\react_example_theme\\js\\src\\components\\NodeListOnly.jsx");
  reactHotLoader.register(_default, "default", "C:\\xampp\\htdocs\\drupal-try-again\\web\\themes\\react_example_theme\\js\\src\\components\\NodeListOnly.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("07d80df396906f4a2dd2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5dbddbd513f1ab87b14c.hot-update.js.map