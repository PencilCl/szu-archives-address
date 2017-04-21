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

				return _react2.default.createElement(
					_Table.Table,
					null,
					_react2.default.createElement(
						_Table.TableHeader,
						{
							displaySelectAll: false,
							adjustForCheckbox: false,
							selectable: false,
							multiSelectable: false
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
						_react2.default.createElement(
							_Table.TableRow,
							null,
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u5E7F\u4E1C\u7701'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u6D3E\u9063\u5355\u4F4D'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u90E8\u5206'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u7535\u8BDD'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u5730\u5740'
							)
						),
						_react2.default.createElement(
							_Table.TableRow,
							null,
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u5E7F\u4E1C\u7701'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u6D3E\u9063\u5355\u4F4D2'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u90E8\u52062'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u7535\u8BDD2'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u5730\u57402'
							)
						),
						_react2.default.createElement(
							_Table.TableRow,
							null,
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u798F\u5EFA\u7701'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u6D3E\u9063\u5355\u4F4D'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u90E8\u5206'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u7535\u8BDD'
							),
							_react2.default.createElement(
								_Table.TableRowColumn,
								null,
								'\u5730\u5740'
							)
						)
					)
				);
			}
		}]);

		return AddressTable;
	}(_react.Component);

	exports.default = AddressTable;

/***/ }

})