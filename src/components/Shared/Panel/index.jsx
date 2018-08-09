import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const Panel = ({ title, children }) => (
  <div className={styles.panel} >
    {title !== '' && <h2 className={styles.title} >{title}</h2>}
    {children}
  </div>
  );

  Panel.defaultProps ={
    title: '',
    children: {}
  };

  Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

export default Panel;
