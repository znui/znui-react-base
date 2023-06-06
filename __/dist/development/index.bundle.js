(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Button.js":
/*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var Loading = __webpack_require__(/*! ./Loading */ "./Loading.js");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      disabled: false,
      loading: false,
      loadingText: null
    };
  },
  __click: function __click(e) {
    if (this.__disabled()) {
      return;
    }
    if (this.props.hash) {
      window.location.hash = "#" + this.props.hash;
    }
    this.props.onClick && this.props.onClick(e, this);
  },
  loading: function loading(value, loadingText) {
    if (value) {
      this.setState({
        disabled: true,
        loading: true,
        loadingText: loadingText
      });
    } else {
      this.setState({
        disabled: false,
        loading: false,
        loadingText: null
      });
    }
  },
  __disabled: function __disabled() {
    return this.props.disabled || this.state.disabled;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-base-button ' + (this.props.className || '') + (this.__disabled() ? ' disabled' : ''),
      onClick: this.__click,
      "data-zr-popup-tooltip": this.__disabled() ? this.props.tooltip : ''
    }, !!this.props.children && (this.state.loadingText || this.props.children), !this.props.children && (this.state.loadingText || this.props.label), this.state.loading && /*#__PURE__*/React.createElement(Loading, null));
  }
});

/***/ }),

/***/ "./LimitTextarea.js":
/*!**************************!*\
  !*** ./LimitTextarea.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    var _value = this.props.value || '';
    return {
      value: _value,
      length: _value.length
    };
  },
  __onChange: function __onChange(e) {
    var _this = this;
    var _value = e.target.value;
    if (_value.length > this.props.max) {
      return;
    }
    e.value = _value;
    this.setState({
      value: _value,
      length: _value.length
    }, function () {
      _this.props.onChange && _this.props.onChange(e, _value, _this.props);
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-base-limit-textarea ' + (this.state.length == this.props.max ? 'full' : '')
    }, /*#__PURE__*/React.createElement("textarea", _extends({}, this.props, {
      value: this.state.value,
      onChange: this.__onChange
    })), this.props.max && /*#__PURE__*/React.createElement("div", {
      className: "limit"
    }, /*#__PURE__*/React.createElement("span", {
      className: "length"
    }, this.state.length), " / ", /*#__PURE__*/React.createElement("span", {
      className: "max"
    }, this.props.max)));
  }
});

/***/ }),

/***/ "./Loading.js":
/*!********************!*\
  !*** ./Loading.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-base-loading ' + (this.props.className || '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "lds-ring"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)));
  }
});

/***/ }),

/***/ "./LongLabel.js":
/*!**********************!*\
  !*** ./LongLabel.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'LongLabel',
  getInitialState: function getInitialState() {
    return {};
  },
  __onClick: function __onClick() {
    if (zr.popup && zr.popup.dialog) {
      zr.popup.dialog({
        title: this.props.title,
        style: {
          width: 640
        },
        closeable: true,
        fullscreen: true,
        focus: false,
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            wordBreak: 'break-all'
          }
        }, this.props.label)
      });
    }
  },
  __onIconClick: function __onIconClick(evt) {
    evt.stopPropagation();
    this.props.onIconClick(evt);
  },
  __onLabelClick: function __onLabelClick(evt) {
    evt.stopPropagation();
    var _hash = this.props.hash;
    if (_hash) {
      if (_hash.indexOf('#') !== 0) {
        _hash = '#' + _hash;
      }
      return window.location.hash = _hash, false;
    }
    this.props.onLabelClick && this.props.onLabelClick(evt, this.props);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      onDoubleClick: this.__onClick,
      className: znui.react.classname("zr-base-long-label", this.props.className)
    }, this.props.icon && /*#__PURE__*/React.createElement("i", {
      style: this.props.iconStyle,
      className: 'icon fa ' + this.props.icon,
      onClick: this.__onIconClick
    }), /*#__PURE__*/React.createElement("div", {
      className: "content",
      "data-zr-popup-tooltip": this.props.label,
      onClick: this.__onLabelClick
    }, this.props.label));
  }
});

