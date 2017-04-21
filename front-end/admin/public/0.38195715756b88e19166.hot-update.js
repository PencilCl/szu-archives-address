webpackHotUpdate(0,{

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

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Address.__proto__ || Object.getPrototypeOf(Address)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				value: 1
			}, _this.handleChange = function (event, index, value) {
				_this.setState({ value: value });
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
			key: 'render',
			value: function render() {
				var _props = this.props,
				    province = _props.province,
				    unit = _props.unit,
				    depart = _props.depart,
				    addresses = _props.addresses;
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
				    edit_record = _props2.edit_record;


				return _react2.default.createElement(
					'div',
					{ style: styles.container },
					_react2.default.createElement(
						_FloatingActionButton2.default,
						{ onTouchTap: add_record, secondary: true, style: styles.refreshButton },
						_react2.default.createElement(_refresh2.default, null)
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
						{ onTouchTap: add_record, style: { textAlign: 'center' } },
						_react2.default.createElement(_FlatButton2.default, { label: '\u6CA1\u6709\u8BB0\u5F55?\u70B9\u6B64\u6DFB\u52A0', secondary: true })
					),
					_react2.default.createElement(_AddressTable2.default, { addresses: addresses.filter(this.filterAddress) })
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
			addresses: state.address.addresses
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, addressActions)(Address);

/***/ },

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
		return function (dispatch, getState) {};
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
				return show_edit_record(state, actoin.data);
			case HIDE_EDIT_RECORD:
				return hide_edit_record(state);
			case SHOW_DELETE_RECORD:
				return show_delete_record(state, action.data);
			case HIDE_DELETE_RECORD:
				return hide_delete_record(state);
			default:
				return state;
		}
	}

/***/ }

})