webpackHotUpdate(0,{

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _currentPage;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _HoverComponent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"HoverComponent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _HoverComponent2 = _interopRequireDefault(_HoverComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var styles = {
		pagination: {
			display: 'inline-block',
			overflow: 'hidden'
		},
		paginationLi: {
			float: 'left',
			listStyle: 'none',
			fontSize: '1em',
			height: '1.5em',
			margin: '0px 0.5em',
			cursor: 'pointer',
			color: '#7fa6c1',
			lineHeight: '1.5em'
		},
		paginationLiHover: {
			textDecoration: 'underline'
		},
		currentPage: (_currentPage = {
			float: 'left',
			listStyle: 'none',
			fontSize: '1em',
			height: '1.5em',
			margin: '0px 0.5em',
			cursor: 'pointer',
			color: '#7fa6c1',
			lineHeight: '1.5em'
		}, _defineProperty(_currentPage, 'color', 'black'), _defineProperty(_currentPage, 'cursor', 'default'), _currentPage),
		currenetPageHover: {
			textDecoration: 'none'
		},
		paginationWrapperStyle: {
			textAlign: 'center',
			overflow: 'hidden'
		}
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
					{ style: styles.paginationWrapperStyle },
					_react2.default.createElement(
						'ul',
						{ style: styles.pagination },
						pageList.map(function (page, index) {
							return _react2.default.createElement(
								_HoverComponent2.default,
								{ style: page.current ? styles.currentPage : styles.paginationLi, hoverStyle: page.current ? styles.currenetPageHover : styles.paginationLiHover },
								_react2.default.createElement(
									'li',
									{ key: index, onClick: page.current ? null : function (event) {
											return _this2._changePage(page.id, event);
										} },
									page.name
								)
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