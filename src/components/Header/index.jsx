import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Header = ({titleText}) => ( 
  <div className={styles.header} >
    <h1 className={styles.appTitle} > {titleText} </h1>
  </div>
);

Header.defaultProps = {
  titleText: 'Title here'
};

Header.propTypes = {
  titleText: PropTypes.string
};

export default Header;
