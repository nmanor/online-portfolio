import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './HeaderComponent.module.css';

const cx = classNames.bind(styles);

export default function HeaderComponent() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  useEffect(() => setMenuOpen(false), [router.asPath]);

  return (
    <header className={styles.container}>
      <div className={styles.menu}>
        <button type="button" className={styles.burgerButton} onClick={handleMenuClick}>
          <span className="material-symbols-rounded">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
        <h1 className={styles.logo}>
          Natan&apos;s
          <br />
          <span>Portfolio</span>
        </h1>
      </div>
      <nav className={cx(styles.navigation, { [styles.visible]: menuOpen })}>
        <Link className={cx(styles.button, { [styles.selected]: router.asPath.match(/^\/$/) })} href="/">Home</Link>
        <Link className={cx(styles.button, { [styles.selected]: router.asPath.match(/^\/about/) })} href="/about">About</Link>
        <Link className={cx(styles.button, { [styles.selected]: router.asPath.match(/^\/projects/) })} href="/projects">Projects</Link>
        <Link className={cx(styles.button, { [styles.selected]: router.asPath.match(/^\/contact/) })} href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
