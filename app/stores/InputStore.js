/**
 * Created by andywalpole on 01/11/15.
 */

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
//import util from 'util';

import {
  SAVE_KEYWORD_NUMBERS,
  GET_KEYWORD_LIST,
  SET_KEYWORD_NUMBERS,
} from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _numKeywords = '';
let _Keywords = '';

class InputStore extends EventEmitter {

  constructor() {
    super();
  }

  static addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  static removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  static emitChange() {
    console.dir(this.emit);
    //this.emit(CHANGE_EVENT);
   // this.emit(CHANGE_EVENT);
  }

  static getKeyWordsData() {
    return _Keywords;
  }

  static getNumKeywords() {
    return _numKeywords;
  }

}

/*util.inherits(InputStore, EventEmitter);
console.dir(InputStore);*/

AppDispatcher.register(function(action) {

  switch (action.actionType) {
    case SET_KEYWORD_NUMBERS:
      _numKeywords = action.keywordsData;
      console.log('_numKeywords');
      console.log(_numKeywords);
      InputStore.emitChange();
      break;
  }

});

export default InputStore;

