import React from "react";
import PropTypes from 'prop-types';
import HeroCard from '../HeroCard';
import styles from './styles.css';

const List = ({ heroes }) => (
  <ul className={styles.list}>
    {heroes.length === 0 ?
      (<p className="empty__msg">There is no Heroes!</p>)
      : (heroes.map(hero => (
          <li className="listItem" key={hero.id}>
              <HeroCard {...hero}  />
          </li>)
      ))
    }
  </ul>
);

List.defaultProps = {
  heroes: []
};

List.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      strength: PropTypes.number.isRequired,
      intelligence: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired
    }).isRequired,
  ),
};

export default List;
