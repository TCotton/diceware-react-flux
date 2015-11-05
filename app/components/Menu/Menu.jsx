// import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className='menu'>
        {this.props.items.map((item) => {
          return (<MenuItem item={item} />);
        }, this)}
      </ul>
    );
  }
}

export default Menu;
