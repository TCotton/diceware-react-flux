import React, { Component } from 'react';
import styles from './_InputCtrlView.scss';
import DisplayCtrlView from '../Display/DisplayCtrlView';
import InputStore from '../../stores/InputStore';
import AppActions from '../../actions/AppActions';
import DiceComponent from './DiceComponent';
import TextComponent from './TextComponent';

const displayName = 'InputCtrlView';
const propTypes = {};
const defaultProps = {};
const dicewordsDefault = ['&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;'];

class InputCtrlView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formKeywords: 6,
      dicewords: dicewordsDefault,
      diceword: null
    };

  }

  componentWillMount() {
    /**
     * creates full set of diceware keywords which is stored
     * in a Map in the relevant store
     */
    AppActions.getKeywords();
    /**
     * Adds store listen for when submit button is clicked
     */
    InputStore.addChangeListener(() => {
      return this.onChange();
    });
  }

  onChange() {
    this.setState({dicewords: InputStore.getKeywordsByNumber()});
  }

  render() {
    /**
     * update formKeywords state on form change
     * @param event {object}
     */
    let setDicewordsNumber = (event) => {
      this.setState({formKeywords: event.target.value});
    };

    /**
     * @param event {object}
     */
    let submit = (event) => {
      event.preventDefault();
      AppActions.setKeywordsNumbers(this.state.formKeywords);
    };

    /**
     * @param event {object}
     */
    let reset = (event) => {
      event.preventDefault();
      this.setState({formKeywords: 6});
      this.setState({dicewords: dicewordsDefault});
    };

    let keyWords = this.state.formKeywords;

    return (
      <div className={styles.content}>
        <div className={styles.content__inner}>

          <div className={styles.content__left}>

            <DiceComponent />

            <div className={styles.content__leftsecondcolumn}>

              <form action='/' method='post' className='form' id='main-form'>

                <label htmlFor='formKeywords' className={styles.form__label}> # keywords </label>
                <input type='number' max='8' min='3' id='formKeywords' name='formKeywords'
                       className={styles.form__input}
                       value={keyWords} onChange={setDicewordsNumber} ref='formKeywords'/>

                <button type='submit' className={styles.button} onClick={submit}>submit</button>
                <button type='reset' className={styles.button} onClick={reset}>reset</button>
              </form>

            </div>

          </div>

          <TextComponent />
          <DisplayCtrlView dicewords={this.state.dicewords}/>

        </div>

      </div>
    );

  }

}

InputCtrlView.displayName = displayName;
InputCtrlView.propTypes = propTypes;
InputCtrlView.defaultProps = defaultProps;

export default InputCtrlView;
