import {
	baseUrl,
	addressUrl
} from './../../../config.js'

const CHANGE_PROVINCE = "CHANGE_PROVINCE"
const CHANGE_UNIT = "CHANGE_UNIT"
const CHANGE_DEPART = "CHANGE_DEPART"

const UPDATE_DATA = "UPDATE_DATA"

const DELETE_RECORD = "DELETE_RECORD"
const SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD"
const HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD"

const EDIT_RECORD = "EDIT_RECORD"
const SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD"
const HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD"
const CHANGE_EDIT_FORM_DATA = "CHANGE_EDIT_FORM_DATA"

const ADD_RECORD = "ADD_RECORD"
const SHOW_ADD_RECORD = "SHOW_ADD_RECORD"
const HIDE_ADD_RECORD = "HIDE_ADD_RECORD"
const CHANGE_ADD_FORM_DATA = "CHANGE_ADD_FORM_DATA"

const SHOW_SNACKBAR = "SHOW_SNACKBAR"
let show_snackbar = (msg) => {
	return {
		type: SHOW_SNACKBAR,
		msg: msg
	}
}
exports.show_snackbar = show_snackbar;

export function changeProvince(event, index, value) {
	return {
		type: CHANGE_PROVINCE,
		data: value
	}
}

export function changeUnit(event, index, value) {
	return {
		type: CHANGE_UNIT,
		data: value
	}
}

export function changeDepart(event, index, value) {
	return {
		type: CHANGE_DEPART,
		data: value
	}
}

export function show_add_record() {
	return {
		type: SHOW_ADD_RECORD
	}
}
export function hide_add_record() {
	return {
		type:HIDE_ADD_RECORD
	}
}
export function add_record() {
	return (dispatch, getState) => {
		dispatch(show_snackbar("正在添加记录..."));
		dispatch({
			type: HIDE_ADD_RECORD
		});
		let token = window.localStorage.getItem('token'),
				form = getState().address.addRecord.form;
		window.fetch(`${baseUrl}${addressUrl}`, {
			method: 'POST',
			headers: {
	      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	      token: token
			},
			body: `province=${form.province}&unit=${form.unit}&depart=${form.depart}&phone=${form.phone}&address=${form.address}`
		}).then(response => {
			if (response.ok) {
				response.json().then(data => {
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
				})
			} else {
				dispatch(show_snackbar("连接服务器失败"));
			}
		}, err => {
			dispatch(show_snackbar("连接服务器失败"));
		})
	}
}
export function change_add_form_data(field, value) {
	return {
		type: CHANGE_ADD_FORM_DATA,
		data: {
			field: field,
			value: value
		}
	}
}

export function show_delete_record(id) {
	return {
		type: SHOW_DELETE_RECORD,
		data: id
	}
}
export function hide_delete_record() {
	return {
		type: HIDE_DELETE_RECORD
	}
}
export function delete_record() {
	return (dispatch, getState) => {
		dispatch(show_snackbar("正在删除记录..."));
		dispatch({
			type: HIDE_DELETE_RECORD
		});
		let token = window.localStorage.getItem('token'),
				id = getState().address.deleteRecord.id;
		window.fetch(`${baseUrl}${addressUrl}/${id}`, {
			method: 'DELETE',
			headers: {
	      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	      token: token
			}
		}).then(response => {
			if (response.ok) {
				response.json().then(data => {
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
				})
			} else {
				dispatch(show_snackbar("连接服务器失败"));
			}
		}, err => {
			dispatch(show_snackbar("连接服务器失败"));
		})
	}
}

export function show_edit_record(id) {
	return {
		type: SHOW_EDIT_RECORD,
		data: id
	}
}
export function hide_edit_record() {
	return {
		type: HIDE_EDIT_RECORD
	}
}
export function change_edit_form_data(field, value) {
	return {
		type: CHANGE_EDIT_FORM_DATA,
		data: {
			field: field,
			value: value
		}
	}
}
export function edit_record() {
	return (dispatch, getState) => {
		dispatch(show_snackbar("正在修改记录..."));
		dispatch({
			type: HIDE_EDIT_RECORD
		});
		let token = window.localStorage.getItem('token'),
				form = getState().address.editRecord.form;
		window.fetch(`${baseUrl}${addressUrl}/${form._id}`, {
			method: 'PUT',
			headers: {
	      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	      token: token
			},
			body: `province=${form.province}&unit=${form.unit}&depart=${form.depart}&phone=${form.phone}&address=${form.address}`
		}).then(response => {
			if (response.ok) {
				response.json().then(data => {
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
				})
			} else {
				dispatch(show_snackbar("连接服务器失败"));
			}
		}, err => {
			dispatch(show_snackbar("连接服务器失败"));
		})
	}
}

export function fetch_address_data() {
	return (dispatch, getState) => {
		dispatch(show_snackbar("正在获取数据..."));
		let token = window.localStorage.getItem("token");
		window.fetch(`${baseUrl}${addressUrl}`, {
			method: 'GET',
			headers: {
	      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	      token: token
			}
		}).then(response => {
			let token = response.headers.get('token');
			if (response.ok) {
				response.json().then(data => {
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
				})
			} else {
				dispatch(show_snackbar("连接服务器失败"));
			}
		}, err => {
			dispatch(show_snackbar("连接服务器失败"));
		})
	}
}
