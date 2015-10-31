import React, { Component } from 'react';
import styles from './_DisplayCtrlView.scss';

const displayName = 'DisplayCtrlView';
const propTypes = {};
const defaultProps = {};

class DisplayCtrlView extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className={styles.content__footer}>
        <div className='content__footer-inner'>
          <span
            hidden
            className='results-list-data'
            data-submit='true'
            data-reset='true'
            data-formkeywords='6'
            ref='resultListData'
            ></span>
        </div>
      </div>


    );
  }

}

DisplayCtrlView.displayName = displayName;
DisplayCtrlView.propTypes = propTypes;
DisplayCtrlView.defaultProps = defaultProps;

export default DisplayCtrlView;
