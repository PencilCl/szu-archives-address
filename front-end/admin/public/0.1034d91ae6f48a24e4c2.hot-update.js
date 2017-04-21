webpackHotUpdate(0,{

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
				var currentPage = this.state.currentPage;


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
								return index >= (currentPage - 1) * ROWS && index <= currentPage * ROWS ? _react2.default.createElement(
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
								) : null;
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