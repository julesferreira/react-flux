var React = require('react');
var Input = require('./Input.react');
var Log = require('./Log.react');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Input />
				<Log />
			</div>
		);
	}

});

module.exports = App;
