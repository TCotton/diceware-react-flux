/**
 * Created by andywalpole on 01/11/15.
 */
import JsonUrl from '../data/diceware';
import DataCache from './dataCache';

class DicewareApi {

  static retrieveContent() {

    let content = JsonUrl;
    let newMap = new Map();

    for (let property in content) {
      if (content.hasOwnProperty(property)) {
        newMap.set(Number.parseInt(property, 10), content[property]);
      }
    }

    return newMap;

  }

  static setKeywordNum(input) {
    this.keywordsNums = new DataCache();
    this.keywordsNums.cache = input;
  }

  static getKeywordNum() {
    return this.keywordsNums.cache;
  }

}

export default DicewareApi;

