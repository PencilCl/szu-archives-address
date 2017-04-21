webpackHotUpdate(0,{

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _HoverComponent = __webpack_require__(578);

	var _HoverComponent2 = _interopRequireDefault(_HoverComponent);

	var _Avatar = __webpack_require__(579);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _reactRouter = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
		personInfo: {
			paddingTop: '40px',
			marginBottom: '40px',
			textAlign: 'center',
			backgroundColor: '#222E39',
			listStyleType: 'none'
		},
		logout: {
			display: 'inline-block',
			backgroundColor: '#d75552',
			color: 'white',
			borderRadius: '5px',
			padding: '5px 8px',
			marginBottom: '10px',
			textDecoration: 'none',
			cursor: 'pointer',
			transition: 'all .5s'
		},
		logoutHovered: {
			backgroundColor: '#CA3030'
		},
		login: {
			display: 'inline-block',
			backgroundColor: '#9ADE69',
			color: 'white',
			borderRadius: '5px',
			padding: '5px 8px',
			marginBottom: '10px',
			textDecoration: 'none',
			cursor: 'pointer',
			transition: 'all .5s'
		},
		loginHovered: {
			backgroundColor: '#5DC450'
		},
		username: {
			margin: '0px',
			fontSize: '1.5em',
			textDecoration: 'none',
			transition: 'all .5s',
			color: '#627D8F'
		},
		usernameHovered: {
			color: '#7FA6C1',
			textDecoration: 'underline'
		}
	};

	var PersonInfo = function (_Component) {
		_inherits(PersonInfo, _Component);

		function PersonInfo() {
			_classCallCheck(this, PersonInfo);

			return _possibleConstructorReturn(this, (PersonInfo.__proto__ || Object.getPrototypeOf(PersonInfo)).apply(this, arguments));
		}

		_createClass(PersonInfo, [{
			key: 'render',
			value: function render() {
				var user = this.props.user;
				var _props = this.props,
				    login = _props.login,
				    logout = _props.logout;

				if (!user.login) {
					user.username = "";
				}
				return _react2.default.createElement(
					'li',
					{ style: styles.personInfo },
					_react2.default.createElement(
						_Avatar2.default,
						{
							color: 'white',
							backgroundColor: 'black',
							size: 100
						},
						user.username.substr(0, 1)
					),
					_react2.default.createElement(
						'p',
						{ id: 'username' },
						_react2.default.createElement(
							_HoverComponent2.default,
							{ style: styles.username, hoverStyle: styles.usernameHovered },
							_react2.default.createElement(
								'a',
								{ href: '#' },
								user.username
							)
						)
					),
					user.login ? _react2.default.createElement(
						_HoverComponent2.default,
						{ style: styles.logout, hoverStyle: styles.logoutHovered },
						_react2.default.createElement(
							_reactRouter.Link,
							{ id: 'logout', onTouchTap: logout },
							'\u9000\u51FA'
						)
					) : _react2.default.createElement(
						_HoverComponent2.default,
						{ style: styles.login, hoverStyle: styles.loginHovered },
						_react2.default.createElement(
							_reactRouter.Link,
							{ id: 'login', onTouchTap: login },
							'\u767B\u5F55'
						)
					)
				);
			}
		}]);

		return PersonInfo;
	}(_react.Component);

	PersonInfo.PropTypes = {
		avatar: _react.PropTypes.string.isRequired,
		username: _react.PropTypes.string.isRequired
	};

	exports.default = PersonInfo;

/***/ }

})