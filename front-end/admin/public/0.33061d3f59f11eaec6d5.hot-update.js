webpackHotUpdate(0,{

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _MuiThemeProvider = __webpack_require__(272);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _reactRedux = __webpack_require__(242);

	var _reactTapEventPlugin = __webpack_require__(419);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _Snackbar = __webpack_require__(425);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _Login = __webpack_require__(559);

	var _Login2 = _interopRequireDefault(_Login);

	var _SideBar = __webpack_require__(574);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _admin = __webpack_require__(581);

	var adminActions = _interopRequireWildcard(_admin);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(0, _reactTapEventPlugin2.default)();

	var styles = {
		container: {
			padding: 0,
			marginLeft: '250px',
			overflow: 'hidden',
			width: 'auto'
		}
	};

	var Admin = function (_Component) {
		_inherits(Admin, _Component);

		function Admin() {
			_classCallCheck(this, Admin);

			return _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).apply(this, arguments));
		}

		_createClass(Admin, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.props.initial_state();
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    history = _props.history,
				    loginState = _props.loginState,
				    user = _props.user,
				    snackbar = _props.snackbar;
				var _props2 = this.props,
				    change_username = _props2.change_username,
				    change_password = _props2.change_password,
				    show_login = _props2.show_login,
				    login = _props2.login,
				    logout = _props2.logout,
				    hide_login = _props2.hide_login,
				    close_snackbar = _props2.close_snackbar;
				var isActive = history.isActive;

				return _react2.default.createElement(
					_MuiThemeProvider2.default,
					null,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Snackbar2.default, {
							open: snackbar.open,
							message: snackbar.message,
							autoHideDuration: snackbar.autoHideDuration,
							onRequestClose: close_snackbar
						}),
						_react2.default.createElement(_Login2.default, _extends({}, loginState, { onChangeUserName: change_username, onChangePassword: change_password, handleLogin: login, handleCloseLogin: hide_login })),
						_react2.default.createElement(_SideBar2.default, { login: show_login, logout: logout, user: user }),
						_react2.default.createElement(
							'div',
							{ style: styles.container },
							_react2.default.cloneElement(this.props.children, { user: user })
						)
					)
				);
			}
		}]);

		return Admin;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			loginState: state.admin.loginState,
			user: state.admin.user,
			snackbar: state.admin.snackbar
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, adminActions)(Admin);

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(242);

	var _SelectField = __webpack_require__(584);

	var _SelectField2 = _interopRequireDefault(_SelectField);

	var _MenuItem = __webpack_require__(622);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _AddressTable = __webpack_require__(630);

	var _AddressTable2 = _interopRequireDefault(_AddressTable);

	var _FloatingActionButton = __webpack_require__(648);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _FlatButton = __webpack_require__(534);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _refresh = __webpack_require__(650);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _Dialog = __webpack_require__(560);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _TextField = __webpack_require__(568);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _address = __webpack_require__(628);

	var addressActions = _interopRequireWildcard(_address);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
		container: {
			paddingLeft: '10px'
		},
		select: {
			marginRight: '20px'
		},
		refreshButton: {
			position: 'fixed',
			right: '5em',
			bottom: '5em'
		}
	};

	var Address = function (_Component) {
		_inherits(Address, _Component);

		function Address() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Address);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Address.__proto__ || Object.getPrototypeOf(Address)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeEditForm = function (event) {
				_this.props.change_edit_form_data(event.target.dataset.field, event.target.value);
			}, _this.handleChangeAddForm = function (event) {
				_this.props.change_add_form_data(event.target.dataset.field, event.target.value);
			}, _this.filterAddress = function (address) {
				var _this$props = _this.props,
				    province = _this$props.province,
				    unit = _this$props.unit,
				    depart = _this$props.depart;

				if (province.current == 0) {
					return true;
				}
				// 过滤省份
				if (address.province == province.items[province.current]) {
					if (unit.current == 0) {
						return true;
					}

					// 过滤派遣单位
					if (address.unit == unit.items[unit.current]) {
						if (depart.current == 0) {
							return true;
						}

						// 过滤部门
						return address.depart == depart.items[depart.current];
					}
				}
				return false;
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Address, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (this.props.user.login == false && nextProps.user.login == true) {
					this.props.fetch_address_data();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    province = _props.province,
				    unit = _props.unit,
				    depart = _props.depart,
				    addresses = _props.addresses,
				    addRecord = _props.addRecord,
				    deleteRecord = _props.deleteRecord,
				    editRecord = _props.editRecord;
				var _props2 = this.props,
				    changeProvince = _props2.changeProvince,
				    changeUnit = _props2.changeUnit,
				    changeDepart = _props2.changeDepart,
				    show_add_record = _props2.show_add_record,
				    hide_add_record = _props2.hide_add_record,
				    add_record = _props2.add_record,
				    show_delete_record = _props2.show_delete_record,
				    hide_delete_record = _props2.hide_delete_record,
				    delete_record = _props2.delete_record,
				    show_edit_record = _props2.show_edit_record,
				    hide_edit_record = _props2.hide_edit_record,
				    edit_record = _props2.edit_record,
				    fetch_address_data = _props2.fetch_address_data;


				var actions = {
					del: [_react2.default.createElement(_FlatButton2.default, {
						label: '\u53D6\u6D88',
						primary: true,
						onTouchTap: hide_delete_record
					}), _react2.default.createElement(_FlatButton2.default, {
						label: '\u786E\u8BA4',
						secondary: true,
						onTouchTap: delete_record
					})],
					add: [_react2.default.createElement(_FlatButton2.default, {
						label: '\u53D6\u6D88',
						primary: true,
						onTouchTap: hide_add_record
					}), _react2.default.createElement(_FlatButton2.default, {
						label: '\u6DFB\u52A0',
						secondary: true,
						onTouchTap: add_record
					})],
					edit: [_react2.default.createElement(_FlatButton2.default, {
						label: '\u53D6\u6D88',
						primary: true,
						onTouchTap: hide_edit_record
					}), _react2.default.createElement(_FlatButton2.default, {
						label: '\u4FDD\u5B58',
						secondary: true,
						onTouchTap: edit_record
					})]
				};

				return _react2.default.createElement(
					'div',
					{ style: styles.container },
					_react2.default.createElement(
						_FloatingActionButton2.default,
						{ onTouchTap: fetch_address_data, secondary: true, style: styles.refreshButton },
						_react2.default.createElement(_refresh2.default, null)
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							title: '\u63D0\u793A',
							actions: actions.del,
							modal: false,
							open: deleteRecord.show,
							onRequestClose: hide_delete_record
						},
						'\u786E\u8BA4\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F'
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							title: '\u90AE\u5BC4\u5730\u5740\u8BE6\u60C5',
							actions: actions.edit,
							modal: false,
							open: editRecord.show,
							onRequestClose: hide_edit_record,
							autoScrollBodyContent: true
						},
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u7701\u4EFD',
							value: editRecord.form.province,
							'data-field': 'province',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u6D3E\u9063\u5355\u4F4D',
							value: editRecord.form.unit,
							'data-field': 'unit',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u90E8\u95E8',
							value: editRecord.form.depart,
							'data-field': 'depart',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u7535\u8BDD',
							value: editRecord.form.phone,
							'data-field': 'phone',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u5730\u5740',
							value: editRecord.form.address,
							'data-field': 'address',
							onChange: this.handleChangeEditForm,
							multiLine: true,
							fullWidth: true
						})
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							title: '\u6DFB\u52A0\u8BB0\u5F55',
							actions: actions.add,
							modal: false,
							open: addRecord.show,
							onRequestClose: hide_add_record,
							autoScrollBodyContent: true
						},
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u7701\u4EFD',
							value: addRecord.form.province,
							'data-field': 'province',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u6D3E\u9063\u5355\u4F4D',
							value: addRecord.form.unit,
							'data-field': 'unit',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u90E8\u95E8',
							value: addRecord.form.depart,
							'data-field': 'depart',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u7535\u8BDD',
							value: addRecord.form.phone,
							'data-field': 'phone',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u5730\u5740',
							value: addRecord.form.address,
							'data-field': 'address',
							onChange: this.handleChangeAddForm,
							multiLine: true,
							fullWidth: true
						})
					),
					_react2.default.createElement(
						'h3',
						null,
						'Address'
					),
					_react2.default.createElement(
						_SelectField2.default,
						{
							style: styles.select,
							floatingLabelText: '\u7701\u4EFD',
							value: province.current,
							onChange: changeProvince,
							autoWidth: true
						},
						province.items.map(function (item, index) {
							return _react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: item });
						})
					),
					province.current !== 0 ? _react2.default.createElement(
						_SelectField2.default,
						{
							style: styles.select,
							floatingLabelText: '\u6D3E\u9063\u5355\u4F4D',
							value: unit.current,
							onChange: changeUnit,
							autoWidth: true
						},
						unit.items.map(function (item, index) {
							return _react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: item });
						})
					) : null,
					unit.current !== 0 ? _react2.default.createElement(
						_SelectField2.default,
						{
							style: styles.select,
							floatingLabelText: '\u90E8\u95E8',
							value: depart.current,
							onChange: changeDepart,
							autoWidth: true
						},
						depart.items.map(function (item, index) {
							return _react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: item });
						})
					) : null,
					_react2.default.createElement(
						'div',
						{ style: { textAlign: 'center' } },
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: show_add_record, label: '\u6CA1\u6709\u8BB0\u5F55?\u70B9\u6B64\u6DFB\u52A0', secondary: true })
					),
					_react2.default.createElement(_AddressTable2.default, { onDelete: show_delete_record, onEdit: show_edit_record, addresses: addresses.filter(this.filterAddress) })
				);
			}
		}]);

		return Address;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			province: state.address.province,
			unit: state.address.unit,
			depart: state.address.depart,
			addresses: state.address.addresses,
			addRecord: state.address.addRecord,
			deleteRecord: state.address.deleteRecord,
			editRecord: state.address.editRecord
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, addressActions)(Address);

/***/ }

})