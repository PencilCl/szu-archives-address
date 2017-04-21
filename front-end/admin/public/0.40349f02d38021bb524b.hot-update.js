webpackHotUpdate(0,{

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(560);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(534);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _TextField = __webpack_require__(568);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_Component) {
		_inherits(Login, _Component);

		function Login() {
			_classCallCheck(this, Login);

			return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
		}

		_createClass(Login, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    username = _props.username,
				    password = _props.password,
				    open = _props.open;
				var _props2 = this.props,
				    onChangeUserName = _props2.onChangeUserName,
				    onChangePassword = _props2.onChangePassword,
				    handleLogin = _props2.handleLogin,
				    handleCloseLogin = _props2.handleCloseLogin;


				var actions = [_react2.default.createElement(_FlatButton2.default, {
					label: 'Cancel',
					secondary: true,
					onTouchTap: handleCloseLogin
				}), _react2.default.createElement(_FlatButton2.default, {
					label: 'Login',
					primary: true,
					onTouchTap: handleLogin
				})];

				return _react2.default.createElement(
					_Dialog2.default,
					{
						title: '\u6863\u6848\u90AE\u5BC4\u67E5\u8BE2\u540E\u53F0\u7BA1\u7406 - \u767B\u5F55',
						autoScrollBodyContent: true,
						actions: actions,
						modal: true,
						open: open
					},
					_react2.default.createElement(_TextField2.default, {
						floatingLabelText: 'UserName',
						value: username,
						fullWidth: true,
						onChange: onChangeUserName
					}),
					_react2.default.createElement(_TextField2.default, {
						floatingLabelText: 'Password',
						type: 'password',
						value: password,
						fullWidth: true,
						onChange: onChangePassword
					})
				);
			}
		}]);

		return Login;
	}(_react.Component);

	exports.default = Login;

/***/ }

})