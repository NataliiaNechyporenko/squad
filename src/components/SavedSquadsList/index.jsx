import React from "react";
import PropTypes from 'prop-types';
import Panel from '../Shared/Panel';
import SquadCard from '../SquadCard';
import Message from '../Shared/Message';
import styles from './styles.css';

const SavedSquadsList = ({ squads, ...rest }) => (
  <div className={styles.list}>
      {squads.length === 0 ?
      (<Message msg='There is no Squads!' />)
      : (squads.map(squad => (
          <Panel key={squad.id} >
              <SquadCard {...squad} {...rest} />
          </Panel>)
      ))
    }
  </div>
);

SavedSquadsList.defaultProps = {
  squads: []
};

SavedSquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.shape())
};

export default SavedSquadsList;
