import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const Panel = ({ title, children }) => (
  <div className={styles.panel} >
    <h2 className={styles.title} >{title}</h2>
    {children}
  </div>
  );

  Panel.defaultProps ={
    title: ''
  };

  Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
  };

export default Panel;
