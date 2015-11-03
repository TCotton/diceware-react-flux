import React, { Component } from 'react';
import styles from './_InputCtrlView.scss';
import DisplayCtrlView from '../Display/DisplayCtrlView';
import DicewareApi from '../../api/DicewareApi';
//import dataCache from '../../api/dataCache';
import InputStore from '../../stores/InputStore';
import AppActions from '../../actions/AppActions';

const displayName = 'InputCtrlView';
const propTypes = {};
const defaultProps = {};

class InputCtrlView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formKeywords: 6,
      dicewords: ['&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;'],
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
     * @param event
     */
    let setDicewordsNumber = (event) => {
      this.setState({formKeywords: event.target.value});
    };

    let submit = (event) => {
      event.preventDefault();
      AppActions.setKeywordsNumbers(this.state.formKeywords);
    };

    let reset = (event) => {
      event.preventDefault();
      this.setState({formKeywords: 6});
    };

    let keyWords = this.state.formKeywords;

    return (
      <div className={styles.content}>
        <div className={styles.content__inner}>

          <div className={styles.content__left}>

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


          <div className={styles.content__right}>
            <p>Help protect your online security and privacy by creating unbreakable passphrases.</p>

            <p>Original created by author, academic and software engineer, Arnold Reinhold, in 1995;
              Diceware is still the “gold standard” for creating secure passphrases.</p>

            <p>It is recommended to use six different words,
              although even using as little as three words will be better than using a password.</p>

            <p>Obviously, memorise and destroy.</p>

            <p>When using the passphrase don't forget to add a space inbetween each word.</p>

            <p>Side-project of Andy Walpole.</p>
          </div>

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
