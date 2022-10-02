"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.rotate {\\r\\n  transition: transform 2s ease-in-out;\\r\\n  transform: rotate(360deg);\\r\\n  color: red;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 90vw;\\r\\n  max-width: 500px;\\r\\n  height: max-content;\\r\\n  max-height: 90vh;\\r\\n  margin: auto;\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  box-shadow: 0.05rem 0.05rem 5px rgb(108, 108, 108);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.flex-row {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 1rem 1rem;\\r\\n  gap: 0.7rem;\\r\\n}\\r\\n\\r\\n.flex-column {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.to-do__add {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.to-do__input {\\r\\n  border: transparent;\\r\\n  outline-width: 0;\\r\\n  font-size: 1rem;\\r\\n  font-style: italic;\\r\\n  width: 65vw;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  overflow-y: scroll;\\r\\n  height: max-content;\\r\\n  max-height: 57vh;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: transparent;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  color: rgb(198, 198, 198);\\r\\n  transition: all 2s ease-in-out;\\r\\n}\\r\\n\\r\\n.inputError::placeholder {\\r\\n  color: rgb(241, 30, 30);\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.to-do__task .to-do__item-icons {\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.border-bottom {\\r\\n  border-bottom: 1px solid rgb(185, 185, 185);\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  visibility: hidden;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.4s ease-in-out;\\r\\n}\\r\\n\\r\\nfooter:hover {\\r\\n  background-color: rgb(199, 199, 199);\\r\\n}\\r\\n\\r\\nfooter:active {\\r\\n  font-size: 1.4rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_renderTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderTasks.js */ \"./src/modules/renderTasks.js\");\n/* harmony import */ var _modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearCompleted.js */ \"./src/modules/clearCompleted.js\");\n/* harmony import */ var _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearAll.js */ \"./src/modules/clearAll.js\");\n/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/init.js */ \"./src/modules/init.js\");\n\n\n\n\n\n\n\n(0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_renderTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_clearAll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_init_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks.js */ \"./src/modules/renderTasks.js\");\n/* harmony import */ var _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItemsArray.js */ \"./src/modules/toDoItemsArray.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./src/modules/init.js\");\n\n\n\n\nconst todoinputEl = document.querySelector('.to-do__input');\nconst input = document.querySelector('input');\nconst addForm = document.querySelector('.to-do__add');\n\nconst addTask = () => {\n  addForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const newTask = todoinputEl.value;\n    if (newTask) {\n      const newTodo = {\n        description: newTask,\n        completed: false,\n      };\n      _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(newTodo);\n      localStorage.setItem('toDoItemsArray', JSON.stringify(_toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n      (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      (0,_init_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      todoinputEl.value = '';\n    } else {\n      input.classList.add('inputError');\n      setTimeout(() => {\n        input.classList.remove('inputError');\n      }, 1000);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/checked.js":
/*!********************************!*\
  !*** ./src/modules/checked.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItemsArray.js */ \"./src/modules/toDoItemsArray.js\");\n\n\nconst checkedBoxEls = document.getElementsByClassName('checkbox');\n\nconst checked = () => {\n  const checkedBoxElsArray = [...checkedBoxEls];\n  checkedBoxElsArray.forEach((item) => {\n    item.addEventListener('click', () => {\n      const itmId = item.parentNode.parentNode.id;\n      const { completed } = _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][itmId];\n\n      if (completed) {\n        _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][itmId].completed = false;\n      } else {\n        _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][itmId].completed = true;\n      }\n\n      localStorage.setItem('toDoItemsArray', JSON.stringify(_toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checked);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/checked.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItemsArray.js */ \"./src/modules/toDoItemsArray.js\");\n/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks.js */ \"./src/modules/renderTasks.js\");\n\n\n\nconst clearAllEl = document.querySelector('.clearAll');\n\nconst clearAll = () => {\n  clearAllEl.addEventListener('click', () => {\n    clearAllEl.classList.add('rotate');\n    _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(0);\n    localStorage.setItem('toDoItemsArray', JSON.stringify(_toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    setTimeout(() => {\n      clearAllEl.classList.remove('rotate');\n    }, 2100);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAll);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/clearCompleted.js":
