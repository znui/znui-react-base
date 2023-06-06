"use strict";

var React = znui.React || require('react');
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