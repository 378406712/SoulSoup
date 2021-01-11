(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/list"],{

/***/ 103:
/*!******************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/main.js?{"page":"pages%2Fcomponent%2Flist"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/component/list.vue */ 104));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 104:
/*!***********************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=3174c329& */ 105);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 107);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ 109);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/component/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 105:
/*!******************************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue?vue&type=template&id=3174c329& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=3174c329& */ 106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_3174c329___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 106:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue?vue&type=template&id=3174c329& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 107:
/*!************************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 108);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 108:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      cuIconList: [{
        cuIcon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: 'VR' },
      {
        cuIcon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '录像' },
      {
        cuIcon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '图像' },
      {
        cuIcon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '通知' },
      {
        cuIcon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '排行榜' },
      {
        cuIcon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '皮肤' },
      {
        cuIcon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '发现' },
      {
        cuIcon: 'questionfill',
        color: 'mauve',
        badge: 0,
        name: '帮助' },
      {
        cuIcon: 'commandfill',
        color: 'purple',
        badge: 0,
        name: '问答' },
      {
        cuIcon: 'brandfill',
        color: 'mauve',
        badge: 0,
        name: '版权' }],

      modalName: null,
      gridCol: 3,
      gridBorder: false,
      menuBorder: false,
      menuArrow: false,
      menuCard: false,
      skin: false,
      listTouchStart: 0,
      listTouchDirection: null };

  },
  methods: {
    showModal: function showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    Gridchange: function Gridchange(e) {
      this.gridCol = e.detail.value;
    },
    Gridswitch: function Gridswitch(e) {
      this.gridBorder = e.detail.value;
    },
    MenuBorder: function MenuBorder(e) {
      this.menuBorder = e.detail.value;
    },
    MenuArrow: function MenuArrow(e) {
      this.menuArrow = e.detail.value;
    },
    MenuCard: function MenuCard(e) {
      this.menuCard = e.detail.value;
    },
    SwitchSex: function SwitchSex(e) {
      this.skin = e.detail.value;
    },

    // ListTouch触摸开始
    ListTouchStart: function ListTouchStart(e) {
      this.listTouchStart = e.touches[0].pageX;
    },

    // ListTouch计算方向
    ListTouchMove: function ListTouchMove(e) {
      this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
    },

    // ListTouch计算滚动
    ListTouchEnd: function ListTouchEnd(e) {
      if (this.listTouchDirection == 'left') {
        this.modalName = e.currentTarget.dataset.target;
      } else {
        this.modalName = null;
      }
      this.listTouchDirection = null;
    } } };exports.default = _default;

/***/ }),

