module.exports = {

	prependTimestamp: function(text) {
		return new Date().getTime() + ': ' + text;
	}

};
