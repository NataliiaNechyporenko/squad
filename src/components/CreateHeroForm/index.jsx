import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const CreateHeroForm = () =>  {
  const handleClick = () => onClick(heroId);
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="HeroName" onChange={getNewName} />
      
    </form>
  );
};

CreateHeroForm.defaultProps = {
  onClick: () => {},
}

CreateHeroForm.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  heroId: PropTypes.number.isRequired
}; 

export default CreateHeroForm;