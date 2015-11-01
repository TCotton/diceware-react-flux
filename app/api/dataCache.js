/**
 * Created by andywalpole on 01/11/15.
 */

class dataCache {

  /**
   * @public
   * @returns {*}
   */
  get cache() {
    return this.value;
  }

  /**
   * $public
   * @param val (*)
   */
  set cache(val) {
    this.value = val;
  }
}

export default dataCache;