/***/ }),

/***/ "./LongText.js":
/*!*********************!*\
  !*** ./LongText.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'LongText',
  getInitialState: function getInitialState() {
    return {};
  },
  __onClick: function __onClick() {
    if (zr.popup && zr.popup.dialog) {
      zr.popup.dialog({
        title: this.props.title,
        style: {
          width: 640
        },
        closeable: true,
        fullscreen: true,
        focus: false,
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            wordBreak: 'break-all'
          }
        }, this.props.children, this.props.text || this.props.value)
      });
    }
  },
  __onIconClick: function __onIconClick(e) {
    e.stopPropagation();
    this.props.onIconClick(e);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      onDoubleClick: this.__onClick,
      className: znui.react.classname("zr-base-long-text", this.props.className)
    }, this.props.icon && /*#__PURE__*/React.createElement("i", {
      style: this.props.iconStyle,
      className: 'icon fa ' + this.props.icon,
      onClick: this.__onIconClick
    }), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.children, this.props.value));
  }
});

/***/ }),

/***/ "./Password.js":
/*!*********************!*\
  !*** ./Password.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      equal: true,
      errorMessage: this.props.errorMessage || '密码不匹配',
      type: 'password',
      value: this.props.value || ''
    };
  },
  __onChange: function __onChange(e) {
    var _this = this;
    var _value = e.target.value,
      _equal = null;
    e.value = _value;
    if (this.props.password) {
      if (this.props.password == _value) {
        _equal = true;
      } else {
        _equal = false;
      }
      e.equal = _equal;
    }
    this.setState({
      value: _value,
      equal: _equal
    }, function () {
      _this.props.onChange && _this.props.onChange(e, _value, _this.props);
    });
  },
  __onTypeChange: function __onTypeChange() {
    if (this.state.type == 'password') {
      this.state.type = 'text';
    } else {
      this.state.type = 'password';
    }
    this.forceUpdate();
  },
  __errorMsg: function __errorMsg() {
    if (this.props.password && !this.state.equal) {
      return /*#__PURE__*/React.createElement("div", {
        className: "error-msg"
      }, this.state.errorMessage);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-base-password ' + (this.props.className || '') + (this.state.active ? ' active' : '')
    }, /*#__PURE__*/React.createElement("input", _extends({}, this.props, {
      className: "input",
      type: this.state.type,
      value: this.state.value,
      onChange: this.__onChange
    })), /*#__PURE__*/React.createElement("i", {
      onClick: this.__onTypeChange,
      className: 'exchange-icon fa ' + (this.state.type == 'password' ? 'fa-eye' : 'fa-eye-slash')
    }), this.__errorMsg());
  }
});

/***/ }),

/***/ "./PhoneCode.js":
/*!**********************!*\
  !*** ./PhoneCode.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var Timer = __webpack_require__(/*! ./Timer */ "./Timer.js");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      value: '',
      seconds: 0
    };
  },
  __onChange: function __onChange(e) {
    var _this = this;
    var _value = e.target.value;
    e.value = _value;
    this.setState({
      errorMessage: null,
      value: _value
    }, function () {
      _this.props.onChange && _this.props.onChange(e, _value, _this.props);
    });
  },
  __errorMsg: function __errorMsg() {
    if (this.state.errorMessage) {
      return /*#__PURE__*/React.createElement("div", {
        className: "error-msg"
      }, this.state.errorMessage);
    }
  },
  __clickSendBtn: function __clickSendBtn() {
    var _this2 = this;
    if (this.props.phone) {
      zn.data.post(this.props.api, {
        data: {
          phone: this.props.phone
        }
      }).then(function (data) {
        if (data.code == 200) {
          _this2.setState({
            seconds: 120
          });
          zr.popup.notifier.success("验证码发送成功，请注意查收。");
        }
      });
    } else {
      if (this._input) {
        this._input.focus();
      }
      this.setState({
        errorMessage: '请先填写手机号'
      });
    }
  },
  render: function render() {
    var _this3 = this;
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-base-phone-code ' + (this.props.className || '')
    }, /*#__PURE__*/React.createElement("input", _extends({
      ref: function ref(_ref) {
        return _this3._input = _ref;
      }
    }, this.props, {
      className: "input",
      type: this.state.type,
      value: this.state.value,
      onChange: this.__onChange
    })), /*#__PURE__*/React.createElement("div", {
      className: "code-btn"
    }, this.state.seconds ? /*#__PURE__*/React.createElement(Timer, {
      seconds: this.state.seconds,
      onEnd: function onEnd() {
        return _this3.setState({
          seconds: 0
        });
      }
    }) : /*#__PURE__*/React.createElement("span", {
      className: "send-code",
      onClick: this.__clickSendBtn
    }, "\u53D1\u9001\u9A8C\u8BC1\u7801")), this.__errorMsg());
  }
});

