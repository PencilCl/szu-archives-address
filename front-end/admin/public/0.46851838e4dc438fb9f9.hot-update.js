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

	function address() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			default:
				return state;
		}
	}

/***/ }

})