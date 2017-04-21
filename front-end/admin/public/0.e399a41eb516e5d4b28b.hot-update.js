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
			console.log("delete record: " + getState().address.deleteRecord.id);
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

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(631);

	var _FlatButton = __webpack_require__(534);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _Pagination = __webpack_require__(647);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ROWS = 10;

	var AddressTable = function (_Component) {
		_inherits(AddressTable, _Component);

		function AddressTable() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, AddressTable);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressTable.__proto__ || Object.getPrototypeOf(AddressTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				currentPage: 1
			}, _this.changePage = function (page) {
				_this.setState({ currentPage: page });
			}, _this.handleDelete = function (id) {
				return function () {
					_this.props.onDelete(id);
				};
			}, _this.handleEdit = function (id) {
				return function () {
					_this.props.onEdit(id);
				};
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(AddressTable, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var addresses = this.props.addresses;


				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_Table.Table,
						{
							selectable: false
						},
						_react2.default.createElement(
							_Table.TableHeader,
							{
								displaySelectAll: false,
								adjustForCheckbox: false
							},
							_react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									{ width: 60 },
									'\u7701\u4EFD'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'\u6D3E\u9063\u5355\u4F4D'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'\u90E8\u95E8'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'\u7535\u8BDD'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'\u5730\u5740'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									{ width: 80 },
									'\u64CD\u4F5C'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									{ width: 80 },
									'\u5220\u9664'
								)
							)
						),
						_react2.default.createElement(
							_Table.TableBody,
							{
								displayRowCheckbox: false,
								showRowHover: true
							},
							addresses.map(function (address, index) {
								return _react2.default.createElement(
									_Table.TableRow,
									{ key: index },
									_react2.default.createElement(
										_Table.TableRowColumn,
										{ width: 60 },
										address.province
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										null,
										address.unit
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										null,
										address.depart
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										null,
										address.phone
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										null,
										address.address
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										{ width: 80 },
										_react2.default.createElement(_FlatButton2.default, { onTouchTap: _this2.handleEdit(address._id), label: '\u67E5\u770B/\u7F16\u8F91', primary: true })
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										{ width: 80 },
										_react2.default.createElement(_FlatButton2.default, { onTouchTap: _this2.handleDelete(address._id), label: '\u5220\u9664', secondary: true })
									)
								);
							})
						)
					),
					_react2.default.createElement(_Pagination2.default, { changePage: this.changePage, currentPage: this.state.currentPage, totlePage: Math.ceil(addresses.length / ROWS) })
				);
			}
		}]);

		return AddressTable;
	}(_react.Component);

	exports.default = AddressTable;

/***/ }

})