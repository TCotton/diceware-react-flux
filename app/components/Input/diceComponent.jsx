import React, { Component } from 'react';
import styles from './_InputCtrlView.scss';
import classNames from 'classnames';
// import _ from 'lodash';

const displayName = 'DiceComponent';
const propTypes = {};
const defaultProps = {};

class DiceComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let zIndex2 = classNames(styles.cube__zindex, styles.cube__side);
    let zIndex0 = styles.cube__side;
    // let classArray = [zIndex0, zIndex0, zIndex0, zIndex0, zIndex0, zIndex2];

    return (
      <div className={styles.content__leftfirstcolumn}>
        <div className={styles.cube}>
          <span className={zIndex0}></span>
          <span className={zIndex0}></span>
          <span className={zIndex0}></span>
          <span className={zIndex0}></span>
          <span className={zIndex0}></span>
          <span className={zIndex2}></span>
        </div>
        &nbsp;
      </div>
    );

  }

}

DiceComponent.displayName = displayName;
DiceComponent.propTypes = propTypes;
DiceComponent.defaultProps = defaultProps;

export default DiceComponent;

