import React from 'react/addons';
import TextComponent from '../TextComponent.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('TextComponent', () => {
  it('Should have the correct TextComponent wrapper element', () => {
    let TextComp = TestUtils.renderIntoDocument(
      <TextComponent />
    );

    let TextCompElem = React.findDOMNode(TextComp);

    expect(TextCompElem.tagName.toLowerCase()).to.equal('aside');
  });
});
