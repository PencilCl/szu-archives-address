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

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = address;

	var _immutable = __webpack_require__(627);

	var initialState = {
		province: {
			current: 0,
			items: ['请选择省份', '广东省', '福建省', '北京市']
		},
		unit: {
			current: 0,
			items: ['请选择派遣单位', '派遣单位1']
		},
		depart: {
			current: 0,
			items: ['请选择部门', '部门1']
		},
		addresses: [{
			_id: 123,
			province: '广东省',
			unit: '派遣单位1',
			depart: '部门',
			phone: '13000000000',
			address: '广东省深圳市南山区粤海街道深圳大学'
		}, {
			_id: 456,
			province: '广东省',
			unit: '派遣单位2',
			depart: '部门',
			phone: '13000000000',
			address: '广东省深圳市南山区粤海街道深圳大学'
		}, {
			_id: 789,
			province: '福建省',
			unit: '派遣单位1',
			depart: '部门',
			phone: '13000000000',
			address: '广东省深圳市南山区粤海街道深圳大学'
		}]
	};

	var generate_new_state = function generate_new_state(state) {
		var newState = (0, _immutable.fromJS)(state);
		return newState.toJS();
	};

	var change_province = function change_province(state, value) {
		var newState = generate_new_state(state);
		newState.province.current = value;
		newState.unit.current = 0;
		return newState;
	};

	var change_unit = function change_unit(state, value) {
		var newState = generate_new_state(state);
		newState.unit.current = value;
		newState.depart.current = 0;
		return newState;
	};

	var change_depart = function change_depart(state, value) {
		var newState = generate_new_state(state);
		newState.depart.current = value;
		return newState;
	};

	var update_data = function update_data(state, data) {
		var newState = generate_new_state(state);

		return newState;
	};

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";
	var UPDATE_DATA = "UPDATE_DATA";

	function address() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case CHANGE_PROVINCE:
				return change_province(state, action.data);
			case CHANGE_UNIT:
				return change_unit(state, action.data);
			case CHANGE_DEPART:
				return change_depart(state, action.data);
			case UPDATE_DATA:
				return update_data(state, action.data);
			default:
				return state;
		}
	}

/***/ }

})