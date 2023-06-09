/* eslint-disable react/button-has-type */

import React from 'react';
import Head from 'next/head';
import toast from 'react-hot-toast';
import axios from 'axios';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    const sendData = async () => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());

      await axios.post('/api/send-application', formJson);
    };

    toast.promise(
      sendData(),
      {
        loading: 'Sending...',
        success: <b>Sent!</b>,
        error: <b>An error accord...</b>,
      },
    );
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.titles}>
          <h1>Stay in touch!</h1>
          <p>Leave your details and I will get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            <span>Full name</span>
            <input name="name" id="name" type="text" minLength="5" required />
          </label>
          <label htmlFor="email" className={styles.label}>
            <span>Email</span>
            <input name="email" id="email" type="email" pattern=".+@.+\..+" required />
          </label>
          <label htmlFor="phone" className={styles.label}>
            <span>Phone number</span>
            <input name="phone" id="phone" type="tel" />
          </label>
          <label htmlFor="subject" className={styles.label}>
            <span>Subject</span>
            <input name="subject" id="subject" type="text" required />
          </label>
          <label htmlFor="content" className={styles.label}>
            <span>What did you have in mind?</span>
            <textarea name="content" id="content" />
          </label>
          <div className={styles.buttonsBar}>
            <button type="reset" className={styles.button}>
              <span className="material-symbols-rounded">
                restart_alt
              </span>
            </button>
            <button type="submit" className={styles.button}>Submit</button>
          </div>
        </form>
      </main>
    </>
  );
}
