"use strict";

var React = znui.React || require('react');
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