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
	exports.change_add_form_data = change_add_form_data;
	exports.show_delete_record = show_delete_record;
	exports.hide_delete_record = hide_delete_record;
	exports.delete_record = delete_record;
	exports.show_edit_record = show_edit_record;
	exports.hide_edit_record = hide_edit_record;
	exports.change_edit_form_data = change_edit_form_data;
	exports.edit_record = edit_record;
	exports.fetch_address_data = fetch_address_data;

	var _config = __webpack_require__(582);

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

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

	var SHOW_SNACKBAR = "SHOW_SNACKBAR";
	var show_snackbar = function show_snackbar(msg) {
		return {
			type: SHOW_SNACKBAR,
			msg: msg
		};
	};
	exports.show_snackbar = show_snackbar;

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
		return function (dispatch, getState) {
			dispatch(show_snackbar("正在添加记录..."));
			dispatch({
				type: HIDE_ADD_RECORD
			});
			var token = window.localStorage.getItem('token'),
			    form = getState().address.addRecord.form;
			window.fetch("" + _config.baseUrl + _config.addressUrl, {
				method: 'POST',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				},
				body: "province=" + form.province + "&unit=" + form.unit + "&depart=" + form.depart + "&phone=" + form.phone + "&address=" + form.address
			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("添加成功"));
							dispatch({
								type: ADD_RECORD,
								data: {
									_id: data,
									province: form.province,
									unit: form.unit,
									depart: form.depart,
									phone: form.phone,
									address: form.address
								}
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}
	function change_add_form_data(field, value) {
		return {
			type: CHANGE_ADD_FORM_DATA,
			data: {
				field: field,
				value: value
			}
		};
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
			dispatch(show_snackbar("正在删除记录..."));
			dispatch({
				type: HIDE_DELETE_RECORD
			});
			var token = window.localStorage.getItem('token'),
			    id = getState().address.deleteRecord.id;
			window.fetch("" + _config.baseUrl + _config.addressUrl + "/" + id, {
				method: 'DELETE',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				}
			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("删除成功"));
							dispatch({
								type: DELETE_RECORD,
								data: id
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
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
	function change_edit_form_data(field, value) {
		return {
			type: CHANGE_EDIT_FORM_DATA,
			data: {
				field: field,
				value: value
			}
		};
	}
	function edit_record() {
		return function (dispatch, getState) {
			dispatch(show_snackbar("正在修改记录..."));
			dispatch({
				type: HIDE_DELETE_RECORD
			});
			var token = window.localStorage.getItem('token'),
			    form = getState().address.editRecord.form;
			window.fetch("" + _config.baseUrl + _config.addressUrl + "/" + form._id, {
				method: 'PUT',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				},
				body: "province=" + form.province + "&unit=" + form.unit + "&depart=" + form.depart + "&phone=" + form.phone + "&address=" + form.address
			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("修改信息成功"));
							dispatch({
								type: EDIT_RECORD,
								data: form
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}

	function fetch_address_data() {
		return function (dispatch, getState) {
			dispatch(show_snackbar("正在获取数据..."));
			var token = window.localStorage.getItem("token");
			window.fetch("" + _config.baseUrl + _config.addressUrl, {
				method: 'GET',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				}
			}).then(function (response) {
				var token = response.headers.get('token');
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("获取数据成功"));
							dispatch({
								type: UPDATE_DATA,
								data: data
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}

/***/ }

})