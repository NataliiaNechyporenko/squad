import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Title = ({titleText}) => ( 
    <h1 className={styles.appTitle} > {titleText} </h1>
);

Title.defaultProps = {
  titleText: 'Title here'
};

Title.propTypes = {
  titleText: PropTypes.string
};

export default Title;
