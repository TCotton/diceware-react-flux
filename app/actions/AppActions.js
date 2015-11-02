import AppDispatcher from '../dispatcher/AppDispatcher';
import DicewareApi from '../api/DicewareApi';
import DataCache from '../api/dataCache';

import {
  SAVE_KEYWORD_NUMBERS,
  GET_KEYWORD_LIST,
} from '../constants/AppConstants';

/*export default {
  getItems() {
    WebAPI.getItems()
    .then((items) => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_SUCCESS,
        items: items
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_ERROR
      });
    });
  }
};*/

class AppActions {

  getKeywords() {

    let keywords = DicewareApi.retrieveContent();

    AppDispatcher.dispatch({
      actionType: GET_KEYWORD_LIST,
      keywordsData: keywords
    });
  }

  getKeywordsNumbers() {

    let keywordsNum = DicewareApi.getKeywordNum();

    AppDispatcher.dispatch({
      actionType: GET_KEYWORD_NUMBERS,
      keywordsData: keywordsNum || 6
    });

  }

}

export default AppActions;
