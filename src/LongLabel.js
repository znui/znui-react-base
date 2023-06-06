var React = znui.React || require('react');

module.exports = React.createClass({
	displayName: 'LongLabel',
	getInitialState: function(){
		return {
			
		}
	},
	__onClick: function (){
		if(zr.popup && zr.popup.dialog) {
			zr.popup.dialog({
				title: this.props.title,
				style: {
					width: 640
				},
				closeable: true,
				fullscreen: true,
				focus: false,
				content: (
					<div style={{ wordBreak: 'break-all' }}>
						{this.props.label}
					</div>
				) 
			});
		}
	},
	__onIconClick: function (evt){
		evt.stopPropagation();
		this.props.onIconClick(evt);
	},
	__onLabelClick: function (evt){
		evt.stopPropagation();
		var _hash = this.props.hash;
		if(_hash) {
			if(_hash.indexOf('#') !== 0) {
				_hash = '#' + _hash;
			}

			return window.location.hash = _hash, false;
		}
		this.props.onLabelClick && this.props.onLabelClick(evt, this.props);
	},
	render: function(){
		return (
			<div onDoubleClick={this.__onClick} className={znui.react.classname("zr-base-long-label", this.props.className)}>
				{this.props.icon && <i style={this.props.iconStyle} className={'icon fa ' + this.props.icon} onClick={this.__onIconClick} />}
				<div className='content' data-zr-popup-tooltip={this.props.label} onClick={this.__onLabelClick}>
					{this.props.label}
				</div>
			</div>
		);
	}
});