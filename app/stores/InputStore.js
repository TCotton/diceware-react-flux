/**
 * Created by andywalpole on 01/11/15.
 */

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import cryptoMixin from '../mixins/cryptoMixin';

import {
  GET_KEYWORD_LIST,
  SET_KEYWORD_NUMBERS
} from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _numKeywords = '';
let _keywords = '';

var InputStore = Object.assign({}, EventEmitter.prototype, cryptoMixin, {

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getKeyWordsData: function() {
    return _keywords;
  },

  getNumKeywords: function() {
    return _numKeywords;
  },

  getKeywordsByNumber: function() {

    let dicewordsArray = [];

    for (let x = 0; x < Number.parseInt(_numKeywords, 10); x++) {
      dicewordsArray.push(_keywords.get(Number.parseInt(this.getRandomSequence(5, 1, 6), 10)));
    }

    return dicewordsArray;
  }

});

AppDispatcher.register(function(action) {

  switch (action.actionType) {
    case SET_KEYWORD_NUMBERS:
      _numKeywords = action.keywordsData;
      InputStore.emitChange();
      break;
    case GET_KEYWORD_LIST:
      _keywords = action.allAllkeywords;
      InputStore.emitChange();
      break;
  }

});

module.exports = InputStore;
