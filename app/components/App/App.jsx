import styles from './_App.scss';
import React, { Component } from 'react';
import InputCtrlView from './../Input/InputCtrlView';
import HeaderCtrlView from './../Header/HeaderCtrlView';

class App extends Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <HeaderCtrlView />
        <InputCtrlView />
      </div>
    );
  }
}

export default App;
