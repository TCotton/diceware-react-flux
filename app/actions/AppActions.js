import AppDispatcher from '../dispatcher/AppDispatcher';
import ApiClass from '../api/ApiClass';
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

    var keywords = ApiClass.retrieveContent();

    AppDispatcher.dispatch({
      actionType: GET_KEYWORD_LIST,
      keywordsData: keywords
    });
  }

}

export default AppActions;
