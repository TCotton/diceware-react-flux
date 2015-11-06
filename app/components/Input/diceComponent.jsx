import React, { Component } from 'react';
import styles from './_InputCtrlView.scss';

const displayName = 'DiceComponent';
const propTypes = {};
const defaultProps = {};

class DiceComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={styles.content__leftfirstcolumn}>
        <div className={styles.cube}>
          <span className={styles.cube__side}></span>
          <span className={styles.cube__side}></span>
          <span className={styles.cube__side}></span>
          <span className={styles.cube__side}></span>
          <span className={styles.cube__side}></span>
          <span className={styles.cube__side}></span>
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

