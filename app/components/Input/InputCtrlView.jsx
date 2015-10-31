import React, { Component } from 'react';
import DisplayCtrlView from '../Display/DisplayCtrlView';

const displayName = 'InputCtrlView';
const propTypes = {};
const defaultProps = {};

class InputCtrlView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='content'>
        <div className='content__inner'>

          <div className='content__left'>

            <div className='content__left-first-column'>
              <div className='cube'>
                <span className='cube__side'></span>
                <span className='cube__side'></span>
                <span className='cube__side'></span>
                <span className='cube__side'></span>
                <span className='cube__side'></span>
                <span className='cube__side'></span>
              </div>

              &nbsp;
            </div>

            <div className='content__left-second-column'>

              <form action='/' method='post' className='form' id='main-form'>

                <label htmlFor='formKeywords' className='form__label'> # keywords </label>
                <input type='number' max='8' min='3' id='formKeywords' name='formKeywords' className='form__input'
                       value='' ref='formKeywords'/>

                <button type='submit' className='button button__submit' value=''>submit</button>
                <button type='reset' className='button button__reset' value=''>reset</button>
              </form>

            </div>

          </div>


          <div className='content__right'>
            <p>Help protect your online security and privacy by creating unbreakable passphrases.</p>

            <p>Original created by author, academic and software engineer, Arnold Reinhold, in 1995;
              Diceware is still the “gold standard” for creating secure passphrases.</p>

            <p>It is recommended to use six different words,
              although even using as little as three words will be better than using a password.</p>

            <p>Obviously, memorise and destroy.</p>

            <p>When using the passphrase don't forget to add a space inbetween each word.</p>

            <p>Side-project of Andy Walpole.</p>
          </div>

          <DisplayCtrlView />

        </div>

      </div>
    );

  }

}

InputCtrlView.displayName = displayName;
InputCtrlView.propTypes = propTypes;
InputCtrlView.defaultProps = defaultProps;

export default InputCtrlView;
