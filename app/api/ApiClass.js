/**
 * Created by andywalpole on 01/11/15.
 */
import JsonUrl from '../data/diceware';

class ApiClass {

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

}

export default ApiClass;

