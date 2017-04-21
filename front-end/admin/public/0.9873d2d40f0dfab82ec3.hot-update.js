webpackHotUpdate(0,{

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SelectField = __webpack_require__(590);

	var _SelectField2 = _interopRequireDefault(_SelectField);

	var _MenuItem = __webpack_require__(628);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
		container: {
			paddingLeft: '10px'
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
							floatingLabelText: 'Frequency',
							value: this.state.value,
							onChange: this.handleChange
						},
						_react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Custom width' }),
						_react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night' }),
						_react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights' }),
						_react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends' }),
						_react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly' })
					)
				);
			}
		}]);

		return Address;
	}(_react.Component);

	exports.default = Address;

/***/ }

})