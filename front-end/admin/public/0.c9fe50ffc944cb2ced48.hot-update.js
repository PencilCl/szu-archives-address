webpackHotUpdate(0,{

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.changeProvince = changeProvince;
	exports.changeUnit = changeUnit;
	exports.changeDepart = changeDepart;
	exports.show_add_record = show_add_record;
	exports.hide_add_record = hide_add_record;
	exports.add_record = add_record;
	exports.show_delete_record = show_delete_record;
	exports.hide_delete_record = hide_delete_record;
	exports.delete_record = delete_record;
	exports.show_edit_record = show_edit_record;
	exports.hide_edit_record = hide_edit_record;
	exports.edit_record = edit_record;
	exports.fetch_address_data = fetch_address_data;

	var _config = __webpack_require__(582);

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

	var UPDATE_DATA = "UPDATE_DATA";

	var SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD";
	var HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD";

	var SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD";
	var HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD";

	var SHOW_ADD_RECORD = "SHOW_ADD_RECORD";
	var HIDE_ADD_RECORD = "HIDE_ADD_RECORD";

	function changeProvince(event, index, value) {
		return {
			type: CHANGE_PROVINCE,
			data: value
		};
	}

	function changeUnit(event, index, value) {
		return {
			type: CHANGE_UNIT,
			data: value
		};
	}

	function changeDepart(event, index, value) {
		return {
			type: CHANGE_DEPART,
			data: value
		};
	}

	function show_add_record() {
		return {
			type: SHOW_ADD_RECORD
		};
	}
	function hide_add_record() {
		return {
			type: HIDE_ADD_RECORD
		};
	}
	function add_record() {
		return function (dispatch, getState) {};
	}

	function show_delete_record(id) {
		return {
			type: SHOW_DELETE_RECORD,
			data: id
		};
	}
	function hide_delete_record() {
		return {
			type: HIDE_DELETE_RECORD
		};
	}
	function delete_record() {
		return function (dispatch, getState) {
			console.log("delete record: " + getState.address.deleteRecord.id);
		};
	}

	function show_edit_record(id) {
		return {
			type: SHOW_EDIT_RECORD,
			data: id
		};
	}
	function hide_edit_record() {
		return {
			type: HIDE_EDIT_RECORD
		};
	}
	function edit_record() {
		return function (dispatch, getState) {};
	}

	function fetch_address_data() {
		return function (dispatch, getState) {
			dispatch(hide_login());
			var result = {
				state: false,
				msg: ''
			};
			var username = getState().admin.loginState.username;
			var password = getState().admin.loginState.password;
			var paramStr = "name=" + username + "&password=" + password;
			window.fetch("" + _config.baseUrl + loginUrl, {
				method: 'POST',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				body: paramStr
			}).then(function (response) {
				var token = response.headers.get('token');
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							result.state = true;
							result.username = data.username;
							result.msg = "登录成功";
							dispatch(login_finish(result));
							window.localStorage.setItem('token', token);
						} else {
							result.msg = data.error;
							dispatch(login_finish(result));
						}
					});
				} else {
					result.msg = "连接服务器失败";
					dispatch(login_finish(result));
				}
			}, function (err) {
				result.msg = "连接服务器失败";
				dispatch(login_finish(result));
			});
		};
	}

/***/ }

})