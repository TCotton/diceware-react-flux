import React from 'react/addons';
import InputCtrlView from '../InputCtrlView.jsx';
import { expect } from 'chai';

const formKeywordsDefaut = 6;
const formSubmitButtonNum = 1;
const formResetButtonNum = 1;

describe('InputCtrlView', () => {

  beforeEach(function() {
    let { TestUtils } = React.addons;

    this.component = TestUtils.renderIntoDocument(<InputCtrlView />);
    this.renderedDOM = () => React.findDOMNode(this.component);
  });

  it('renders a form', function() {

    let formLabel = this.renderedDOM().querySelector('label');

    expect(formLabel.textContent).to.contain.string('keywords');

    let inputValue = this.renderedDOM().querySelector('#formKeywords');

    expect(parseInt(inputValue.value, 10)).to.equal(formKeywordsDefaut);

    let submitButton = this.renderedDOM().querySelectorAll('[type=submit]');

    expect(submitButton.length).to.equal(formSubmitButtonNum);

    let resetButton = this.renderedDOM().querySelectorAll('[type=reset]');

    expect(resetButton.length).to.equal(formResetButtonNum);

  });

  it('class names are given to the attributes', function() {

    let classUnderscoreStart = this.renderedDOM().querySelectorAll('[class$=_]');

    expect(classUnderscoreStart).to.have.length.above(0);

    let classUnderscoreEnd = this.renderedDOM().querySelectorAll('[class^=_]');

    expect(classUnderscoreEnd).to.have.length.above(0);

  });

});
