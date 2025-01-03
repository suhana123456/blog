import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Blog about Historical places by Suhana Khan</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <span className={styles.navLink}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className={styles.navLink}>Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className={styles.navLink}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;