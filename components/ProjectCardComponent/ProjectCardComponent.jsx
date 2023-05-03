import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCardComponent.module.css';

export default function ProjectCardComponent({ title, year, description }) {
  const handleClick = useCallback(() => alert('This is not a real project'), []);

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.projectButton} type="button" onClick={handleClick}>Visit project website</button>
    </section>
  );
}

ProjectCardComponent.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  description: PropTypes.string,
};

ProjectCardComponent.defaultProps = {
  title: '',
  year: -1,
  description: '',
};
