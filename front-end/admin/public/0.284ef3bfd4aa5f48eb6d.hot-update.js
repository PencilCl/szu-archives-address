webpackHotUpdate(0,{

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
			items: ['请选择派遣单位']
		},
		depart: {
			current: 0,
			items: ['请选择部门']
		}
	};

	var generate_new_state = function generate_new_state(state) {
		var newState = (0, _immutable.fromJS)(state);
		return newState.toJS();
	};

	var change_province = function change_province(state, value) {
		var newState = (0, _immutable.fromJS)(state);
		console.log(newState.province);
		newState.province.current = value;
		return newState;
	};

	var change_unit = function change_unit(state, value) {
		var newState = (0, _immutable.fromJS)(state);
		newState.unit.current = value;
		return newState;
	};

	var change_depart = function change_depart(state, value) {
		var newState = (0, _immutable.fromJS)(state);
		newState.depart.current = value;
		return newState;
	};

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

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
			default:
				return state;
		}
	}

/***/ }

})