/*!***************************************!*\
  !*** ./src/modules/clearCompleted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks.js */ \"./src/modules/renderTasks.js\");\n/* harmony import */ var _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItemsArray.js */ \"./src/modules/toDoItemsArray.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./src/modules/init.js\");\n\n\n\n\nconst footer = document.querySelector('footer');\n\nconst clearCompleted = () => {\n  footer.addEventListener('click', () => {\n    const nonCompletedTasks = _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((item) => item.completed === false);\n\n    _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(0, _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length, ...nonCompletedTasks);\n\n    localStorage.setItem('toDoItemsArray', JSON.stringify(_toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n    (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_init_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/clearCompleted.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks.js */ \"./src/modules/renderTasks.js\");\n/* harmony import */ var _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItemsArray.js */ \"./src/modules/toDoItemsArray.js\");\n\n\n\nconst editTaskBtnEl = document.getElementsByClassName('editTaskBtn');\nconst editTaskEl = document.getElementsByClassName('to-do__edit');\nconst toDoTask = document.getElementsByClassName('to-do__task');\n\nconst init = () => {\n  const editTask = () => {\n    const editTaskBtns = [...editTaskBtnEl];\n    editTaskBtns.forEach((item) => {\n      item.addEventListener('click', () => {\n        const taskID = item.id;\n        const editTaskEls = [...editTaskEl];\n        const currentTask = editTaskEls[taskID];\n        const currentTaskEdit = currentTask.childNodes[1];\n        toDoTask[taskID].classList.add('hide');\n        currentTask.classList.remove('hide');\n        currentTaskEdit.value = _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][taskID].description;\n        currentTask.childNodes[3].addEventListener('click', (e) => {\n          e.preventDefault();\n          const editedTask = currentTask.childNodes[1].value;\n          if (editedTask) {\n            _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][taskID].description = editedTask;\n            localStorage.setItem('toDoItemsArray', JSON.stringify(_toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n            (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            init();\n          } else {\n            currentTaskEdit.classList.add('inputError');\n            setTimeout(() => {\n              currentTaskEdit.classList.remove('inputError');\n            }, 1000);\n          }\n        });\n      });\n    });\n  };\n\n  const removeTask = () => {\n    const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];\n    removeBtnsEl.forEach((item) => {\n      item.addEventListener('click', (e) => {\n        _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(e.target.id, 1);\n        localStorage.setItem('toDoItemsArray', JSON.stringify(_toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n        (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        init();\n      });\n    });\n  };\n\n  removeTask();\n  editTask();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/init.js?");

/***/ }),

/***/ "./src/modules/renderTasks.js":
/*!************************************!*\
  !*** ./src/modules/renderTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItemsArray.js */ \"./src/modules/toDoItemsArray.js\");\n/* harmony import */ var _checked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checked.js */ \"./src/modules/checked.js\");\n\n\n\nconst toDoItemsEl = document.querySelector('.to-do__items');\n\nconst renderToDoItems = () => {\n  let markup = '';\n\n  _toDoItemsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((elem, index) => {\n    markup += `<section class=\"to-do__item  border-bottom\" id=${index}>\n    <form class=\"to-do__edit hide flex-row border-bottom\">\n    <input type=\"text\" class=\"to-do__input\" placeholder=\"Input a task or use delete button...\"/>\n    <button>\n    <span class=\"material-symbols-outlined to-do__addTask\">add_task</span>\n    </button>\n    </form>\n    <div class=\"flex-row to-do__task\">\n    <input class='checkbox' type=\"checkbox\" ${elem.completed && 'checked'}/>\n    <p class='description'>${elem.description}</p>\n    <span class=\"to-do__item-icons\">\n    <span class=\"material-symbols-outlined dltTaskBtn\" id=${index}>delete</span>\n    <span class=\"material-symbols-outlined editTaskBtn\" id=${index}>edit_note</span>\n    </span>\n    </div>\n  </section>`;\n  });\n\n  toDoItemsEl.innerHTML = markup;\n  (0,_checked_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToDoItems);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/renderTasks.js?");

/***/ }),

/***/ "./src/modules/toDoItemsArray.js":
/*!***************************************!*\
  !*** ./src/modules/toDoItemsArray.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toDoItemsArray = JSON.parse(localStorage.getItem('toDoItemsArray')) || [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoItemsArray);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/toDoItemsArray.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);