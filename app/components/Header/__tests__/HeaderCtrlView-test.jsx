import React from 'react/addons';
import HeaderCtrlView from '../HeaderCtrlView.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('HeaderCtrlView', () => {
  it('It should contain a H1 header with the text Diceware', () => {
    let TextComp = TestUtils.renderIntoDocument(
      <HeaderCtrlView />
    );

    let TextCompElem = React.findDOMNode(TextComp);

    let header = TextCompElem.querySelectorAll('h1');

    expect(header).to.be.length(1);
    expect(header[0].innerText).to.contain('Diceware');

  });
});
