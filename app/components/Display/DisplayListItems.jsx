/**
 * Created by andywalpole on 01/11/15.
 */
import styles from './_DisplayCtrlView.scss';
import React, { Component } from 'react/addons';

const displayName = 'DisplayListItems';
const propTypes = {};
const defaultProps = {
  diceword: React.PropTypes.string.isRequired
};

class DisplayListItems extends Component {

  constructor(props) {
    super(props);
  }

  _createMarkup() {
    return {__html: this.props.diceword};
  }

  render() {

    return (
      <li className={styles.resultslist__item}>
        <span ref='dicewareHTML' dangerouslySetInnerHTML={this._createMarkup()}></span>
        <span className={styles.resultslist__removeitem} ref='removeListItem'></span>
      </li>
    );

  }
}

DisplayListItems.displayName = displayName;
DisplayListItems.propTypes = propTypes;
DisplayListItems.defaultProps = defaultProps;

export default DisplayListItems;
