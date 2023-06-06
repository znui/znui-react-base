var React = znui.React || require('react');

module.exports = React.createClass({
	displayName: 'LongText',
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
						{ this.props.children }
						{ this.props.text || this.props.value}
					</div>
				) 
			});
		}
	},
	__onIconClick: function (e){
		e.stopPropagation();
		this.props.onIconClick(e);
	},
	render: function(){
		return (
			<div onDoubleClick={this.__onClick} className={znui.react.classname("zr-base-long-text", this.props.className)}>
				{this.props.icon && <i style={this.props.iconStyle} className={'icon fa ' + this.props.icon} onClick={this.__onIconClick} />}
				<div className='content'>
					{this.props.children}
					{this.props.value}
				</div>
			</div>
		);
	}
});