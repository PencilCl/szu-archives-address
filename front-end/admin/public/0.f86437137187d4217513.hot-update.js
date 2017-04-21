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
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(AddressTable, [{
			key: 'render',
			value: function render() {
				var addresses = this.props.addresses;


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
								return _react2.default.createElement(
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
										_react2.default.createElement(_FlatButton2.default, { label: '\u67E5\u770B/\u7F16\u8F91', primary: true })
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										{ width: 80 },
										_react2.default.createElement(_FlatButton2.default, { label: '\u5220\u9664', secondary: true })
									)
								);
							})
						)
					),
					addresses.length > 1 ? _react2.default.createElement(_Pagination2.default, { currentPage: this.state.currentPage, totlePage: addresses.length / 10 }) : null
				);
			}
		}]);

		return AddressTable;
	}(_react.Component);

	exports.default = AddressTable;

/***/ },

/***/ 647:
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

	var paginationWrapperStyle = {
		textAlign: 'center',
		overflow: 'hidden'
	};

	var paginationStyle = {
		display: 'inline-block',
		margin: '10px 0px'
	};

	var Pagination = function (_Component) {
		_inherits(Pagination, _Component);

		function Pagination() {
			_classCallCheck(this, Pagination);

			return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
		}

		_createClass(Pagination, [{
			key: '_changePage',
			value: function _changePage(id, event) {
				var changePage = this.props.changePage;

				changePage(id);
			}

			/**
	   * 生成需要显示的页面列表
	   * @return {array} [
	   *   {
	   *   	name: 上一页,
	   *   	current: false,
	   *   	id: currentPage - 1
	   *   },
	   *   ...
	   * ]
	   */

		}, {
			key: '_buildPageList',
			value: function _buildPageList() {
				var _props = this.props,
				    currentPage = _props.currentPage,
				    totlePage = _props.totlePage;

				if (totlePage < 1) {
					return [];
				}
				var pageList = [];
				pageList.push({ name: '上一页', current: currentPage == 1, id: currentPage - 1 });
				var i = currentPage - 4 + (currentPage + 5 > totlePage ? totlePage - currentPage - 5 : 0);
				i = i < 1 ? 1 : i;
				while (i < currentPage) {
					pageList.push({ name: i, id: i });
					++i;
				}
				pageList.push({ name: i, current: true, id: i });
				++i;
				var max = i + 4 - (currentPage >= 5 ? 0 : currentPage - 5);
				max = max > totlePage ? totlePage : max;
				while (i <= max) {
					pageList.push({ name: i, id: i });
					++i;
				}
				pageList.push({ name: '下一页', current: currentPage == totlePage, id: currentPage + 1 });
				return pageList;
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var pageList = this._buildPageList();
				return _react2.default.createElement(
					'div',
					{ style: paginationWrapperStyle },
					_react2.default.createElement(
						'ul',
						{ className: 'pagination' },
						pageList.map(function (page, index) {
							return _react2.default.createElement(
								'li',
								{ key: index, onClick: page.current ? null : function (event) {
										return _this2._changePage(page.id, event);
									}, className: page.current ? "current-page" : "" },
								page.name
							);
						})
					)
				);
			}
		}]);

		return Pagination;
	}(_react.Component);

	Pagination.PropTypes = {
		currentPage: _react.PropTypes.number.isRequired,
		totlePage: _react.PropTypes.number.isRequired,
		changePage: _react.PropTypes.func.isRequired
	};

	exports.default = Pagination;

/***/ }

})