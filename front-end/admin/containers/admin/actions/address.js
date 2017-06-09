import {
	baseUrl,
	addressUrl
} from './../../../config.js'

import 'whatwg-fetch'

window.fetch = fetch

const CHANGE_PROVINCE = "CHANGE_PROVINCE"
const CHANGE_CITY = "CHANGE_CITY"
const CHANGE_DEPART = "CHANGE_DEPART"
const FILTER_MANUAL = "FILTER_MANUAL"
const FILTER_MODIFIED = "FILTER_MODIFIED"

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

const CHANGE_XLS = "CHANGE_XLS"

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

export function changeCity(event, index, value) {
	return {
		type: CHANGE_CITY,
		data: value
	}
}

export function changeDepart(event, index, value) {
	return {
		type: CHANGE_DEPART,
		data: value
	}
}

export function filter_manual(event) {
	return {
		type: FILTER_MANUAL
	}
}

export function filter_modified(event) {
	return {
		type: FILTER_MODIFIED
	}
}

let show_add_record = (clear = true) => {
	return {
		type: SHOW_ADD_RECORD,
		clear: clear
	}
}
exports.show_add_record = show_add_record;
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
			body: `province=${form.province}&city=${form.city}&depart=${form.depart}&unit=${form.unit}&address=${form.address}&postcode=${form.postcode}&contact=${form.contact}`
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
								city: form.city,
								depart: form.depart,
								postcode: form.postcode,
								unit: form.unit,
								address: form.address,
								autoImport: false,
								modified: false,
								contact: form.contact
							}
						});
					} else {
						dispatch(show_snackbar(data.error));
						dispatch(show_add_record(false));
					}
				})
			} else {
				dispatch(show_snackbar("连接服务器失败"));
				dispatch(show_add_record(false));		
			}
		}, err => {
			dispatch(show_snackbar("连接服务器失败"));
			dispatch(show_add_record(false));
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

let show_edit_record = (id, clear = true) => {
	return {
		type: SHOW_EDIT_RECORD,
		data: id,
		clear: clear
	}
}
exports.show_edit_record = show_edit_record;
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
			body: `province=${form.province}&city=${form.city}&depart=${form.depart}&unit=${form.unit}&address=${form.address}&postcode=${form.postcode}&contact=${form.contact}`
		}).then(response => {
			if (response.ok) {
				response.json().then(data => {
					if (data.code == 10000) {
						data = data.data;
						dispatch(show_snackbar("修改信息成功"));
						form.modified = true;
						dispatch({
							type: EDIT_RECORD,
							data: form
						});
					} else {
						dispatch(show_snackbar(data.error));
						dispatch(show_edit_record(form._id, false));
					}
				})
			} else {
				dispatch(show_snackbar("连接服务器失败"));
				dispatch(show_edit_record(form._id, false));
			}
		}, err => {
			dispatch(show_snackbar("连接服务器失败"));
			dispatch(show_edit_record(form._id, false));
		})
	}
}

exports.fetch_address_data = () => {
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
};

export function upload_xls(fetch_address_data) {
	return (dispatch, getState) => {
  	dispatch(show_snackbar("正在添加"));
  	let token = window.localStorage.getItem('token');
  	let formData = new FormData();
  	formData.append('excel', getState().address.xlsFile);
  	window.fetch(`${baseUrl}${addressUrl}/import`, {
  		method: 'POST',
  		headers: {
  			"token": token
  		},
  		body: formData
  	}).then(res => {
  		if (res.ok) {
  			res.json().then(data => {
  				if (data.code != 10000) {
  					dispatch(show_snackbar(data.error));
  				} else {
  					dispatch(show_snackbar("导入成功"));
  					dispatch({
  						type: CHANGE_XLS,
  						data: null
  					});
  					fetch_address_data();
  				}
  			})
  		} else {
  			dispatch(show_snackbar("请求失败"));
  		}
  	}, err => {
  		dispatch(show_snackbar("连接服务器失败"));
  	})
	}
}

export function change_xls(e) {
	return (dispatch, getState) => {
		let file = e.target.files[0];
		e.target.value = "";
	  let supportedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
	  if (file && supportedTypes.indexOf(file.type) >= 0) {
			dispatch({
				type: CHANGE_XLS,
				data: file
			});
	  } else {
	  	dispatch({
	  		type: CHANGE_XLS,
	  		data: null
	  	});
	  	dispatch(show_snackbar("格式错误"));
	  }
	}
}

/**
 * 导出xls表格
 */
 var tmpDown; //导出的二进制对象;
 function downloadExl(json, type) {
   var keyMap = ["province", "city", "depart", "unit", "address", "contact", "postcode"];
   var tmpdata = [];//用来保存转换好的json
   json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
       v: v[k],
       position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
   }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
       v: v.v
   });
   var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
   var tmpWB = {
       SheetNames: ['mySheet'], //保存的表标题
       Sheets: {
         'mySheet': Object.assign({},
             tmpdata, //内容
             {
               '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
             })
       }
   };
   tmpDown = new Blob([s2ab(XLSX.write(tmpWB, 
       {bookType: (type == undefined ? 'xlsx':type),bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
       ))], {
       type: ""
   }); //创建二进制对象写入转换好的字节流
   var href = URL.createObjectURL(tmpDown); //创建对象超链接
   document.getElementById("hf").href = href; //绑定a标签
   document.getElementById("hf").click(); //模拟点击实现下载
   setTimeout(function() { //延时释放
       URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
   }, 100);
}
function s2ab(s) { //字符串转字符流
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for(var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}
// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
function getCharCol(n) {
  let temCol = '',
      s = '',
      m = 0
  while(n > 0) {
    m = n % 26 + 1
    s = String.fromCharCode(m + 64) + s
    n = (n - m) / 26
  }
  return s
}
export function export_xls(tableData) {
	tableData.splice(0, 0, {
		province: "省份",
		city: "地区",
		depart: "派遣单位主管部门",
		unit: "派遣单位名称",
		address: "派遣单位地址",
		contact: "派遣单位办公电话",
		postcode: "派遣单位邮编"
	});
	downloadExl(tableData);
	return {
		type: null
	}
}