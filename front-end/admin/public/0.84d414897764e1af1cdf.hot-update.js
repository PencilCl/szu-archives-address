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
				    changeDepart = _props2.changeDepart;


				return _react2.default.createElement(
					'div',
					{ style: styles.container },
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
					_react2.default.createElement(_AddressTable2.default, { addresses: addresses })
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

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

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
			default:
				return state;
		}
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddressTable = function (_Component) {
		_inherits(AddressTable, _Component);

		function AddressTable() {
			_classCallCheck(this, AddressTable);

			return _possibleConstructorReturn(this, (AddressTable.__proto__ || Object.getPrototypeOf(AddressTable)).apply(this, arguments));
		}

		_createClass(AddressTable, [{
			key: 'render',
			value: function render() {
				var addresses = this.props.addresses;


				return _react2.default.createElement(
					_Table.Table,
					null,
					_react2.default.createElement(
						_Table.TableHeader,
						{
							displaySelectAll: false,
							adjustForCheckbox: false,
							selectable: true
						},
						_react2.default.createElement(
							_Table.TableRow,
							null,
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								null,
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
							)
						)
					),
					_react2.default.createElement(
						_Table.TableBody,
						{
							displayRowCheckbox: false,
							showRowHover: true
						},
						addresses.map(function (address) {
							return _react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
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
								)
							);
						})
					)
				);
			}
		}]);

		return AddressTable;
	}(_react.Component);

	exports.default = AddressTable;

/***/ }

})