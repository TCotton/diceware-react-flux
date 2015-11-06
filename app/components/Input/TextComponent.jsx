import React, { Component } from 'react';
import styles from './_InputCtrlView.scss';

const displayName = 'TextComponent';
const propTypes = {};
const defaultProps = {};

class TextComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside className={styles.content__right}>
        <p>Help protect your online security and privacy by creating unbreakable passphrases.</p>

        <p>Original created by author, academic and software engineer, Arnold Reinhold, in 1995;
          Diceware is still the “gold standard” for creating secure passphrases.</p>

        <p>It is recommended to use a minimum of six different words,
          although even using as little as three words is preferable to using a password.</p>

        <p>Obviously, once created, memorise and destroy.</p>

        <p>When using the passphrase don't forget to add a space inbetween each word.</p>

        <p>Side-project of <a href='https://andywalpole.me/#!/blog/'>Andy Walpole</a>.</p>
      </aside>
    );

  }

}

TextComponent.displayName = displayName;
TextComponent.propTypes = propTypes;
TextComponent.defaultProps = defaultProps;

export default TextComponent;

