/**
 * Created by andywalpole on 01/11/15.
 */

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  SAVE_KEYWORD_NUMBERS,
  GET_KEYWORD_LIST,
} from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _numKeywords = '';
let _Keywords = '';

class InputStore extends EventEmitter {

  constructor(...args) {
    super(...args);
  }

  static addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  static removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  static emitChange() {
    this.emit(CHANGE_EVENT);
  }

  static getKeyWordsData() {
    return _Keywords;
  }

  static getNumKeywords() {
    return _numKeywords;
  }

}

AppDispatcher.register(function(action) {

  switch (action.actionType) {
    case GET_KEYWORD_LIST:
      _numKeywords = action.keywordsData;
      InputStore.emitChange();
      break;
  }

});

export default InputStore;

