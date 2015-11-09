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

        <p>Originally invented by author, academic and software engineer, Arnold Reinhold, in 1995;
          Diceware is still the “gold standard” for creating secure passphrases.</p>

        <p>It is recommended to use a minimum of six different words,
          although using as little as three words is preferable to using a single password.</p>

        <p>Obviously, once created, memorise and destroy.</p>

        <p>When using the passphrase don't forget to add a space inbetween each word.</p>

        <p>Side-project of <a href='https://andywalpole.me/#!/side-projects/diceware'>Andy Walpole</a>.
          This site uses SSL for a secure connection and doesn't set cookies or use analytical tracking tools.</p>
      </aside>
    );

  }

}

TextComponent.displayName = displayName;
TextComponent.propTypes = propTypes;
TextComponent.defaultProps = defaultProps;

export default TextComponent;
