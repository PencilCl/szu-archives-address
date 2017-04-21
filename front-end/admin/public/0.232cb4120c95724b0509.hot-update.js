webpackHotUpdate(0,{

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(179);

	var _Admin = __webpack_require__(271);

	var _Admin2 = _interopRequireDefault(_Admin);

	var _Address = __webpack_require__(589);

	var _Address2 = _interopRequireDefault(_Address);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: 'admin', component: _Admin2.default },
		_react2.default.createElement(_reactRouter.IndexRedirect, { to: 'Address' }),
		_react2.default.createElement(_reactRouter.Route, { path: 'Address', component: _Address2.default })
	);

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Menu = __webpack_require__(576);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _PersonInfo = __webpack_require__(577);

	var _PersonInfo2 = _interopRequireDefault(_PersonInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
		listGroup: {
			margin: '0px',
			padding: '0px'
		}
	};

	var MenuList = function (_Component) {
		_inherits(MenuList, _Component);

		function MenuList() {
			_classCallCheck(this, MenuList);

			return _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).apply(this, arguments));
		}

		_createClass(MenuList, [{
			key: 'render',
			value: function render() {
				var user = this.props.user;
				var _props = this.props,
				    login = _props.login,
				    logout = _props.logout;


				return _react2.default.createElement(
					'ul',
					{ style: styles.listGroup, id: 'nav-list' },
					_react2.default.createElement(_PersonInfo2.default, { login: login, logout: logout, user: user }),
					_react2.default.createElement(_Menu2.default, { focus: true, link: '/admin/Address', icon: 'fa-home', description: 'Address' })
				);
			}
		}]);

		return MenuList;
	}(_react.Component);

	exports.default = MenuList;

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
		title: {
			paddingLeft: '10px'
		}
	};

	var Address = function (_Component) {
		_inherits(Address, _Component);

		function Address() {
			_classCallCheck(this, Address);

			return _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).apply(this, arguments));
		}

		_createClass(Address, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						{ style: styles.title },
						'Address'
					)
				);
			}
		}]);

		return Address;
	}(_react.Component);

	exports.default = Address;

/***/ }

})