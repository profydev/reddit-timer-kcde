import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <a href="/">
        <img src="/assets/logo.svg" alt="reddit timer logo" />
      </a>
    </div>
    <nav className={styles.nav}>
      <a href="#search">Search</a>
      <a href="#how"> How it works</a>
      <a href="#about">About</a>
    </nav>
  </header>
);

export default Header;
