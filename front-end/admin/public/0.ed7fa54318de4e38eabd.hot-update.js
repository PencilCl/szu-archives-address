webpackHotUpdate(0,{

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = address;

	var _immutable = __webpack_require__(649);

	var initialState = {
		province: {
			current: 0,
			items: ['选择省份']
		},
		city: {
			current: 0,
			items: ['选择市/区']
		},
		depart: {
			current: 0,
			items: ['选择部门']
		},
		filterManual: false,
		filterModified: false,
		addRecord: {
			show: false,
			form: {
				province: '',
				city: '',
				depart: '',
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
				city: '',
				depart: '',
				address: ''
			}
		},
		addresses: []
	};

	var generate_new_state = function generate_new_state(state) {
		var newState = (0, _immutable.fromJS)(state);
		return newState.toJS();
	};

	var change_province = function change_province(state, value) {
		var newState = generate_new_state(state);
		newState.province.current = value;
		newState.city.current = 0;
		newState.depart.current = 0;
		if (value !== 0) {
			(function () {
				newState.city.items = ['选择派遣单位'];
				var tmp = {};
				newState.addresses.map(function (address) {
					if (!tmp[address.city] && address.province == newState.province.items[value]) {
						tmp[address.city] = true;
						newState.city.items.push(address.city);
					}
				});
			})();
		}
		return newState;
	};

	var change_city = function change_city(state, value) {
		var newState = generate_new_state(state);
		newState.city.current = value;
		newState.depart.current = 0;
		if (value !== 0) {
			(function () {
				newState.depart.items = ['选择部门'];
				var tmp = {};
				newState.addresses.map(function (address) {
					if (!tmp[address.depart] && address.city == newState.city.items[value]) {
						tmp[address.depart] = true;
						newState.depart.items.push(address.depart);
					}
				});
			})();
		}
		return newState;
	};

	var change_depart = function change_depart(state, value) {
		var newState = generate_new_state(state);
		newState.depart.current = value;
		return newState;
	};

	var filter_manual = function filter_manual(state, value) {
		var newState = generate_new_state(state);
		newState.filterManual = value;
		return newState;
	};

	var filter_modified = function filter_modified(state, value) {
		var newState = generate_new_state(state);
		newState.filterModified = value;
		return newState;
	};

	var update_data = function update_data(state, data) {
		var newState = generate_new_state(state);
		newState.addresses = data;
		newState.province.items = ['选择省份'];
		var tmp = {};
		newState.addresses.map(function (address) {
			if (!tmp[address.province]) {
				tmp[address.province] = true;
				newState.province.items.push(address.province);
			}
		});
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
	var delete_record = function delete_record(state, id) {
		var newState = generate_new_state(state);
		newState.addresses = newState.addresses.filter(function (address) {
			return address._id != id;
		});
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
	var edit_record = function edit_record(state, data) {
		var newState = generate_new_state(state);
		for (var i = 0; i < newState.addresses.length; ++i) {
			if (newState.addresses[i]._id == data._id) {
				newState.addresses[i] = data;
				break;
			}
		}
		return newState;
	};

	var show_add_record = function show_add_record(state) {
		var newState = generate_new_state(state);
		var province = newState.province,
		    city = newState.city,
		    depart = newState.depart;

		newState.addRecord.show = true;
		newState.addRecord.form = {
			province: province.current == 0 ? '' : province.items[province.current],
			city: city.current == 0 ? '' : city.items[city.current],
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
	var change_add_form_data = function change_add_form_data(state, data) {
		var newState = generate_new_state(state);
		newState.addRecord.form[data.field] = data.value;
		return newState;
	};
	var add_record = function add_record(state, data) {
		var newState = generate_new_state(state);
		newState.addresses.push(data);
		return newState;
	};

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_CITY = "CHANGE_CITY";
	var CHANGE_DEPART = "CHANGE_DEPART";
	var FILTER_MANUAL = "FILTER_MANUAL";
	var FILTER_MODIFIED = "FILTER_MODIFIED";

	var UPDATE_DATA = "UPDATE_DATA";

	var DELETE_RECORD = "DELETE_RECORD";
	var SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD";
	var HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD";

	var EDIT_RECORD = "EDIT_RECORD";
	var SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD";
	var HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD";
	var CHANGE_EDIT_FORM_DATA = "CHANGE_EDIT_FORM_DATA";

	var ADD_RECORD = "ADD_RECORD";
	var SHOW_ADD_RECORD = "SHOW_ADD_RECORD";
	var HIDE_ADD_RECORD = "HIDE_ADD_RECORD";
	var CHANGE_ADD_FORM_DATA = "CHANGE_ADD_FORM_DATA";

	function address() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case CHANGE_PROVINCE:
				return change_province(state, action.data);
			case CHANGE_CITY:
				return change_city(state, action.data);
			case CHANGE_DEPART:
				return change_depart(state, action.data);
			case FILTER_MANUAL:
				return filter_manual(state, action.data);
			case FILTER_MODIFIED:
				return filter_modified(state, action.data);
			case UPDATE_DATA:
				return update_data(state, action.data);
			case ADD_RECORD:
				return add_record(state, action.data);
			case SHOW_ADD_RECORD:
				return show_add_record(state);
			case HIDE_ADD_RECORD:
				return hide_add_record(state);
			case EDIT_RECORD:
				return edit_record(state, action.data);
			case SHOW_EDIT_RECORD:
				return show_edit_record(state, action.data);
			case HIDE_EDIT_RECORD:
				return hide_edit_record(state);
			case DELETE_RECORD:
				return delete_record(state, action.data);
			case SHOW_DELETE_RECORD:
				return show_delete_record(state, action.data);
			case HIDE_DELETE_RECORD:
				return hide_delete_record(state);
			case CHANGE_EDIT_FORM_DATA:
				return change_edit_form_data(state, action.data);
			case CHANGE_ADD_FORM_DATA:
				return change_add_form_data(state, action.data);
			default:
				return state;
		}
	}

/***/ }

})