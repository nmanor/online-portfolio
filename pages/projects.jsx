import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from '../styles/Projects.module.css';
import readJson from '../utils/readJson';
import { HOUR } from '../utils/constants';
import ProjectCardComponent from '../components/ProjectCardComponent/ProjectCardComponent';

const randomId = () => Math.round(Math.random() * 100000);

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Get a glimpse of the projects I worked on!</h1>
        <div className={styles.projectsList}>
          {projects && projects.map(({
            id, title, year, description,
          }) => (
            <ProjectCardComponent
              key={id}
              title={title}
              year={year}
              description={description}
            />
          ))}
        </div>
      </main>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(Object),
};

Projects.defaultProps = {
  projects: [],
};

export async function getStaticProps() {
  try {
    let projects = await readJson('projects.json');
    projects = projects.map((project) => ({ ...project, id: randomId() }));
    return {
      props: { projects },
      revalidate: 24 * HOUR,
    };
  } catch (e) {
    console.error(e);
    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
      props: {},
    };
  }
}
