/**
 * Created by andywalpole on 01/11/15.
 */
import styles from './_DisplayCtrlView.scss';
import React, { Component } from 'react/addons';

const displayName = 'DisplayListItems';
const propTypes = {};
const defaultProps = {
  diceword: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  number: React.PropTypes.number.isRequired
};

class DisplayListItems extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Allows the use of dangerouslySetInnerHTML so that the html entity for empty space, &nbsp;
   * can be used
   * A preferable solution would be to use a third-party library such as DOMPurify -> https://github.com/cure53/DOMPurify
   * @returns {{__html: (*|null)}}
   * @private
   */
  _createMarkup() {
    return {__html: this.props.diceword};
  }

  render() {

    return (
      <li className={styles.resultslist__item} data-id={this.props.number}>
        <span ref='dicewareHTML' dangerouslySetInnerHTML={this._createMarkup()}></span>
      </li>
    );

  }
}

DisplayListItems.displayName = displayName;
DisplayListItems.propTypes = propTypes;
DisplayListItems.defaultProps = defaultProps;

export default DisplayListItems;
