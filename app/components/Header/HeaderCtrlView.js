/**
 * Created by andywalpole on 31/10/15.
 */

import React, { Component } from 'react';

const displayName = 'HeaderCtrlView';
const propTypes = {};
const defaultProps = {};

class HeaderCtrlView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header'>
        <div className='header__block'>
          <h1>Diceware</h1>

          <h2><span>&nbsp;- create unbreakable passphrases</span></h2>
        </div>
      </div>
    );
  }
}

HeaderCtrlView.displayName = displayName;
HeaderCtrlView.propTypes = propTypes;
HeaderCtrlView.defaultProps = defaultProps;

export default HeaderCtrlView;
