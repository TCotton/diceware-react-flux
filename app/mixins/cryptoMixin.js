/**
 * Created by andywalpole on 31/10/15.
 */

import crypto from 'crypto';

'use strict';

let cryptoMixin = {

  /**
   * Uses the nodejs crypto module and the browser-based crypto API to achieve consistent randomness
   * @param min {integer}
   * @param max {integer}
   * @returns {*}
   */
  getRandomInt: function(min, max) {

    // Create byte array and fill with 1 random number
    let byteArray = new Uint8Array(1);
    var buf;

    if (crypto.randomBytes) {
      buf = crypto.randomBytes(byteArray);
    } else if (window.crypto) {
      buf = window.crypto.getRandomValues(byteArray);
    } else {
      buf = Math.floor(Math.random() * (max - min)) + min;
    }

    let range = max - min + 1;
    let maxRange = 256;

    if (buf[0] >= Math.floor(maxRange / range) * range) {
      return this.getRandomInt(min, max);
    }

    return min + (buf[0] % range);
  },

  /**
   *
   * @param num {integer}
   * @param min {integer}
   * @param max {integer}
   * @returns {string}
   */

  getRandomSequence: function(num, min, max) {

    let result = '';

    for (let x = 0; x < num; x++) {
      result += this.getRandomInt(min, max);
    }

    return result;
  }

};

export default cryptoMixin;

