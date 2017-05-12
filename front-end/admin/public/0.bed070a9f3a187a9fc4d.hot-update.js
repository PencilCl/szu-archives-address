webpackHotUpdate(0,{

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(179);

	var _Admin = __webpack_require__(271);

	var _Admin2 = _interopRequireDefault(_Admin);

	var _Address = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./containers/admin/Address\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Address2 = _interopRequireDefault(_Address);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: 'admin', component: _Admin2.default },
		_react2.default.createElement(_reactRouter.IndexRedirect, { to: 'Address' }),
		_react2.default.createElement(_reactRouter.Route, { path: 'Address', component: _Address2.default })
	);

/***/ }

})