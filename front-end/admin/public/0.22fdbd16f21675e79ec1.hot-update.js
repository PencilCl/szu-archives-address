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
			width: '80px'
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
				var province = this.props.province;


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
							onChange: this.handleChange
						},
						province.items.map(function (item, index) {
							_react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: item });
						})
					)
				);
			}
		}]);

		return Address;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			province: state.address.province
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, addressActions)(Address);

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(249);

	var _admin = __webpack_require__(626);

	var _admin2 = _interopRequireDefault(_admin);

	var _address = __webpack_require__(629);

	var _address2 = _interopRequireDefault(_address);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
		admin: _admin2.default,
		address: _address2.default
	});

	exports.default = rootReducer;

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.login = login;

	var _config = __webpack_require__(582);

	var LOGIN = "LOGIN";

	function login() {
		return function (dispatch, getState) {
			dispatch(hide_login());
			var result = {
				state: false,
				msg: ''
			};
			var username = getState().admin.loginState.username;
			var password = getState().admin.loginState.password;
			var paramStr = 'name=' + username + '&password=' + password;
			window.fetch('' + _config.baseUrl + loginUrl, {
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
			items: ['广东省', '福建省', '北京市']
		}
	};

	var generate_new_state = function generate_new_state(state) {
		var newState = (0, _immutable.fromJS)(state);
		return newState.toJS();
	};

	function address() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			default:
				return state;
		}
	}

/***/ }

})