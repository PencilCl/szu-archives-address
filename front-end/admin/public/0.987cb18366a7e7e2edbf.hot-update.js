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
			items: ['请选择派遣单位', '派遣单位1']
		},
		depart: {
			current: 0,
			items: ['请选择部门', '部门1']
		},
		addRecord: {
			show: false,
			form: {
				province: '',
				unit: '',
				depart: '',
				phone: '',
				address: ''
			}
		},
		deleteRecord: {
			show: false,
			id: null
		},
		editRecord: {
			show: false,
			form: {
				_id: '',
				province: '',
				unit: '',
				depart: '',
				phone: '',
				address: ''
			}
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

	var show_delete_record = function show_delete_record(state, data) {
		var newState = generate_new_state(state);
		newState.deleteRecord = {
			show: true,
			id: data
		};
		return newState;
	};
	var hide_delete_record = function hide_delete_record(state) {
		var newState = generate_new_state(state);
		newState.deleteRecord.show = false;
		return newState;
	};

	var show_edit_record = function show_edit_record(state, data) {
		var newState = generate_new_state(state);
		newState.editRecord.show = true;
		for (var i = 0; i < newState.addresses.length; ++i) {
			if (newState.addresses[i]._id == data) {
				newState.editRecord.form = newState.addresses[i];
				break;
			}
		}
		return newState;
	};
	var hide_edit_record = function hide_edit_record(state, data) {
		var newState = generate_new_state(state);
		newState.editRecord.show = false;
		return newState;
	};
	var change_edit_form_data = function change_edit_form_data(state, data) {
		var newState = generate_new_state(state);
		newState.editRecord.form[data.field] = data.value;
		return newState;
	};

	var show_add_record = function show_add_record(state) {
		var newState = generate_new_state(state);
		var province = newState.province,
		    unit = newState.unit,
		    depart = newState.depart;

		newState.addRecord.show = true;
		newState.addRecord.form = {
			province: province.current == 0 ? '' : province.items[province.current],
			unit: unit.current == 0 ? '' : unit.items[unit.current],
			depart: depart.current == 0 ? '' : depart.items[depart.current],
			phone: '',
			address: ''
		};
		return newState;
	};
	var hide_add_record = function hide_add_record(state) {
		var newState = generate_new_state(state);
		newState.addRecord.show = false;
		return newState;
	};

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

	var UPDATE_DATA = "UPDATE_DATA";

	var SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD";
	var HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD";

	var SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD";
	var HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD";
	var CHANGE_EDIT_FORM_DATA = "CHANGE_EDIT_FORM_DATA";

	var SHOW_ADD_RECORD = "SHOW_ADD_RECORD";
	var HIDE_ADD_RECORD = "HIDE_ADD_RECORD";

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
			case SHOW_ADD_RECORD:
				return show_add_record(state);
			case HIDE_ADD_RECORD:
				return hide_add_record(state);
			case SHOW_EDIT_RECORD:
				return show_edit_record(state, action.data);
			case HIDE_EDIT_RECORD:
				return hide_edit_record(state);
			case SHOW_DELETE_RECORD:
				return show_delete_record(state, action.data);
			case HIDE_DELETE_RECORD:
				return hide_delete_record(state);
			case CHANGE_EDIT_FORM_DATA:
				return change_edit_form_data(state, action.data);
			default:
				return state;
		}
	}

/***/ }

})