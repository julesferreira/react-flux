var React = require('react');

var ENTER_KEY_CODE = 13;

var Input = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		};
	},

	render: function() {
		return (
			<input
				autoFocus={true}
				value={this.state.value}
				onChange={this._onChange}
				onKeyDown={this._onKeyDown}
			/>
		);
	},

	_save: function() {
		this.setState({
			value: ''
		});
	},

	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},

	_onKeyDown: function(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	}

});

module.exports = Input;
