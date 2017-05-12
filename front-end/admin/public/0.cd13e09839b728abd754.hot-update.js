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

	var _AddressTable = __webpack_require__(623);

	var _AddressTable2 = _interopRequireDefault(_AddressTable);

	var _FloatingActionButton = __webpack_require__(641);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _FlatButton = __webpack_require__(534);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _refresh = __webpack_require__(643);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _Dialog = __webpack_require__(560);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _TextField = __webpack_require__(568);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Toggle = __webpack_require__(651);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _address = __webpack_require__(644);

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
		},
		refreshButton: {
			position: 'fixed',
			right: '5em',
			bottom: '5em'
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

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Address.__proto__ || Object.getPrototypeOf(Address)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeEditForm = function (event) {
				_this.props.change_edit_form_data(event.target.dataset.field, event.target.value);
			}, _this.handleChangeAddForm = function (event) {
				_this.props.change_add_form_data(event.target.dataset.field, event.target.value);
			}, _this.filterAddress = function (address) {
				var _this$props = _this.props,
				    province = _this$props.province,
				    city = _this$props.city,
				    depart = _this$props.depart;

				if (province.current == 0) {
					return true;
				}
				// 过滤省份
				if (address.province == province.items[province.current]) {
					if (city.current == 0) {
						return true;
					}

					// 过滤派遣单位
					if (address.city == city.items[city.current]) {
						if (depart.current == 0) {
							return true;
						}

						// 过滤部门
						return address.depart == depart.items[depart.current];
					}
				}
				return false;
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Address, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				var _this2 = this;

				if (this.props.user.login == false && nextProps.user.login == true) {
					setTimeout(function () {
						_this2.props.fetch_address_data();
					}, 500);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    province = _props.province,
				    city = _props.city,
				    depart = _props.depart,
				    addresses = _props.addresses,
				    addRecord = _props.addRecord,
				    deleteRecord = _props.deleteRecord,
				    editRecord = _props.editRecord;
				var _props2 = this.props,
				    changeProvince = _props2.changeProvince,
				    changeCity = _props2.changeCity,
				    changeDepart = _props2.changeDepart,
				    show_add_record = _props2.show_add_record,
				    hide_add_record = _props2.hide_add_record,
				    add_record = _props2.add_record,
				    show_delete_record = _props2.show_delete_record,
				    hide_delete_record = _props2.hide_delete_record,
				    delete_record = _props2.delete_record,
				    show_edit_record = _props2.show_edit_record,
				    hide_edit_record = _props2.hide_edit_record,
				    edit_record = _props2.edit_record,
				    fetch_address_data = _props2.fetch_address_data;


				var actions = {
					del: [_react2.default.createElement(_FlatButton2.default, {
						label: '\u53D6\u6D88',
						primary: true,
						onTouchTap: hide_delete_record
					}), _react2.default.createElement(_FlatButton2.default, {
						label: '\u786E\u8BA4',
						secondary: true,
						onTouchTap: delete_record
					})],
					add: [_react2.default.createElement(_FlatButton2.default, {
						label: '\u53D6\u6D88',
						primary: true,
						onTouchTap: hide_add_record
					}), _react2.default.createElement(_FlatButton2.default, {
						label: '\u6DFB\u52A0',
						secondary: true,
						onTouchTap: add_record
					})],
					edit: [_react2.default.createElement(_FlatButton2.default, {
						label: '\u53D6\u6D88',
						primary: true,
						onTouchTap: hide_edit_record
					}), _react2.default.createElement(_FlatButton2.default, {
						label: '\u4FDD\u5B58',
						secondary: true,
						onTouchTap: edit_record
					})]
				};

				return _react2.default.createElement(
					'div',
					{ style: styles.container },
					_react2.default.createElement(
						_FloatingActionButton2.default,
						{ onTouchTap: fetch_address_data, secondary: true, style: styles.refreshButton },
						_react2.default.createElement(_refresh2.default, null)
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							title: '\u63D0\u793A',
							actions: actions.del,
							modal: false,
							open: deleteRecord.show,
							onRequestClose: hide_delete_record
						},
						'\u786E\u8BA4\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F'
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							title: '\u90AE\u5BC4\u5730\u5740\u8BE6\u60C5',
							actions: actions.edit,
							modal: false,
							open: editRecord.show,
							onRequestClose: hide_edit_record,
							autoScrollBodyContent: true
						},
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u7701\u4EFD',
							value: editRecord.form.province,
							'data-field': 'province',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u5E02/\u533A',
							value: editRecord.form.city,
							'data-field': 'city',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u90E8\u95E8',
							value: editRecord.form.depart,
							'data-field': 'depart',
							onChange: this.handleChangeEditForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u5730\u5740',
							value: editRecord.form.address,
							'data-field': 'address',
							onChange: this.handleChangeEditForm,
							multiLine: true,
							fullWidth: true
						})
					),
					_react2.default.createElement(
						_Dialog2.default,
						{
							title: '\u6DFB\u52A0\u8BB0\u5F55',
							actions: actions.add,
							modal: false,
							open: addRecord.show,
							onRequestClose: hide_add_record,
							autoScrollBodyContent: true
						},
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u7701\u4EFD',
							value: addRecord.form.province,
							'data-field': 'province',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u5E02/\u533A',
							value: addRecord.form.city,
							'data-field': 'city',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u90E8\u95E8',
							value: addRecord.form.depart,
							'data-field': 'depart',
							onChange: this.handleChangeAddForm,
							fullWidth: true
						}),
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: '\u5730\u5740',
							value: addRecord.form.address,
							'data-field': 'address',
							onChange: this.handleChangeAddForm,
							multiLine: true,
							fullWidth: true
						})
					),
					_react2.default.createElement(
						'h3',
						null,
						'\u5730\u5740'
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
							floatingLabelText: '\u5E02/\u533A',
							value: city.current,
							onChange: changeCity,
							autoWidth: true
						},
						city.items.map(function (item, index) {
							return _react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: item });
						})
					) : null,
					city.current !== 0 ? _react2.default.createElement(
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
					_react2.default.createElement(_Toggle2.default, { label: '\u8FC7\u6EE4\u624B\u52A8\u6DFB\u52A0\u6570\u636E' }),
					_react2.default.createElement(_Toggle2.default, { label: '\u8FC7\u6EE4\u88AB\u4FEE\u6539\u6570\u636E' }),
					_react2.default.createElement(
						'div',
						{ style: { textAlign: 'center' } },
						_react2.default.createElement(_FlatButton2.default, { onTouchTap: show_add_record, label: '\u6CA1\u6709\u8BB0\u5F55?\u70B9\u6B64\u6DFB\u52A0', secondary: true })
					),
					_react2.default.createElement(_AddressTable2.default, { onDelete: show_delete_record, onEdit: show_edit_record, addresses: addresses.filter(this.filterAddress) })
				);
			}
		}]);

		return Address;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			province: state.address.province,
			city: state.address.city,
			depart: state.address.depart,
			addresses: state.address.addresses,
			addRecord: state.address.addRecord,
			deleteRecord: state.address.deleteRecord,
			editRecord: state.address.editRecord
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, addressActions)(Address);

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Toggle = __webpack_require__(652);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Toggle2.default;

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(427);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(432);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(273);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(299);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(300);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(304);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(351);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(433);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(434);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _Paper = __webpack_require__(565);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _EnhancedSwitch = __webpack_require__(632);

	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context, state) {
	  var disabled = props.disabled,
	      elementStyle = props.elementStyle,
	      trackSwitchedStyle = props.trackSwitchedStyle,
	      thumbSwitchedStyle = props.thumbSwitchedStyle,
	      trackStyle = props.trackStyle,
	      thumbStyle = props.thumbStyle,
	      iconStyle = props.iconStyle,
	      rippleStyle = props.rippleStyle,
	      labelStyle = props.labelStyle;
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      toggle = _context$muiTheme.toggle;


	  var toggleSize = 20;
	  var toggleTrackWidth = 36;
	  var styles = {
	    icon: {
	      width: 36,
	      padding: '4px 0px 6px 2px'
	    },
	    ripple: {
	      top: -10,
	      left: -10,
	      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
	    },
	    toggleElement: {
	      width: toggleTrackWidth
	    },
	    track: {
	      transition: _transitions2.default.easeOut(),
	      width: '100%',
	      height: 14,
	      borderRadius: 30,
	      backgroundColor: toggle.trackOffColor
	    },
	    thumb: {
	      transition: _transitions2.default.easeOut(),
	      position: 'absolute',
	      top: 1,
	      left: 0,
	      width: toggleSize,
	      height: toggleSize,
	      lineHeight: '24px',
	      borderRadius: '50%',
	      backgroundColor: toggle.thumbOffColor
	    },
	    trackWhenSwitched: {
	      backgroundColor: toggle.trackOnColor
	    },
	    thumbWhenSwitched: {
	      backgroundColor: toggle.thumbOnColor,
	      left: '100%'
	    },
	    trackWhenDisabled: {
	      backgroundColor: toggle.trackDisabledColor
	    },
	    thumbWhenDisabled: {
	      backgroundColor: toggle.thumbDisabledColor
	    },
	    label: {
	      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
	      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
	    }
	  };

	  (0, _simpleAssign2.default)(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);

	  (0, _simpleAssign2.default)(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);

	  if (state.switched) {
	    styles.thumb.marginLeft = 0 - styles.thumb.width;
	  }

	  (0, _simpleAssign2.default)(styles.icon, iconStyle);

	  (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

	  (0, _simpleAssign2.default)(styles.label, labelStyle);

	  (0, _simpleAssign2.default)(styles.toggleElement, elementStyle);

	  return styles;
	}

	var Toggle = function (_Component) {
	  (0, _inherits3.default)(Toggle, _Component);

	  function Toggle() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Toggle);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      switched: false
	    }, _this.handleStateChange = function (newSwitched) {
	      _this.setState({
	        switched: newSwitched
	      });
	    }, _this.handleToggle = function (event, isInputChecked) {
	      if (_this.props.onToggle) {
	        _this.props.onToggle(event, isInputChecked);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Toggle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          toggled = _props.toggled,
	          defaultToggled = _props.defaultToggled,
	          valueLink = _props.valueLink;


	      if (toggled || defaultToggled || valueLink && valueLink.value) {
	        this.setState({
	          switched: true
	        });
	      }
	    }
	  }, {
	    key: 'isToggled',
	    value: function isToggled() {
	      return this.refs.enhancedSwitch.isSwitched();
	    }
	  }, {
	    key: 'setToggled',
	    value: function setToggled(newToggledValue) {
	      this.refs.enhancedSwitch.setSwitched(newToggledValue);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          defaultToggled = _props2.defaultToggled,
	          elementStyle = _props2.elementStyle,
	          onToggle = _props2.onToggle,
	          trackSwitchedStyle = _props2.trackSwitchedStyle,
	          thumbSwitchedStyle = _props2.thumbSwitchedStyle,
	          toggled = _props2.toggled,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      var toggleElement = _react2.default.createElement(
	        'div',
	        { style: prepareStyles((0, _simpleAssign2.default)({}, styles.toggleElement)) },
	        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.track)) }),
	        _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 })
	      );

	      var enhancedSwitchProps = {
	        ref: 'enhancedSwitch',
	        inputType: 'checkbox',
	        switchElement: toggleElement,
	        rippleStyle: styles.ripple,
	        rippleColor: styles.ripple.color,
	        iconStyle: styles.icon,
	        trackStyle: styles.track,
	        thumbStyle: styles.thumb,
	        labelStyle: styles.label,
	        switched: this.state.switched,
	        onSwitch: this.handleToggle,
	        onParentShouldUpdate: this.handleStateChange,
	        labelPosition: this.props.labelPosition
	      };

	      if (this.props.hasOwnProperty('toggled')) {
	        enhancedSwitchProps.checked = toggled;
	      } else if (this.props.hasOwnProperty('defaultToggled')) {
	        enhancedSwitchProps.defaultChecked = defaultToggled;
	      }

	      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
	    }
	  }]);
	  return Toggle;
	}(_react.Component);

	Toggle.defaultProps = {
	  defaultToggled: false,
	  disabled: false,
	  labelPosition: 'left'
	};
	Toggle.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Toggle.propTypes = {
	  /**
	   * Determines whether the Toggle is initially turned on.
	   * **Warning:** This cannot be used in conjunction with `toggled`.
	   * Decide between using a controlled or uncontrolled input element and remove one of these props.
	   * More info: https://fb.me/react-controlled-components
	   */
	  defaultToggled: _react.PropTypes.bool,
	  /**
	   * Will disable the toggle if true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Overrides the inline-styles of the Toggle element.
	   */
	  elementStyle: _react.PropTypes.object,
	  /**
	   * Overrides the inline-styles of the Icon element.
	   */
	  iconStyle: _react.PropTypes.object,
	  /**
	   * Overrides the inline-styles of the input element.
	   */
	  inputStyle: _react.PropTypes.object,
	  /**
	   * Label for toggle.
	   */
	  label: _react.PropTypes.node,
	  /**
	   * Where the label will be placed next to the toggle.
	   */
	  labelPosition: _react.PropTypes.oneOf(['left', 'right']),
	  /**
	   * Overrides the inline-styles of the Toggle element label.
	   */
	  labelStyle: _react.PropTypes.object,
	  /**
	   * Callback function that is fired when the toggle switch is toggled.
	   */
	  onToggle: _react.PropTypes.func,
	  /**
	   * Override style of ripple.
	   */
	  rippleStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Override style for thumb.
	   */
	  thumbStyle: _react.PropTypes.object,
	  /**
	  * Override the inline styles for thumb when the toggle switch is toggled on.
	  */
	  thumbSwitchedStyle: _react.PropTypes.object,
	  /**
	   * Toggled if set to true.
	   */
	  toggled: _react.PropTypes.bool,
	  /**
	   * Override style for track.
	   */
	  trackStyle: _react.PropTypes.object,
	  /**
	  * Override the inline styles for track when the toggle switch is toggled on.
	  */
	  trackSwitchedStyle: _react.PropTypes.object,
	  /**
	   * ValueLink prop for when using controlled toggle.
	   */
	  valueLink: _react.PropTypes.object
	} : void 0;
	exports.default = Toggle;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }

})