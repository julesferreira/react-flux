var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

	/**
	 * @param {string} text
	 */
	log: function(text) {
		AppDispatcher.dispatch({
			actionType: AppConstants.APP_LOG,
			text: text
		});
	}

};

module.exports = AppActions;
