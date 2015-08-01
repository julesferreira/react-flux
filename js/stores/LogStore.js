var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var AppUtils = require('../utils/AppUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _logs = {};

function add(text) {
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_logs[id] = {
		id: id,
		text: AppUtils.prependTimestamp(text)
	};
}

var AppStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	get: function(id) {
		return _logs[id];
	},

	getAll: function() {
		return _logs;
	}

});

AppDispatcher.register(function(action) {
	var text;

	switch(action.type) {

		case AppConstants.APP_LOG:
			text = action.text.trim();
			if (text !== '') {
				add(text);
				TodoStore.emitChange();
			}
			break;

		default:
			// no op
	}

});

module.exports = AppStore;
