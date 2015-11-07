import React from 'react/addons';
import InputCtrlView from '../InputCtrlView.jsx';
import App from './../../App/App';
import { expect } from 'chai';

const formKeywordsDefaut = 6;
const formSubmitButtonNum = 1;
const formResetButtonNum = 1;

let { TestUtils } = React.addons;

describe('InputCtrlView', () => {

  beforeEach(function() {
    this.component = TestUtils.renderIntoDocument(<InputCtrlView />);
    this.renderedDOM = () => React.findDOMNode(this.component);
  });

  it('renders a form', function() {

    let formLabel = this.renderedDOM().querySelector('#selectinstruction');

    expect(formLabel.textContent).to.contain.string('keywords');

    let inputValue = this.renderedDOM().querySelector('#formKeywords');

    expect(parseInt(inputValue.value, 10)).to.equal(formKeywordsDefaut);

    let submitButton = this.renderedDOM().querySelectorAll('[type=submit]');

    expect(submitButton.length).to.equal(formSubmitButtonNum);

    let resetButton = this.renderedDOM().querySelectorAll('[type=reset]');

    expect(resetButton.length).to.equal(formResetButtonNum);

  });

  it('it checks that class names are rewritten in attributes', function() {

    let classUnderscoreStart = this.renderedDOM().querySelectorAll('[class$=_]');

    expect(classUnderscoreStart).to.have.length.above(0);

    let classUnderscoreEnd = this.renderedDOM().querySelectorAll('[class^=_]');

    expect(classUnderscoreEnd).to.have.length.above(0);

  });

});

describe('InputCtrlView events', () => {

  it('it clicks reset button', function() {

    let clicked = 0;

    class InputCtrlViewWithClickHandler extends InputCtrlView {
      reset = () => {
        clicked++;
      }
    }

    App.__Rewire__('InputCtrlView', InputCtrlViewWithClickHandler);

    let app = TestUtils.renderIntoDocument(
      <App />
    );

    let appElem = React.findDOMNode(app);

    let resetButton = appElem.querySelector('[type=reset]');

    TestUtils.Simulate.click(resetButton);

    expect(clicked).to.equal(1);

  });

  it('it clicks submit button', function() {

    let clicked = 0;

    class InputCtrlViewWithClickHandler extends InputCtrlView {
      submit = () => {
        clicked++;
      }
    }

    App.__Rewire__('InputCtrlView', InputCtrlViewWithClickHandler);

    let app = TestUtils.renderIntoDocument(
      <App />
    );

    let appElem = React.findDOMNode(app);

    let resetButton = appElem.querySelector('[type=submit]');

    TestUtils.Simulate.click(resetButton);

    expect(clicked).to.equal(1);

  });

});
