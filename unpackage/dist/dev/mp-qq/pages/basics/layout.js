(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/basics/layout"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!*****************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/main.js?{"page":"pages%2Fbasics%2Flayout"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _layout = _interopRequireDefault(__webpack_require__(/*! ./pages/basics/layout.vue */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_layout.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 18 */
/*!**********************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=5f580ccb& */ 19);
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ 21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.vue?vue&type=style&index=0&lang=css& */ 23);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/basics/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/*!*****************************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue?vue&type=template&id=5f580ccb& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./layout.vue?vue&type=template&id=5f580ccb& */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_template_id_5f580ccb___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue?vue&type=template&id=5f580ccb& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!***********************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./layout.vue?vue&type=script&lang=js& */ 22);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      CustomBar: this.CustomBar,
      TabCur: 0,
      avatar: ['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
      tabNav: ['Flex布局', 'Grid布局', '辅助布局'] };

  },
  methods: {
    tabSelect: function tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    } } };exports.default = _default;

/***/ }),
/* 23 */
/*!*******************************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./layout.vue?vue&type=style&index=0&lang=css& */ 24);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/notion/Documents/HBuilderProjects/soul-soup/pages/basics/layout.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[17,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvYmFzaWNzL2xheW91dC52dWU/NTc1NCIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvYmFzaWNzL2xheW91dC52dWU/MDdmYiIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvYmFzaWNzL2xheW91dC52dWU/M2IwZSIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvYmFzaWNzL2xheW91dC52dWU/NmQ5YSIsInVuaS1hcHA6Ly8vcGFnZXMvYmFzaWNzL2xheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ub3Rpb24vRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvc291bC1zb3VwL3BhZ2VzL2Jhc2ljcy9sYXlvdXQudnVlPzlmNzgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ub3Rpb24vRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvc291bC1zb3VwL3BhZ2VzL2Jhc2ljcy9sYXlvdXQudnVlPzFjNjAiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSwrRjtBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDtBQUNhOzs7QUFHbEU7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFvMEIsQ0FBZ0Isb3lCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0x4MUI7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLGVBRkE7QUFHQSw4UkFIQTtBQUlBLDBDQUpBOztBQU1BLEdBUkE7QUFTQTtBQUNBLGFBREEscUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkEsRUFUQSxFOzs7Ozs7Ozs7OztBQ3hMQTtBQUFBO0FBQUE7QUFBQTtBQUFpckMsQ0FBZ0IsaW1DQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0Fyc0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9iYXNpY3MvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2Jhc2ljcy9sYXlvdXQudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjU4MGNjYiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2Jhc2ljcy9sYXlvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmNTgwY2NiJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHQ8Y3UtY3VzdG9tIGJnQ29sb3I9XCJiZy1ncmFkdWFsLWJsdWVcIiA6aXNCYWNrPVwidHJ1ZVwiPjxibG9jayBzbG90PVwiYmFja1RleHRcIj7ov5Tlm548L2Jsb2NrPjxibG9jayBzbG90PVwiY29udGVudFwiPuW4g+WxgDwvYmxvY2s+PC9jdS1jdXN0b20+XG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC14IGNsYXNzPVwiYmctd2hpdGUgbmF2IHRleHQtY2VudGVyIGZpeGVkXCIgOnN0eWxlPVwiW3t0b3A6Q3VzdG9tQmFyICsgJ3B4J31dXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiA6Y2xhc3M9XCJpbmRleD09VGFiQ3VyPyd0ZXh0LWJsdWUgY3VyJzonJ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRhYk5hdlwiIDprZXk9XCJpbmRleFwiIEB0YXA9XCJ0YWJTZWxlY3RcIlxuXHRcdFx0IDpkYXRhLWlkPVwiaW5kZXhcIj5cblx0XHRcdFx0e3t0YWJOYXZbaW5kZXhdfX1cblx0XHRcdDwvdmlldz5cblx0XHQ8L3Njcm9sbC12aWV3PlxuXHRcdDxibG9jayB2LWlmPVwiVGFiQ3VyPT0wXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSBzb2xpZC1ib3R0b20gbWFyZ2luLXRvcFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLXRpdGxlIHRleHQtYmx1ZVwiPjwvdGV4dD7lm7rlrprlsLrlr7hcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwYWRkaW5nIGJnLXdoaXRlXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXdyYXBcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLXhzIGJnLWdyZXkgbWFyZ2luLXhzIHBhZGRpbmctc20gcmFkaXVzXCI+eHMoMjAlKTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmXCI+PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtc20gYmctZ3JleSBtYXJnaW4teHMgcGFkZGluZy1zbSByYWRpdXNcIj5zbSg0MCUpPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGZcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZiBiZy1ncmV5IG1hcmdpbi14cyBwYWRkaW5nLXNtIHJhZGl1c1wiPnN1Yig1MCUpPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtbGcgYmctZ3JleSBtYXJnaW4teHMgcGFkZGluZy1zbSByYWRpdXNcIj5sZyg2MCUpPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMteGwgYmctZ3JleSBtYXJnaW4teHMgcGFkZGluZy1zbSByYWRpdXNcIj54bCg4MCUpPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSAgbWFyZ2luLXRvcCBzb2xpZC1ib3R0b21cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi10aXRsZSB0ZXh0LWJsdWVcIj48L3RleHQ+5q+U5L6L5biD5bGAXG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwicGFkZGluZyBiZy13aGl0ZVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViIGJnLWdyZXkgcGFkZGluZy1zbSBtYXJnaW4teHMgcmFkaXVzXCI+MTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViIGJnLWdyZXkgcGFkZGluZy1zbSBtYXJnaW4teHMgcmFkaXVzXCI+MTwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggIHAteHMgbWFyZ2luLWJvdHRvbS1zbSBtYi1zbVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC1zdWIgYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj4xPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC10d2ljZSBiZy1ncmV5IHBhZGRpbmctc20gbWFyZ2luLXhzIHJhZGl1c1wiPjI8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4ICBwLXhzIG1hcmdpbi1ib3R0b20tc20gbWItc21cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViIGJnLWdyZXkgcGFkZGluZy1zbSBtYXJnaW4teHMgcmFkaXVzXCI+MTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtdHdpY2UgYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj4yPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC10cmVibGUgYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj4zPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSAgbWFyZ2luLXRvcCBzb2xpZC1ib3R0b21cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi10aXRsZSB0ZXh0LWJsdWVcIj48L3RleHQ+5rC05bmz5a+56b2QKGp1c3RpZnkpXG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiYmctd2hpdGVcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IHNvbGlkLWJvdHRvbSBwYWRkaW5nIGp1c3RpZnktc3RhcnRcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWdyZXkgcGFkZGluZy1zbSBtYXJnaW4teHMgcmFkaXVzXCI+c3RhcnQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1ncmV5IHBhZGRpbmctc20gbWFyZ2luLXhzIHJhZGl1c1wiPnN0YXJ0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBzb2xpZC1ib3R0b20gcGFkZGluZyBqdXN0aWZ5LWVuZFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5lbmQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1ncmV5IHBhZGRpbmctc20gbWFyZ2luLXhzIHJhZGl1c1wiPmVuZDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggc29saWQtYm90dG9tIHBhZGRpbmcganVzdGlmeS1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWdyZXkgcGFkZGluZy1zbSBtYXJnaW4teHMgcmFkaXVzXCI+Y2VudGVyPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5jZW50ZXI8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IHNvbGlkLWJvdHRvbSBwYWRkaW5nIGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5iZXR3ZWVuPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5iZXR3ZWVuPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBzb2xpZC1ib3R0b20gcGFkZGluZyBqdXN0aWZ5LWFyb3VuZFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5hcm91bmQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1ncmV5IHBhZGRpbmctc20gbWFyZ2luLXhzIHJhZGl1c1wiPmFyb3VuZDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1iYXIgYmctd2hpdGUgIG1hcmdpbi10b3Agc29saWQtYm90dG9tXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1ibHVlXCI+PC90ZXh0PuWeguebtOWvuem9kChhbGlnbilcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZy13aGl0ZVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggc29saWQtYm90dG9tIHBhZGRpbmcgYWxpZ24tc3RhcnRcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWdyZXkgcGFkZGluZy1sZyBtYXJnaW4teHMgcmFkaXVzXCI+Q29sb3JVaTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWdyZXkgcGFkZGluZy1zbSBtYXJnaW4teHMgcmFkaXVzXCI+c3RhcnQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IHNvbGlkLWJvdHRvbSBwYWRkaW5nIGFsaWduLWVuZFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLWxnIG1hcmdpbi14cyByYWRpdXNcIj5Db2xvclVpPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5lbmQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IHNvbGlkLWJvdHRvbSBwYWRkaW5nIGFsaWduLWNlbnRlclwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLWxnIG1hcmdpbi14cyByYWRpdXNcIj5Db2xvclVpPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBwYWRkaW5nLXNtIG1hcmdpbi14cyByYWRpdXNcIj5jZW50ZXI8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L2Jsb2NrPlxuXHRcdDxibG9jayB2LWlmPVwiVGFiQ3VyPT0xXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSAgbWFyZ2luLXRvcCBzb2xpZC1ib3R0b21cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi10aXRsZSB0ZXh0LWJsdWVcIj48L3RleHQ+562J5YiG5YiXXG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj48L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImJnLXdoaXRlIHBhZGRpbmdcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJncmlkIG1hcmdpbi1ib3R0b20gdGV4dC1jZW50ZXJcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiA1XCIgOmtleT1cImluZGV4XCIgOmNsYXNzPVwiJ2NvbC0nICsgKGluZGV4KzEpXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYWRkaW5nXCIgOmNsYXNzPVwiaW5kZXhzJTI9PTA/J2JnLWN5YW4nOidiZy1ibHVlJ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXhzKSBpbiAoaW5kZXgrMSkqMlwiIDprZXk9XCJpbmRleHNcIj57e2luZGV4cysxfX08L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlICBtYXJnaW4tdG9wIHNvbGlkLWJvdHRvbVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLXRpdGxlIHRleHQtYmx1ZVwiPjwvdGV4dD7nrYnpq5hcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPjwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiYmctd2hpdGUgcGFkZGluZ1wiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImdyaWQgY29sLTQgZ3JpZC1zcXVhcmVcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWltZ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGF2YXRhclwiIDprZXk9XCJpbmRleFwiIDpzdHlsZT1cIlt7IGJhY2tncm91bmRJbWFnZTondXJsKCcgKyBhdmF0YXJbaW5kZXhdICsgJyknIH1dXCI+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC9ibG9jaz5cblx0XHQ8YmxvY2sgdi1pZj1cIlRhYkN1cj09MlwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1iYXIgYmctd2hpdGUgbWFyZ2luLXRvcCBzb2xpZC1ib3R0b21cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi10aXRsZSB0ZXh0LWJsdWVcIj48L3RleHQ+5rWu5YqoXG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiYmctd2hpdGUgcGFkZGluZ1wiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIiBjZiBwYWRkaW5nLXNtXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1ncmV5IHJhZGl1cyBmbCBwYWRkaW5nLXNtXCI+Q29sb3JVaSBmbDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWdyZXkgcmFkaXVzIGZyIHBhZGRpbmctc21cIj5Db2xvclVpIGZyPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSAgc29saWQtYm90dG9tIG1hcmdpbi10b3Agc29saWQtYm90dG9tXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1ibHVlXCI+PC90ZXh0PuWGheWklui+uei3nVxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImJnLXdoaXRlXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFkZGluZyBiZy1ncmF5XCI+e3NpemV955qE5bC65a+45pyJeHMvc20vZGYvbGcveGw8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGFkZGluZyBzb2xpZC10b3BcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmIHBhZGRpbmctYm90dG9tLXhzXCI+5aSW6L656LedPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGYgcGFkZGluZy1ib3R0b20teHNcIj7lhoXovrnot508L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZlwiPi5tYXJnaW4te3NpemV9PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGZcIj4ucGFkZGluZy17c2l6ZX08L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBwYWRkaW5nIHNvbGlkLXRvcFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGYgcGFkZGluZy1ib3R0b20teHNcIj7msLTlubPmlrnlkJHlpJbovrnot508L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZiBwYWRkaW5nLWJvdHRvbS14c1wiPuawtOW5s+aWueWQkeWGhei+uei3nTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmXCI+Lm1hcmdpbi1sci17c2l6ZX08L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZlwiPi5wYWRkaW5nLWxyLXtzaXplfTwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggZmxleC13cmFwIHBhZGRpbmcgc29saWQtdG9wXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZiBwYWRkaW5nLWJvdHRvbS14c1wiPuWeguebtOaWueWQkeWklui+uei3nTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmIHBhZGRpbmctYm90dG9tLXhzXCI+5Z6C55u05pa55ZCR5YaF6L656LedPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGZcIj4ubWFyZ2luLXRiLXtzaXplfTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmXCI+LnBhZGRpbmctdGIte3NpemV9PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGFkZGluZyBzb2xpZC10b3BcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmIHBhZGRpbmctYm90dG9tLXhzXCI+5LiK5aSW6L656LedPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGYgcGFkZGluZy1ib3R0b20teHNcIj7kuIrlhoXovrnot508L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZlwiPi5tYXJnaW4tdG9wLXtzaXplfTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmXCI+LnBhZGRpbmctdG9wLXtzaXplfTwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggZmxleC13cmFwIHBhZGRpbmcgc29saWQtdG9wXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZiBwYWRkaW5nLWJvdHRvbS14c1wiPuWPs+Wklui+uei3nTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmIHBhZGRpbmctYm90dG9tLXhzXCI+5Y+z5YaF6L656LedPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGZcIj4ubWFyZ2luLXJpZ2h0LXtzaXplfTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmXCI+LnBhZGRpbmctcmlnaHQte3NpemV9PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGFkZGluZyBzb2xpZC10b3BcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmIHBhZGRpbmctYm90dG9tLXhzXCI+5LiL5aSW6L656LedPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGYgcGFkZGluZy1ib3R0b20teHNcIj7kuIvlhoXovrnot508L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZlwiPm1hcmdpbi1ib3R0b20te3NpemV9PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGZcIj4ucGFkZGluZy1ib3R0b20te3NpemV9PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGFkZGluZyBzb2xpZC10b3BcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhc2lzLWRmIHBhZGRpbmctYm90dG9tLXhzXCI+5bem5aSW6L656LedPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzaXMtZGYgcGFkZGluZy1ib3R0b20teHNcIj7lt6blhoXovrnot508L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZlwiPi5tYXJnaW4tbGVmdC17c2l6ZX08L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXNpcy1kZlwiPi5wYWRkaW5nLWxlZnQte3NpemV9PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC9ibG9jaz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRDdXN0b21CYXI6IHRoaXMuQ3VzdG9tQmFyLFxuXHRcdFx0XHRUYWJDdXI6IDAsXG5cdFx0XHRcdGF2YXRhcjpbJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcxMDAwMS5qcGcnLCdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnODEwMDUuanBnJywnaHR0cHM6Ly9vc3N3ZWItaW1nLnFxLmNvbS9pbWFnZXMvbG9sL3dlYjIwMTMxMC9za2luL2JpZzI1MDAyLmpwZycsJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc5OTAwOC5qcGcnXSxcblx0XHRcdFx0dGFiTmF2OiBbJ0ZsZXjluIPlsYAnLCAnR3JpZOW4g+WxgCcsICfovoXliqnluIPlsYAnXVxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHRhYlNlbGVjdChlKSB7XG5cdFx0XHRcdHRoaXMuVGFiQ3VyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsTGVmdCA9IChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZCAtIDEpICogNjBcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdHBhZ2Uge1xuXHRcdHBhZGRpbmctdG9wOiA0NXB4O1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMDM1MzkyNjM1MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9