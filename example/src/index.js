require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var components = require('../../src/index');

znui.react.createApplication({
    render: (
        <div className="form-container">
            <components.Button label="提交" />
            <components.Password />
            <components.PhoneCode />
            <components.LimitTextarea max={300} />
            <components.Loading label="加载中..." />
            <components.LongText value="加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中" />
            <components.LongLabel icon="fa fa-edit" label="加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中加载中" />
        </div>
    )
});