webpackHotUpdate(0,{

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.initial_state_finish = initial_state_finish;
	exports.initial_state = initial_state;
	exports.show_snackbar = show_snackbar;
	exports.close_snackbar = close_snackbar;
	exports.logout_finish = logout_finish;
	exports.logout = logout;
	exports.login_finish = login_finish;
	exports.login = login;
	exports.change_username = change_username;
	exports.change_password = change_password;
	exports.show_login = show_login;
	exports.hide_login = hide_login;

	var _config = __webpack_require__(582);

	var LOGIN = "LOGIN";
	var LOGIN_FINISH = "LOGIN_FINISH";
	var LOGOUT = "LOGOUT";
	var LOGOUT_FINISH = "LOGOUT_FINISH";
	var SHOW_LOGIN = "SHOW_LOGIN";
	var HIDE_LOGIN = "HIDE_LOGIN";
	var CHANGE_USERNAME = "CHANGE_USERNAME";
	var CHANGE_PASSWORD = "CHANGE_PASSWORD";
	var CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
	var SHOW_SNACKBAR = "SHOW_SNACKBAR";
	var INITIAL_STATE = "INITIAL_STATE";
	var INITIAL_STATE_FINISH = "INITIAL_STATE_FINISH";

	function initial_state_finish(data) {
		return {
			type: INITIAL_STATE_FINISH,
			data: data
		};
	}

	function initial_state() {
		return function (dispatch, getState) {
			dispatch(show_snackbar("initial..."));
			var token = window.localStorage.getItem('token');
			if (token === null) {
				dispatch(initial_state_finish({}));
				return;
			}
			window.fetch("" + _config.baseUrl + _config.userInfoUrl, {
				method: 'GET',
				headers: {
					token: token
				}
			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(initial_state_finish({
								user: {
									login: true,
									username: data.username
								}
							}));
						} else {
							window.localStorage.removeItem('token');
							dispatch(show_snackbar("登录超时，请重新登录"));
							dispatch(initial_state_finish({}));
						}
					});
				} else {
					dispatch(show_snackbar("response error"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}

	function show_snackbar(msg) {
		return {
			type: SHOW_SNACKBAR,
			msg: msg
		};
	}

	function close_snackbar() {
		return {
			type: CLOSE_SNACKBAR
		};
	}

	function logout_finish() {
		return {
			type: LOGOUT_FINISH
		};
	}

	function logout() {
		return function (dispatch, getState) {
			var token = window.localStorage.getItem('token');
			window.fetch("" + _config.baseUrl + _config.logoutUrl, {
				method: 'GET',
				headers: {
					token: token
				}
			}).then(function (response) {
				window.localStorage.removeItem('token');
				dispatch(initial_state_finish({})); // login again
			}, function (err) {
				console.log(err);
			}).then(function () {
				dispatch(logout_finish());
			});
		};
	}

	function login_finish(data) {
		return {
			type: LOGIN_FINISH,
			data: data
		};
	}

	function login() {
		return function (dispatch, getState) {
			dispatch(hide_login());
			var result = {
				state: false,
				msg: ''
			};
			var username = getState().admin.loginState.username;
			var password = getState().admin.loginState.password;
			var paramStr = "name=" + username + "&password=" + password;
			window.fetch("" + _config.baseUrl + _config.loginUrl, {
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

	function change_username(e) {
		return {
			type: CHANGE_USERNAME,
			data: e.target.value
		};
	}

	function change_password(e) {
		return {
			type: CHANGE_PASSWORD,
			data: e.target.value
		};
	}

	function show_login() {
		return {
			type: SHOW_LOGIN
		};
	}

	function hide_login() {
		return {
			type: HIDE_LOGIN
		};
	}

/***/ }

})