/***/ 109:
/*!********************************************************************************************************************!*\
  !*** /Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=css& */ 110);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 110:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/notion/Documents/HBuilderProjects/soul-soup/pages/component/list.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[103,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvY29tcG9uZW50L2xpc3QudnVlP2Q4NTEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ub3Rpb24vRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvc291bC1zb3VwL3BhZ2VzL2NvbXBvbmVudC9saXN0LnZ1ZT84NzkyIiwid2VicGFjazovLy8vVXNlcnMvbm90aW9uL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL3NvdWwtc291cC9wYWdlcy9jb21wb25lbnQvbGlzdC52dWU/YWM0NyIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvY29tcG9uZW50L2xpc3QudnVlP2JmMjgiLCJ1bmktYXBwOi8vL3BhZ2VzL2NvbXBvbmVudC9saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL25vdGlvbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9zb3VsLXNvdXAvcGFnZXMvY29tcG9uZW50L2xpc3QudnVlPzhiNzkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ub3Rpb24vRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvc291bC1zb3VwL3BhZ2VzL2NvbXBvbmVudC9saXN0LnZ1ZT8wYTIzIl0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSwrRjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQ2pIO0FBQ3dEO0FBQ0w7QUFDYTs7O0FBR2hFO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBazBCLENBQWdCLGt5QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzZSdDFCO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLG9CQUZBO0FBR0Esa0JBSEE7QUFJQSxrQkFKQTtBQUtBO0FBQ0EsNEJBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsa0JBSkEsRUFMQTtBQVVBO0FBQ0EseUJBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsa0JBSkEsRUFWQTtBQWVBO0FBQ0EsNEJBREE7QUFFQSxzQkFGQTtBQUdBLGlCQUhBO0FBSUEsa0JBSkEsRUFmQTtBQW9CQTtBQUNBLDZCQURBO0FBRUEscUJBRkE7QUFHQSxnQkFIQTtBQUlBLG1CQUpBLEVBcEJBO0FBeUJBO0FBQ0EsNkJBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsa0JBSkEsRUF6QkE7QUE4QkE7QUFDQSw4QkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSxrQkFKQSxFQTlCQTtBQW1DQTtBQUNBLDhCQURBO0FBRUEsc0JBRkE7QUFHQSxnQkFIQTtBQUlBLGtCQUpBLEVBbkNBO0FBd0NBO0FBQ0EsNkJBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsa0JBSkEsRUF4Q0E7QUE2Q0E7QUFDQSwyQkFEQTtBQUVBLHNCQUZBO0FBR0EsZ0JBSEE7QUFJQSxrQkFKQSxFQTdDQSxDQURBOztBQW9EQSxxQkFwREE7QUFxREEsZ0JBckRBO0FBc0RBLHVCQXREQTtBQXVEQSx1QkF2REE7QUF3REEsc0JBeERBO0FBeURBLHFCQXpEQTtBQTBEQSxpQkExREE7QUEyREEsdUJBM0RBO0FBNERBLDhCQTVEQTs7QUE4REEsR0FoRUE7QUFpRUE7QUFDQSxhQURBLHFCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGFBSkEscUJBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsY0FQQSxzQkFPQSxDQVBBLEVBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxjQVZBLHNCQVVBLENBVkEsRUFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLGNBYkEsc0JBYUEsQ0FiQSxFQWFBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBLGFBaEJBLHFCQWdCQSxDQWhCQSxFQWdCQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkEsWUFuQkEsb0JBbUJBLENBbkJBLEVBbUJBO0FBQ0E7QUFDQSxLQXJCQTtBQXNCQSxhQXRCQSxxQkFzQkEsQ0F0QkEsRUFzQkE7QUFDQTtBQUNBLEtBeEJBOztBQTBCQTtBQUNBLGtCQTNCQSwwQkEyQkEsQ0EzQkEsRUEyQkE7QUFDQTtBQUNBLEtBN0JBOztBQStCQTtBQUNBLGlCQWhDQSx5QkFnQ0EsQ0FoQ0EsRUFnQ0E7QUFDQTtBQUNBLEtBbENBOztBQW9DQTtBQUNBLGdCQXJDQSx3QkFxQ0EsQ0FyQ0EsRUFxQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1Q0EsRUFqRUEsRTs7Ozs7Ozs7Ozs7O0FDN1JBO0FBQUE7QUFBQTtBQUFBO0FBQStxQyxDQUFnQiwrbENBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0Fuc0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9jb21wb25lbnQvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9jb21wb25lbnQvbGlzdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTc0YzMyOSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbXBvbmVudC9saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzE3NGMzMjkmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHNjcm9sbC12aWV3IDpzY3JvbGwteT1cIm1vZGFsTmFtZT09bnVsbFwiIGNsYXNzPVwicGFnZVwiIDpjbGFzcz1cIm1vZGFsTmFtZSE9bnVsbD8nc2hvdyc6JydcIj5cblx0XHRcdDxjdS1jdXN0b20gYmdDb2xvcj1cImJnLWdyYWR1YWwtcGlua1wiIDppc0JhY2s9XCJ0cnVlXCI+XG5cdFx0XHRcdDxibG9jayBzbG90PVwiYmFja1RleHRcIj7ov5Tlm548L2Jsb2NrPlxuXHRcdFx0XHQ8YmxvY2sgc2xvdD1cImNvbnRlbnRcIj7liJfooag8L2Jsb2NrPlxuXHRcdFx0PC9jdS1jdXN0b20+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSBzb2xpZC1ib3R0b20gbWFyZ2luLXRvcFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLXRpdGxlIHRleHQtb3JhbmdlIFwiPjwvdGV4dD4g5a6r5qC85YiX6KGoXG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3UtYnRuIGJnLWdyZWVuIHNoYWRvd1wiIEB0YXA9XCJzaG93TW9kYWxcIiBkYXRhLXRhcmdldD1cImdyaWRNb2RhbFwiPuiuvue9rjwvYnV0dG9uPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LW1vZGFsXCIgOmNsYXNzPVwibW9kYWxOYW1lPT0nZ3JpZE1vZGFsJz8nc2hvdyc6JydcIiBAdGFwPVwiaGlkZU1vZGFsXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtZGlhbG9nXCIgQHRhcC5zdG9wPlxuXHRcdFx0XHRcdDxyYWRpby1ncm91cCBjbGFzcz1cImJsb2NrXCIgQGNoYW5nZT1cIkdyaWRjaGFuZ2VcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtbGlzdCBtZW51IHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiAzXCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGZsZXgtc3ViXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViXCI+e3tpbmRleCArM319IOWIlzwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyYWRpbyBjbGFzcz1cInJvdW5kXCIgOnZhbHVlPVwiKGluZGV4ICsgMykgKyAnJ1wiIDpjbGFzcz1cImdyaWRDb2w9PWluZGV4KzM/J2NoZWNrZWQnOicnXCIgOmNoZWNrZWQ9XCJncmlkQ29sPT1pbmRleCszXCI+PC9yYWRpbz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC9yYWRpby1ncm91cD5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudSB0ZXh0LWxlZnQgc29saWQtdG9wXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7ovrnmoYY8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3dpdGNoIEBjaGFuZ2U9XCJHcmlkc3dpdGNoXCIgOmNsYXNzPVwiZ3JpZEJvcmRlcj8nY2hlY2tlZCc6JydcIiA6Y2hlY2tlZD1cImdyaWRCb3JkZXI/dHJ1ZTpmYWxzZVwiPjwvc3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgZ3JpZFwiIDpjbGFzcz1cIlsnY29sLScgKyBncmlkQ29sLGdyaWRCb3JkZXI/Jyc6J25vLWJvcmRlciddXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGN1SWNvbkxpc3RcIiA6a2V5PVwiaW5kZXhcIiB2LWlmPVwiaW5kZXg8Z3JpZENvbCoyXCI+XG5cdFx0XHRcdFx0PHZpZXcgOmNsYXNzPVwiWydjdUljb24tJyArIGl0ZW0uY3VJY29uLCd0ZXh0LScgKyBpdGVtLmNvbG9yXVwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgYmFkZ2VcIiB2LWlmPVwiaXRlbS5iYWRnZSE9MFwiPlxuXHRcdFx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cIml0ZW0uYmFkZ2UhPTFcIj57e2l0ZW0uYmFkZ2U+OTk/Jzk5Kyc6aXRlbS5iYWRnZX19PC9ibG9jaz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHRleHQ+e3tpdGVtLm5hbWV9fTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXG5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlIHNvbGlkLWJvdHRvbSBtYXJnaW4tdG9wXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1vcmFuZ2VcIj48L3RleHQ+IOiPnOWNleWIl+ihqFxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ncmVlbiBzaGFkb3dcIiBAdGFwPVwic2hvd01vZGFsXCIgZGF0YS10YXJnZXQ9XCJtZW51TW9kYWxcIj7orr7nva48L2J1dHRvbj5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1tb2RhbFwiIDpjbGFzcz1cIm1vZGFsTmFtZT09J21lbnVNb2RhbCc/J3Nob3cnOicnXCIgQHRhcD1cImhpZGVNb2RhbFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWRpYWxvZ1wiIEB0YXAuc3RvcD5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudSB0ZXh0LWxlZnQgc29saWQtdG9wXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7nn63ovrnmoYY8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3dpdGNoIEBjaGFuZ2U9XCJNZW51Qm9yZGVyXCIgOmNsYXNzPVwibWVudUJvcmRlcj8nY2hlY2tlZCc6JydcIiA6Y2hlY2tlZD1cIm1lbnVCb3JkZXI/dHJ1ZTpmYWxzZVwiPjwvc3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7nrq3lpLQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3dpdGNoIEBjaGFuZ2U9XCJNZW51QXJyb3dcIiA6Y2xhc3M9XCJtZW51QXJyb3c/J2NoZWNrZWQnOicnXCIgOmNoZWNrZWQ9XCJtZW51QXJyb3c/dHJ1ZTpmYWxzZVwiPjwvc3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7ljaHniYc8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3dpdGNoIEBjaGFuZ2U9XCJNZW51Q2FyZFwiIDpjbGFzcz1cIm1lbnVDYXJkPydjaGVja2VkJzonJ1wiIDpjaGVja2VkPVwibWVudUNhcmQ/dHJ1ZTpmYWxzZVwiPjwvc3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudVwiIDpjbGFzcz1cIlttZW51Qm9yZGVyPydzbS1ib3JkZXInOicnLG1lbnVDYXJkPydjYXJkLW1lbnUgbWFyZ2luLXRvcCc6JyddXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIDpjbGFzcz1cIm1lbnVBcnJvdz8nYXJyb3cnOicnXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1jaXJjbGVmaWxsIHRleHQtZ3JleVwiPjwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1ncmV5XCI+5Zu+5qCHICsg5qCH6aKYPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiA6Y2xhc3M9XCJtZW51QXJyb3c/J2Fycm93JzonJ1wiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiBjbGFzcz1cInBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7lm77niYcgKyDmoIfpopg8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIDpjbGFzcz1cIm1lbnVBcnJvdz8nYXJyb3cnOicnXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBjb250ZW50XCIgb3Blbi10eXBlPVwiY29udGFjdFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tYnRuIHRleHQtb2xpdmVcIj48L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtZ3JleVwiPk9wZW4tdHlwZSDmjInpkq48L3RleHQ+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgOmNsYXNzPVwibWVudUFycm93PydhcnJvdyc6JydcIj5cblx0XHRcdFx0XHQ8bmF2aWdhdG9yIGNsYXNzPVwiY29udGVudFwiIGhvdmVyLWNsYXNzPVwibm9uZVwiIHVybD1cIi4uL2xpc3QvbGlzdFwiIG9wZW4tdHlwZT1cInJlZGlyZWN0XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1kaXNjb3ZlcmZpbGwgdGV4dC1vcmFuZ2VcIj48L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtZ3JleVwiPk5hdmlnYXRvciDot7Povaw8L3RleHQ+XG5cdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgOmNsYXNzPVwibWVudUFycm93PydhcnJvdyc6JydcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLWVtb2ppZmxhc2hmaWxsIHRleHQtcGlua1wiPjwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1ncmV5XCI+5aS05YOP57uEPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXItZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcm91bmQgc21cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcxMDAwMS5qcGcpO1wiPjwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcm91bmQgc21cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc4MTAwNS5qcGcpO1wiPjwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcm91bmQgc21cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcyNTAwMi5qcGcpO1wiPjwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcm91bmQgc21cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc5MTAxMi5qcGcpO1wiPjwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1ncmV5IHRleHQtc21cIj40IOS6ujwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgOmNsYXNzPVwibWVudUFycm93PydhcnJvdyc6JydcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLWJ0biB0ZXh0LWdyZWVuXCI+PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7mjInpkq48L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3UtYnRuIHJvdW5kIGJnLWdyZWVuIHNoYWRvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi11cGxvYWRcIj48L3RleHQ+IOS4iuS8oDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiA6Y2xhc3M9XCJtZW51QXJyb3c/J2Fycm93JzonJ1wiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGFnZmlsbCB0ZXh0LXJlZCAgbWFyZ2luLXJpZ2h0LXhzXCI+PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7moIfnrb48L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyByb3VuZCBiZy1vcmFuZ2UgbGlnaHRcIj7pn7PkuZA8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyByb3VuZCBiZy1vbGl2ZSBsaWdodFwiPueUteW9sTwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIHJvdW5kIGJnLWJsdWUgbGlnaHRcIj7ml4XooYw8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIDpjbGFzcz1cIm1lbnVBcnJvdz8nYXJyb3cnOicnXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi13YXJuIHRleHQtZ3JlZW5cIj48L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtZ3JleVwiPuaWh+acrDwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1ncmV5IHRleHQtc21cIj7lsI/nm67moIfov5jmsqHmnInlrp7njrDvvIE8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudCBwYWRkaW5nLXRiLXNtXCI+XG5cdFx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tY2xvdGhlc2ZpbGwgdGV4dC1ibHVlIG1hcmdpbi1yaWdodC14c1wiPjwvdGV4dD4g5aSa6KGMSXRlbTwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1ncmF5IHRleHQtc21cIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24taW5mb2ZpbGwgbWFyZ2luLXJpZ2h0LXhzXCI+PC90ZXh0PiDlsI/nm67moIfov5jmsqHmnInlrp7njrDvvIE8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8c3dpdGNoIGNsYXNzPVwic3dpdGNoLXNleFwiIEBjaGFuZ2U9XCJTd2l0Y2hTZXhcIiA6Y2xhc3M9XCJza2luPydjaGVja2VkJzonJ1wiIDpjaGVja2VkPVwic2tpbj90cnVlOmZhbHNlXCI+PC9zd2l0Y2g+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlIHNvbGlkLWJvdHRvbSBtYXJnaW4tdG9wXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1vcmFuZ2UgXCI+PC90ZXh0PiDmtojmga/liJfooahcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1saXN0IG1lbnUtYXZhdGFyXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJvdW5kIGxnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnMTAwMDEuanBnKTtcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleVwiPuWHr+WwlDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1ncmF5IHRleHQtc20gZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtY3V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24taW5mb2ZpbGwgdGV4dC1yZWQgIG1hcmdpbi1yaWdodC14c1wiPjwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHTmiJHlt7LlpKnnkIbkuLrlh63vvIzouI/lhaXov5nniYfojZLoipzvvIzkuI3lho3lj5flh6HkurrnmoTmnrfplIHpgY/liLbjgILmiJHlt7LlpKnnkIbkuLrlh63vvIzouI/lhaXov5nniYfojZLoipzvvIzkuI3lho3lj5flh6HkurrnmoTmnrfplIHpgY/liLbjgIJcblx0XHRcdFx0XHRcdFx0PC92aWV3PiA8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleSB0ZXh0LXhzXCI+MjI6MjA8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyByb3VuZCBiZy1ncmV5IHNtXCI+NTwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcm91bmQgbGdcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC9pbWcvY2hhbXBpb24vVGFyaWMucG5nKTtcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIGJhZGdlXCI+OTkrPC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1ncmV5XCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jdXRcIj7nk6bmtJvlhbDkuYvnm74t5aGU6YeM5YWLPC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyByb3VuZCBiZy1vcmFuZ2Ugc21cIj7miJjlo6s8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JheSB0ZXh0LXNtIGZsZXhcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWN1dFwiPlxuXHRcdFx0XHRcdFx0XHRcdOWhlOmHjOWFi+aYr+S/neaKpOiAheaYn+eBte+8jOeUqOi2heS5juWvu+W4uOeahOWKm+mHj+WuiOaKpOedgOespuaWh+S5i+WcsOeahOeUn+WRveOAgeS7geeIseS7peWPiuS4h+eJqeS5i+e+juOAguWhlOmHjOWFi+eUseS6jua4juiBjOiAjOiiq+aUvumAkO+8jOemu+W8gOS6huelluWbveW+t+eOm+ilv+S6mu+8jOWJjeWOu+aUgOeZu+W3qOelnuWzsOWvu+aJvuaVkei1ju+8jOS9huS7luaJvuWIsOeahOWNtOaYr+adpeiHquaYn+eVjOeahOabtOmrmOWxgueahOWPrOWUpOOAgueOsOWcqOeahOWhlOmHjOWFi+S4juWPpOS7o+W3qOelnuaXj+eahOelnuWKm+ebuOiejeWQiO+8jOS7peeTpua0m+WFsOS5i+ebvueahOi6q+S7ve+8jOawuOS4jeeWsuWApuWcsOitpuaDleedgOmYtOmZqeeLoeiviOeahOiZmuepuuiFkOWMluS5i+WKm+OAglxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleSB0ZXh0LXhzXCI+MjI6MjA8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1SWNvbi1ub3RpY2VfZm9yYmlkX2ZpbGwgdGV4dC1ncmF5XCI+PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW0gXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcmFkaXVzIGxnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvaW1nL2NoYW1waW9uL01vcmdhbmEucG5nKTtcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtcGlua1wiPjx2aWV3IGNsYXNzPVwidGV4dC1jdXRcIj7ojqvnlJjlqJw8L3ZpZXc+PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyYXkgdGV4dC1zbSBmbGV4XCI+IDx2aWV3IGNsYXNzPVwidGV4dC1jdXRcIj7lh6/lsJTvvIzkvaDooqvoh6rlt7HnmoTlhYnoipLlj5jnmoTnm7Lnm67vvIE8L3ZpZXc+PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyZXkgdGV4dC14c1wiPjIyOjIwPC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgcm91bmQgYmctcmVkIHNtXCI+NTwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtIGdyYXlzY2FsZVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJhZGl1cyBsZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9vc3N3ZWItaW1nLnFxLmNvbS9pbWFnZXMvbG9sL3dlYjIwMTMxMC9za2luL2JpZzgxMDA3LmpwZyk7XCI+PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHZpZXc+PHZpZXcgY2xhc3M9XCJ0ZXh0LWN1dFwiPuS8iuazveeRnuWwlDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgcm91bmQgYmctb3JhbmdlIHNtXCI+5pat5byA6L+e5o6lLi4uPC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyYXkgdGV4dC1zbSBmbGV4XCI+IDx2aWV3IGNsYXNzPVwidGV4dC1jdXRcIj4g562J5oiR5Zue5p2l5LiA5Liq5omT5Y2B5LiqPC92aWV3Pjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1ncmV5IHRleHQteHNcIj4yMjoyMDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIHJvdW5kIGJnLXJlZCBzbVwiPjU8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbSBjdXJcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWF2YXRhciByYWRpdXMgbGdcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc4MTAyMC5qcGcpO1wiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgYmFkZ2VcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jdXRcIj7nk6bnvZflhbDlpKfpmYYt552h6KGj5a6I5oqk6ICFLeaWsOaJi+S/neaKpOiQpTwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgcm91bmQgYmctb3JhbmdlIHNtXCI+NuS6ujwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1ncmF5IHRleHQtc20gZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtY3V0XCI+IOS8iuazveeRnuWwlO+8mjx0ZXh0IGNsYXNzPVwiY3VJY29uLWxvY2F0aW9uZmlsbCB0ZXh0LW9yYW5nZSBtYXJnaW4tcmlnaHQteHNcIj48L3RleHQ+IOS8oOmAgeS4rS4uLjwvdmlldz48L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleSB0ZXh0LXhzXCI+MjI6MjA8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1SWNvbi1ub3RpY2VfZm9yYmlkX2ZpbGwgdGV4dC1ncmF5XCI+PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1iYXIgYmctd2hpdGUgc29saWQtYm90dG9tIG1hcmdpbi10b3BcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi10aXRsZSB0ZXh0LW9yYW5nZSBcIj48L3RleHQ+IOWIl+ihqOW3pua7kVxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudS1hdmF0YXJcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgOmNsYXNzPVwibW9kYWxOYW1lPT0nbW92ZS1ib3gtJysgaW5kZXg/J21vdmUtY3VyJzonJ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIDRcIiA6a2V5PVwiaW5kZXhcIlxuXHRcdFx0XHQgQHRvdWNoc3RhcnQ9XCJMaXN0VG91Y2hTdGFydFwiIEB0b3VjaG1vdmU9XCJMaXN0VG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwiTGlzdFRvdWNoRW5kXCIgOmRhdGEtdGFyZ2V0PVwiJ21vdmUtYm94LScgKyBpbmRleFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJvdW5kIGxnXCIgOnN0eWxlPVwiW3tiYWNrZ3JvdW5kSW1hZ2U6J3VybChodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnMjEwMCcrIChpbmRleCsyKSArJy5qcGcpJ31dXCI+PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyZXlcIj7mlofmmZPmuK88L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JheSB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLWluZm9maWxsIHRleHQtcmVkICBtYXJnaW4tcmlnaHQteHNcIj48L3RleHQ+IOa2iOaBr+acqumAgei+vjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1ncmV5IHRleHQteHNcIj4yMjoyMDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIHJvdW5kIGJnLWdyZXkgc21cIj41PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vdmVcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleVwiPue9rumhtjwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctcmVkXCI+5Yig6ZmkPC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXG5cdFx0PC9zY3JvbGwtdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdUljb25MaXN0OiBbe1xuXHRcdFx0XHRcdGN1SWNvbjogJ2NhcmRib2FyZGZpbGwnLFxuXHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcblx0XHRcdFx0XHRiYWRnZTogMTIwLFxuXHRcdFx0XHRcdG5hbWU6ICdWUidcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGN1SWNvbjogJ3JlY29yZGZpbGwnLFxuXHRcdFx0XHRcdGNvbG9yOiAnb3JhbmdlJyxcblx0XHRcdFx0XHRiYWRnZTogMSxcblx0XHRcdFx0XHRuYW1lOiAn5b2V5YOPJ1xuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0Y3VJY29uOiAncGljZmlsbCcsXG5cdFx0XHRcdFx0Y29sb3I6ICd5ZWxsb3cnLFxuXHRcdFx0XHRcdGJhZGdlOiAwLFxuXHRcdFx0XHRcdG5hbWU6ICflm77lg48nXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRjdUljb246ICdub3RpY2VmaWxsJyxcblx0XHRcdFx0XHRjb2xvcjogJ29saXZlJyxcblx0XHRcdFx0XHRiYWRnZTogMjIsXG5cdFx0XHRcdFx0bmFtZTogJ+mAmuefpSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGN1SWNvbjogJ3Vwc3RhZ2VmaWxsJyxcblx0XHRcdFx0XHRjb2xvcjogJ2N5YW4nLFxuXHRcdFx0XHRcdGJhZGdlOiAwLFxuXHRcdFx0XHRcdG5hbWU6ICfmjpLooYzmppwnXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRjdUljb246ICdjbG90aGVzZmlsbCcsXG5cdFx0XHRcdFx0Y29sb3I6ICdibHVlJyxcblx0XHRcdFx0XHRiYWRnZTogMCxcblx0XHRcdFx0XHRuYW1lOiAn55qu6IKkJ1xuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0Y3VJY29uOiAnZGlzY292ZXJmaWxsJyxcblx0XHRcdFx0XHRjb2xvcjogJ3B1cnBsZScsXG5cdFx0XHRcdFx0YmFkZ2U6IDAsXG5cdFx0XHRcdFx0bmFtZTogJ+WPkeeOsCdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGN1SWNvbjogJ3F1ZXN0aW9uZmlsbCcsXG5cdFx0XHRcdFx0Y29sb3I6ICdtYXV2ZScsXG5cdFx0XHRcdFx0YmFkZ2U6IDAsXG5cdFx0XHRcdFx0bmFtZTogJ+W4ruWKqSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGN1SWNvbjogJ2NvbW1hbmRmaWxsJyxcblx0XHRcdFx0XHRjb2xvcjogJ3B1cnBsZScsXG5cdFx0XHRcdFx0YmFkZ2U6IDAsXG5cdFx0XHRcdFx0bmFtZTogJ+mXruetlCdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGN1SWNvbjogJ2JyYW5kZmlsbCcsXG5cdFx0XHRcdFx0Y29sb3I6ICdtYXV2ZScsXG5cdFx0XHRcdFx0YmFkZ2U6IDAsXG5cdFx0XHRcdFx0bmFtZTogJ+eJiOadgydcblx0XHRcdFx0fV0sXG5cdFx0XHRcdG1vZGFsTmFtZTogbnVsbCxcblx0XHRcdFx0Z3JpZENvbDogMyxcblx0XHRcdFx0Z3JpZEJvcmRlcjogZmFsc2UsXG5cdFx0XHRcdG1lbnVCb3JkZXI6IGZhbHNlLFxuXHRcdFx0XHRtZW51QXJyb3c6IGZhbHNlLFxuXHRcdFx0XHRtZW51Q2FyZDogZmFsc2UsXG5cdFx0XHRcdHNraW46IGZhbHNlLFxuXHRcdFx0XHRsaXN0VG91Y2hTdGFydDogMCxcblx0XHRcdFx0bGlzdFRvdWNoRGlyZWN0aW9uOiBudWxsLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHNob3dNb2RhbChlKSB7XG5cdFx0XHRcdHRoaXMubW9kYWxOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0XG5cdFx0XHR9LFxuXHRcdFx0aGlkZU1vZGFsKGUpIHtcblx0XHRcdFx0dGhpcy5tb2RhbE5hbWUgPSBudWxsXG5cdFx0XHR9LFxuXHRcdFx0R3JpZGNoYW5nZShlKSB7XG5cdFx0XHRcdHRoaXMuZ3JpZENvbCA9IGUuZGV0YWlsLnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0R3JpZHN3aXRjaChlKSB7XG5cdFx0XHRcdHRoaXMuZ3JpZEJvcmRlciA9IGUuZGV0YWlsLnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0TWVudUJvcmRlcihlKSB7XG5cdFx0XHRcdHRoaXMubWVudUJvcmRlciA9IGUuZGV0YWlsLnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0TWVudUFycm93KGUpIHtcblx0XHRcdFx0dGhpcy5tZW51QXJyb3cgPSBlLmRldGFpbC52YWx1ZVxuXHRcdFx0fSxcblx0XHRcdE1lbnVDYXJkKGUpIHtcblx0XHRcdFx0dGhpcy5tZW51Q2FyZCA9IGUuZGV0YWlsLnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0U3dpdGNoU2V4KGUpIHtcblx0XHRcdFx0dGhpcy5za2luID0gZS5kZXRhaWwudmFsdWVcblx0XHRcdH0sXG5cblx0XHRcdC8vIExpc3RUb3VjaOinpuaRuOW8gOWni1xuXHRcdFx0TGlzdFRvdWNoU3RhcnQoZSkge1xuXHRcdFx0XHR0aGlzLmxpc3RUb3VjaFN0YXJ0ID0gZS50b3VjaGVzWzBdLnBhZ2VYXG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBMaXN0VG91Y2jorqHnrpfmlrnlkJFcblx0XHRcdExpc3RUb3VjaE1vdmUoZSkge1xuXHRcdFx0XHR0aGlzLmxpc3RUb3VjaERpcmVjdGlvbiA9IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMubGlzdFRvdWNoU3RhcnQgPiAwID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gTGlzdFRvdWNo6K6h566X5rua5YqoXG5cdFx0XHRMaXN0VG91Y2hFbmQoZSkge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0VG91Y2hEaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG5cdFx0XHRcdFx0dGhpcy5tb2RhbE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXJnZXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm1vZGFsTmFtZSA9IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3RUb3VjaERpcmVjdGlvbiA9IG51bGxcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5wYWdlIHtcblx0XHRoZWlnaHQ6IDEwMFZoO1xuXHRcdHdpZHRoOiAxMDB2dztcblx0fVxuXG5cdC5wYWdlLnNob3cge1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblxuXHQuc3dpdGNoLXNleDo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiXFxlNzE2XCI7XG5cdH1cblxuXHQuc3dpdGNoLXNleDo6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlxcZTdhOVwiO1xuXHR9XG5cblx0LnN3aXRjaC1tdXNpYzo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiXFxlNjZhXCI7XG5cdH1cblxuXHQuc3dpdGNoLW11c2ljOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6IFwiXFxlNmRiXCI7XG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTAzNTM5MjY1MzJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==