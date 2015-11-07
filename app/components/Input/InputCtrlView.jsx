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

  /**
   * @param event {object}
   */
  reset = (event) => {
    event.preventDefault();
    this.setState({formKeywords: 6});
    this.setState({dicewords: dicewordsDefault});
  };

  /**
   * @param event {object}
   */
  submit = (event) => {
    event.preventDefault();
    AppActions.setKeywordsNumbers(this.state.formKeywords);
  };

  /**
   * update formKeywords state on form change
   * @param event {object}
   */
  setDicewordsNumber = (event) => {

    let newNum = event.target.value > 8 ? 8 : event.target.value < 3 ? 3 : event.target.value;

    this.setState({formKeywords: newNum});
  };

  render() {

    let keyWords = this.state.formKeywords;

    return (
      <div className={styles.content}>
        <div className={styles.content__inner}>

          <div className={styles.content__left}>

            <DiceComponent />

            <div className={styles.content__leftsecondcolumn}>

              <form action='/' method='post' className='form' id='main-form'>

                <div id='selectinstruction'># keywords</div>
                <label htmlFor='formKeywords' className={styles.form__inputLabel}>
                  <select id='formKeywords'
                          name='formKeywords'
                          onChange={this.setDicewordsNumber}
                          ref='formKeywords'
                          aria-describedby='selectinstruction'
                          className={styles.form__input}
                          value={keyWords}>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select>
                </label>

                <button type='submit' className={styles.button} onClick={this.submit}>submit</button>
                <button type='reset' className={styles.button} onClick={this.reset}>reset</button>
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
