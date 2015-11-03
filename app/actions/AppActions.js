import AppDispatcher from '../dispatcher/AppDispatcher';
import DicewareApi from '../api/DicewareApi';
import DataCache from '../api/dataCache';

import {
  GET_KEYWORD_LIST,
  GET_KEYWORD_NUMBERS,
  SET_KEYWORD_NUMBERS,
} from '../constants/AppConstants';

class AppActions {

  static getKeywords() {

    let keywords = DicewareApi.retrieveContent();

    AppDispatcher.dispatch({
      actionType: GET_KEYWORD_LIST,
      allAllkeywords: keywords
    });
  }

  static setKeywordsNumbers(input) {

    DicewareApi.setKeywordNum(input);

    // Hey dispatcher, go tell all relevant stores that a number of keywords has been set
    // and is ready for first stage of display
    AppDispatcher.dispatch({
      actionType: SET_KEYWORD_NUMBERS,
      keywordsData: DicewareApi.getKeywordNum()
    });

  }

}

export default AppActions;
