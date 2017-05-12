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

	var _AddressTable = __webpack_require__(623);

	var _AddressTable2 = _interopRequireDefault(_AddressTable);

	var _FloatingActionButton = __webpack_require__(641);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _FlatButton = __webpack_require__(534);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _refresh = __webpack_require__(643);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _Dialog = __webpack_require__(560);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _TextField = __webpack_require__(568);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Toggle = __webpack_require__(644);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _address = __webpack_require__(646);

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
		},
		toggle: {
			width: 'auto',
			marginTop: '10px'
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
				    city = _this$props.city,
				    depart = _this$props.depart,
				    manual = _this$props.manual,
				    modified = _this$props.modified;

				// 过滤手动添加的数据

				if (manual) {
					if (address.autoImport) {
						return false;
					}
				}

				// 过滤编辑过的数据
				if (modified) {
					if (address.modified == false) {
						return false;
					}
				}

				if (province.current == 0) {
					return true;
				}

				// 过滤省份
				if (address.province == province.items[province.current]) {
					if (city.current == 0) {
						return true;
					}

					// 过滤派遣单位
					if (address.city == city.items[city.current]) {
						if (depart.current == 0) {
							return true;
						}

						// 过滤部门
						return address.depart == depart.items[depart.current];
					}
				}
				return false;
			}, _this.chooseXml = function () {
				_this.refs.xml.click();
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Address, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				var _this2 = this;

				if (this.props.user.login == false && nextProps.user.login == true) {
					setTimeout(function () {
						_this2.props.fetch_address_data();
					}, 500);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    province = _props.province,
				    city = _props.city,
				    depart = _props.depart,
				    manual = _props.manual,
				    modified = _props.modified,
				    addresses = _props.addresses,
				    addRecord = _props.addRecord,
				    deleteRecord = _props.deleteRecord,
				    editRecord = _props.editRecord;
				var _props2 = this.props,
				    changeProvince = _props2.changeProvince,
				    changeCity = _props2.changeCity,
				    changeDepart = _props2.changeDepart,
				    filter_manual = _props2.filter_manual,
				    filter_modified = _props2.filter_modified,
				    show_add_record = _props2.show_add_record,
				    hide_add_record = _props2.hide_add_record,
				    add_record = _props2.add_record,
				    show_delete_record = _props2.show_delete_record,
				    hide_delete_record = _props2.hide_delete_record,
				    delete_record = _props2.delete_record,
				    show_edit_record = _props2.show_edit_record,
				    hide_edit_record = _props2.hide_edit_record,
				    edit_record = _props2.edit_record,
				    fetch_address_data = _props2.fetch_address_data,
				    upload_xls = _props2.upload_xls;


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
							floatingLabelText: '\u5E02/\u533A',
							value: editRecord.form.city,
							'data-field': 'city',
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
							floatingLabelText: '\u5E02/\u533A',
							value: addRecord.form.city,
							'data-field': 'city',
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
						'\u5730\u5740'
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
							floatingLabelText: '\u5E02/\u533A',
							value: city.current,
							onChange: changeCity,
							autoWidth: true
						},
						city.items.map(function (item, index) {
							return _react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: item });
						})
					) : null,
					city.current !== 0 ? _react2.default.createElement(
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
						null,
						_react2.default.createElement(_Toggle2.default, {
							label: '\u8FC7\u6EE4\u624B\u52A8\u6DFB\u52A0\u6570\u636E',
							style: styles.toggle,
							toggled: manual,
							onToggle: filter_manual }),
						_react2.default.createElement(_Toggle2.default, {
							label: '\u8FC7\u6EE4\u7F16\u8F91\u8FC7\u7684\u6570\u636E',
							style: styles.toggle,
							toggled: modified,
							onToggle: filter_modified })
					),
					_react2.default.createElement(
						'div',
						{ style: { textAlign: 'center' } },
						'\u6CA1\u6709\u8BB0\u5F55?',
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: show_add_record, label: '\u70B9\u6B64\u6DFB\u52A0', secondary: true }),
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: this.chooseXml, label: '\u6279\u91CF\u5BFC\u5165', primary: true }),
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {
								return show_delete_record("all");
							}, label: '\u5220\u9664\u5168\u90E8', secondary: true }),
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {
								return show_delete_record("manual");
							}, label: '\u5220\u9664\u624B\u52A8\u6DFB\u52A0\u6570\u636E', secondary: true }),
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {
								return show_delete_record("import");
							}, label: '\u5220\u9664\u5BFC\u5165\u6570\u636E', secondary: true }),
						_react2.default.createElement(
							'div',
							{ style: { display: 'none' } },
							_react2.default.createElement('input', { ref: 'xml', type: 'file', onChange: function onChange(e) {
									return upload_xls(e, fetch_address_data);
								} })
						)
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
			city: state.address.city,
			depart: state.address.depart,
			manual: state.address.filterManual,
			modified: state.address.filterModified,
			addresses: state.address.addresses,
			addRecord: state.address.addRecord,
			deleteRecord: state.address.deleteRecord,
			editRecord: state.address.editRecord
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, addressActions)(Address);

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = address;

	var _immutable = __webpack_require__(651);

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
		if (id == 'all') {
			newState.addresses = [];
		} else if (id == 'manual') {
			newState.addresses = newState.addresses.filter(function (address) {
				return address.autoImport;
			});
		} else if (id == 'import') {
			newState.addresses = newState.addresses.filter(function (address) {
				return address.autoImport == false;
			});
		} else {
			newState.addresses = newState.addresses.filter(function (address) {
				return address._id != id;
			});
		}
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