/***/ }),

/***/ "./Timer.js":
/*!******************!*\
  !*** ./Timer.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      seconds: this.props.seconds || 120
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;
    this.state.timer = setInterval(function () {
      if (_this.state.seconds) {
        _this.setState({
          seconds: _this.state.seconds - 1
        });
      } else {
        window.clearInterval(_this.state.timer);
        _this.state.timer = null;
        _this.setState({
          second: 0
        });
        _this.props.onEnd && _this.props.onEnd();
      }
    }, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.state.timer) {
      window.clearInterval(this.state.timer);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("span", {
      className: 'zr-base-timer ' + (this.props.className || '')
    }, "\u8FD8\u5269 ", this.state.seconds, " \u79D2");
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Button: __webpack_require__(/*! ./Button.js */ "./Button.js"),
  Timer: __webpack_require__(/*! ./Timer.js */ "./Timer.js"),
  Loading: __webpack_require__(/*! ./Loading.js */ "./Loading.js"),
  LongLabel: __webpack_require__(/*! ./LongLabel.js */ "./LongLabel.js"),
  LongText: __webpack_require__(/*! ./LongText.js */ "./LongText.js"),
  Password: __webpack_require__(/*! ./Password.js */ "./Password.js"),
  PhoneCode: __webpack_require__(/*! ./PhoneCode.js */ "./PhoneCode.js"),
  LimitTextarea: __webpack_require__(/*! ./LimitTextarea.js */ "./LimitTextarea.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0xpbWl0VGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9Mb25nTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vTG9uZ1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vUGhvbmVDb2RlLmpzIiwid2VicGFjazovLy8uL1RpbWVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkxvYWRpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJsb2FkaW5nVGV4dCIsIl9fY2xpY2siLCJlIiwiX19kaXNhYmxlZCIsInByb3BzIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwib25DbGljayIsInZhbHVlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInJlbmRlciIsInN0eWxlIiwiY2xhc3NOYW1lIiwidG9vbHRpcCIsImNoaWxkcmVuIiwibGFiZWwiLCJfdmFsdWUiLCJsZW5ndGgiLCJfX29uQ2hhbmdlIiwidGFyZ2V0IiwibWF4Iiwib25DaGFuZ2UiLCJkaXNwbGF5TmFtZSIsIl9fb25DbGljayIsInpyIiwicG9wdXAiLCJkaWFsb2ciLCJ0aXRsZSIsIndpZHRoIiwiY2xvc2VhYmxlIiwiZnVsbHNjcmVlbiIsImZvY3VzIiwiY29udGVudCIsIndvcmRCcmVhayIsIl9fb25JY29uQ2xpY2siLCJldnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkljb25DbGljayIsIl9fb25MYWJlbENsaWNrIiwiX2hhc2giLCJpbmRleE9mIiwib25MYWJlbENsaWNrIiwicmVhY3QiLCJjbGFzc25hbWUiLCJpY29uIiwiaWNvblN0eWxlIiwidGV4dCIsImVxdWFsIiwiZXJyb3JNZXNzYWdlIiwidHlwZSIsIl9lcXVhbCIsInBhc3N3b3JkIiwiX19vblR5cGVDaGFuZ2UiLCJmb3JjZVVwZGF0ZSIsIl9fZXJyb3JNc2ciLCJhY3RpdmUiLCJUaW1lciIsInNlY29uZHMiLCJfX2NsaWNrU2VuZEJ0biIsInBob25lIiwiem4iLCJkYXRhIiwicG9zdCIsImFwaSIsInRoZW4iLCJjb2RlIiwibm90aWZpZXIiLCJzdWNjZXNzIiwiX2lucHV0IiwicmVmIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNlY29uZCIsIm9uRW5kIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJCdXR0b24iLCJMb25nTGFiZWwiLCJMb25nVGV4dCIsIlBhc3N3b3JkIiwiUGhvbmVDb2RlIiwiTGltaXRUZXh0YXJlYSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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O0lBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNULENBQUM7RUFDREMsb0JBQW9CLEVBQUUsZ0NBQVc7SUFDaEMsSUFBRyxJQUFJLENBQUNuRSxLQUFLLENBQUM4RCxLQUFLLEVBQUU7TUFDcEJuRSxNQUFNLENBQUNxRSxhQUFhLENBQUMsSUFBSSxDQUFDaEUsS0FBSyxDQUFDOEQsS0FBSyxDQUFDO0lBQ3ZDO0VBQ0QsQ0FBQztFQUNEN0QsTUFBTSxFQUFFLGtCQUFVO0lBQ2pCLG9CQUNDO01BQU0sU0FBUyxFQUFFLGdCQUFnQixJQUFJLElBQUksQ0FBQ1IsS0FBSyxDQUFDVSxTQUFTLElBQUksRUFBRTtJQUFFLEdBQUMsZUFDOUQsRUFBQyxJQUFJLENBQUNILEtBQUssQ0FBQ2dELE9BQU8sRUFBQyxTQUN4QixDQUFPO0VBRVQ7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUNwQ0ZqRSxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNib0YsTUFBTSxFQUFFdkYsbUJBQU8sQ0FBQyxnQ0FBYSxDQUFDO0VBQzlCa0UsS0FBSyxFQUFFbEUsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0VBQzVCQyxPQUFPLEVBQUVELG1CQUFPLENBQUMsa0NBQWMsQ0FBQztFQUNoQ3dGLFNBQVMsRUFBRXhGLG1CQUFPLENBQUMsc0NBQWdCLENBQUM7RUFDcEN5RixRQUFRLEVBQUV6RixtQkFBTyxDQUFDLG9DQUFlLENBQUM7RUFDbEMwRixRQUFRLEVBQUUxRixtQkFBTyxDQUFDLG9DQUFlLENBQUM7RUFDbEMyRixTQUFTLEVBQUUzRixtQkFBTyxDQUFDLHNDQUFnQixDQUFDO0VBQ3BDNEYsYUFBYSxFQUFFNUYsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDL0MsQ0FBQyxDOzs7Ozs7Ozs7OztBQ1RELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMb2FkaW5nID0gcmVxdWlyZSgnLi9Mb2FkaW5nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRsb2FkaW5nOiBmYWxzZSwgXG5cdFx0XHRsb2FkaW5nVGV4dDogbnVsbFxuXHRcdH07XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChlKXtcblx0XHRpZih0aGlzLl9fZGlzYWJsZWQoKSl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmKHRoaXMucHJvcHMuaGFzaCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiNcIiArIHRoaXMucHJvcHMuaGFzaDtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzKTtcblx0fSxcblx0bG9hZGluZzogZnVuY3Rpb24gKHZhbHVlLCBsb2FkaW5nVGV4dCl7XG5cdFx0aWYodmFsdWUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdFx0bG9hZGluZ1RleHQ6IGxvYWRpbmdUZXh0XG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRsb2FkaW5nVGV4dDogbnVsbFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX2Rpc2FibGVkOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLnN0YXRlLmRpc2FibGVkO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17J3pyLWJhc2UtYnV0dG9uICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpICsgKHRoaXMuX19kaXNhYmxlZCgpPycgZGlzYWJsZWQnOicnKX0gb25DbGljaz17dGhpcy5fX2NsaWNrfSBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMuX19kaXNhYmxlZCgpP3RoaXMucHJvcHMudG9vbHRpcDonJ30+XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNoaWxkcmVuICYmICh0aGlzLnN0YXRlLmxvYWRpbmdUZXh0IHx8IHRoaXMucHJvcHMuY2hpbGRyZW4pIH1cblx0XHRcdFx0eyAhdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiggdGhpcy5zdGF0ZS5sb2FkaW5nVGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsKX1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUubG9hZGluZyAmJiA8TG9hZGluZyAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnO1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0bGVuZ3RoOiBfdmFsdWUubGVuZ3RoXG5cdFx0fTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGUpe1xuXHRcdHZhciBfdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRpZihfdmFsdWUubGVuZ3RoID4gdGhpcy5wcm9wcy5tYXgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZS52YWx1ZSA9IF92YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHRsZW5ndGg6IF92YWx1ZS5sZW5ndGhcblx0XHR9LCAoKT0+e1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIF92YWx1ZSwgdGhpcy5wcm9wcyk7XG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyd6ci1iYXNlLWxpbWl0LXRleHRhcmVhICcgKyAodGhpcy5zdGF0ZS5sZW5ndGggPT0gdGhpcy5wcm9wcy5tYXg/J2Z1bGwnOicnKX0+XG5cdFx0XHRcdDx0ZXh0YXJlYSB7Li4udGhpcy5wcm9wc30gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5tYXggJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpbWl0Jz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdsZW5ndGgnPnt0aGlzLnN0YXRlLmxlbmd0aH08L3NwYW4+IC8gPHNwYW4gY2xhc3NOYW1lPSdtYXgnPnt0aGlzLnByb3BzLm1heH08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXsnenItYmFzZS1sb2FkaW5nICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ0xvbmdMYWJlbCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHpyLnBvcHVwICYmIHpyLnBvcHVwLmRpYWxvZykge1xuXHRcdFx0enIucG9wdXAuZGlhbG9nKHtcblx0XHRcdFx0dGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0d2lkdGg6IDY0MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjbG9zZWFibGU6IHRydWUsXG5cdFx0XHRcdGZ1bGxzY3JlZW46IHRydWUsXG5cdFx0XHRcdGZvY3VzOiBmYWxzZSxcblx0XHRcdFx0Y29udGVudDogKFxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstYWxsJyB9fT5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmxhYmVsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSWNvbkNsaWNrOiBmdW5jdGlvbiAoZXZ0KXtcblx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkljb25DbGljayhldnQpO1xuXHR9LFxuXHRfX29uTGFiZWxDbGljazogZnVuY3Rpb24gKGV2dCl7XG5cdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHZhciBfaGFzaCA9IHRoaXMucHJvcHMuaGFzaDtcblx0XHRpZihfaGFzaCkge1xuXHRcdFx0aWYoX2hhc2guaW5kZXhPZignIycpICE9PSAwKSB7XG5cdFx0XHRcdF9oYXNoID0gJyMnICsgX2hhc2g7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IF9oYXNoLCBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkxhYmVsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkxhYmVsQ2xpY2soZXZ0LCB0aGlzLnByb3BzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IG9uRG91YmxlQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYmFzZS1sb25nLWxhYmVsXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmljb24gJiYgPGkgc3R5bGU9e3RoaXMucHJvcHMuaWNvblN0eWxlfSBjbGFzc05hbWU9eydpY29uIGZhICcgKyB0aGlzLnByb3BzLmljb259IG9uQ2xpY2s9e3RoaXMuX19vbkljb25DbGlja30gLz59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMucHJvcHMubGFiZWx9IG9uQ2xpY2s9e3RoaXMuX19vbkxhYmVsQ2xpY2t9PlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmxhYmVsfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnTG9uZ1RleHQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih6ci5wb3B1cCAmJiB6ci5wb3B1cC5kaWFsb2cpIHtcblx0XHRcdHpyLnBvcHVwLmRpYWxvZyh7XG5cdFx0XHRcdHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdHdpZHRoOiA2NDBcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2xvc2VhYmxlOiB0cnVlLFxuXHRcdFx0XHRmdWxsc2NyZWVuOiB0cnVlLFxuXHRcdFx0XHRmb2N1czogZmFsc2UsXG5cdFx0XHRcdGNvbnRlbnQ6IChcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLWFsbCcgfX0+XG5cdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSBcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkljb25DbGljazogZnVuY3Rpb24gKGUpe1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkljb25DbGljayhlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IG9uRG91YmxlQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYmFzZS1sb25nLXRleHRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuaWNvbiAmJiA8aSBzdHlsZT17dGhpcy5wcm9wcy5pY29uU3R5bGV9IGNsYXNzTmFtZT17J2ljb24gZmEgJyArIHRoaXMucHJvcHMuaWNvbn0gb25DbGljaz17dGhpcy5fX29uSWNvbkNsaWNrfSAvPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVxdWFsOiB0cnVlLFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yTWVzc2FnZSB8fCAn5a+G56CB5LiN5Yy56YWNJyxcblx0XHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xuXHRcdH07XG5cdH0sXG5cdF9fb25DaGFuZ2U6IGZ1bmN0aW9uIChlKXtcblx0XHR2YXIgX3ZhbHVlID0gZS50YXJnZXQudmFsdWUsIF9lcXVhbCA9IG51bGw7XG5cdFx0ZS52YWx1ZSA9IF92YWx1ZTtcblx0XHRpZih0aGlzLnByb3BzLnBhc3N3b3JkKSB7XG5cdFx0XHRpZih0aGlzLnByb3BzLnBhc3N3b3JkID09IF92YWx1ZSkge1xuXHRcdFx0XHRfZXF1YWwgPSB0cnVlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdF9lcXVhbCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0ZS5lcXVhbCA9IF9lcXVhbDtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0ZXF1YWw6IF9lcXVhbFxuXHRcdH0sICgpPT57XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgX3ZhbHVlLCB0aGlzLnByb3BzKTtcblx0XHR9KTtcblx0fSxcblx0X19vblR5cGVDaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUudHlwZSA9PSAncGFzc3dvcmQnKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnR5cGUgPSAndGV4dCc7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnR5cGUgPSAncGFzc3dvcmQnO1xuXHRcdH1cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fZXJyb3JNc2c6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMucGFzc3dvcmQgJiYgIXRoaXMuc3RhdGUuZXF1YWwpIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZXJyb3ItbXNnJz57dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J3pyLWJhc2UtcGFzc3dvcmQgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAodGhpcy5zdGF0ZS5hY3RpdmU/JyBhY3RpdmUnOicnKX0+XG5cdFx0XHRcdDxpbnB1dCB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPSdpbnB1dCcgdHlwZT17dGhpcy5zdGF0ZS50eXBlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX0gLz5cblx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5fX29uVHlwZUNoYW5nZX0gY2xhc3NOYW1lPXsnZXhjaGFuZ2UtaWNvbiBmYSAnICsgKHRoaXMuc3RhdGUudHlwZT09J3Bhc3N3b3JkJyA/ICdmYS1leWUnIDogJ2ZhLWV5ZS1zbGFzaCcpfSAvPlxuXHRcdFx0XHR7IHRoaXMuX19lcnJvck1zZygpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vVGltZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHNlY29uZHM6IDBcblx0XHR9O1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZSl7XG5cdFx0dmFyIF92YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdGUudmFsdWUgPSBfdmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGwsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlXG5cdFx0fSwgKCk9Pntcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBfdmFsdWUsIHRoaXMucHJvcHMpO1xuXHRcdH0pO1xuXHR9LFxuXHRfX2Vycm9yTXNnOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tc2cnPnt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX08L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrU2VuZEJ0bjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5waG9uZSkge1xuXHRcdFx0em4uZGF0YS5wb3N0KHRoaXMucHJvcHMuYXBpLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRwaG9uZTogdGhpcy5wcm9wcy5waG9uZVxuXHRcdFx0XHR9XG5cdFx0XHR9KS50aGVuKChkYXRhKT0+e1xuXHRcdFx0XHRpZihkYXRhLmNvZGUgPT0gMjAwKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogMTIwIH0pO1xuXHRcdFx0XHRcdHpyLnBvcHVwLm5vdGlmaWVyLnN1Y2Nlc3MoXCLpqozor4HnoIHlj5HpgIHmiJDlip/vvIzor7fms6jmhI/mn6XmlLbjgIJcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0aWYodGhpcy5faW5wdXQpIHtcblx0XHRcdFx0dGhpcy5faW5wdXQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6ICfor7flhYjloavlhpnmiYvmnLrlj7cnIH0pO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J3pyLWJhc2UtcGhvbmUtY29kZSAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG5cdFx0XHRcdDxpbnB1dCByZWY9eyhyZWYpPT50aGlzLl9pbnB1dCA9IHJlZn0gey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT0naW5wdXQnIHR5cGU9e3RoaXMuc3RhdGUudHlwZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2RlLWJ0bic+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zZWNvbmRzID8gPFRpbWVyIHNlY29uZHM9e3RoaXMuc3RhdGUuc2Vjb25kc30gb25FbmQ9eygpPT50aGlzLnNldFN0YXRlKHsgc2Vjb25kczogMCB9KX0gLz4gOiA8c3BhbiBjbGFzc05hbWU9J3NlbmQtY29kZScgb25DbGljaz17dGhpcy5fX2NsaWNrU2VuZEJ0bn0+5Y+R6YCB6aqM6K+B56CBPC9zcGFuPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgdGhpcy5fX2Vycm9yTXNnKCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2Vjb25kczogdGhpcy5wcm9wcy5zZWNvbmRzIHx8IDEyMFxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnN0YXRlLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5zZWNvbmRzKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c2Vjb25kczogdGhpcy5zdGF0ZS5zZWNvbmRzIC0gMVxuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnRpbWVyKTtcblx0XHRcdFx0dGhpcy5zdGF0ZS50aW1lciA9IG51bGw7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNlY29uZDogMFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkVuZCAmJiB0aGlzLnByb3BzLm9uRW5kKCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCk7XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLnRpbWVyKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnRpbWVyKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsnenItYmFzZS10aW1lciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG5cdFx0XHRcdOi/mOWJqSB7dGhpcy5zdGF0ZS5zZWNvbmRzfSDnp5Jcblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBCdXR0b246IHJlcXVpcmUoJy4vQnV0dG9uLmpzJyksXG4gICAgVGltZXI6IHJlcXVpcmUoJy4vVGltZXIuanMnKSxcbiAgICBMb2FkaW5nOiByZXF1aXJlKCcuL0xvYWRpbmcuanMnKSxcbiAgICBMb25nTGFiZWw6IHJlcXVpcmUoJy4vTG9uZ0xhYmVsLmpzJyksXG4gICAgTG9uZ1RleHQ6IHJlcXVpcmUoJy4vTG9uZ1RleHQuanMnKSxcbiAgICBQYXNzd29yZDogcmVxdWlyZSgnLi9QYXNzd29yZC5qcycpLFxuICAgIFBob25lQ29kZTogcmVxdWlyZSgnLi9QaG9uZUNvZGUuanMnKSxcbiAgICBMaW1pdFRleHRhcmVhOiByZXF1aXJlKCcuL0xpbWl0VGV4dGFyZWEuanMnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=