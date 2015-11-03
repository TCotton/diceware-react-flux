import React, { Component } from 'react';
import styles from './_DisplayCtrlView.scss';
import DisplayListItems from './DisplayListItems';
import InputStore from '../../stores/InputStore';
import AppActions from '../../actions/AppActions';

const displayName = 'DisplayCtrlView';
const propTypes = {};
const defaultProps = {
  dicewords: React.PropTypes.array.isRequired
};

class DisplayCtrlView extends Component {

  constructor(props) {
    super(props);
  }

  changeBoxIcon() {
    console.log('change');
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

          <ul className={styles.resultslist}>

            {Object.keys(this.props.dicewords).map(function(value, index) {
              return <DisplayListItems
                key={index}
                number={index}
                diceword={this.props.dicewords[index]}
                onClick={this.changeBoxIcon}
                />;
            }, this)}

          </ul>

        </div>
      </div>


    );
  }

}

DisplayCtrlView.displayName = displayName;
DisplayCtrlView.propTypes = propTypes;
DisplayCtrlView.defaultProps = defaultProps;

export default DisplayCtrlView;
