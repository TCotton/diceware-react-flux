// import styles from './_Footer.scss';

import React from 'react';

class Footer extends React.Component {
  render() {
    var year = (new Date()).getFullYear();

    return (
      <footer className='footer'>
        &copy; Your Company&nbsp;{year}
      </footer>
    );
  }
}

export default Footer;
