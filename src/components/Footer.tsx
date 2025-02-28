import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2>Suhana Khan Blog</h2>
          <p>Your go-to platform for Fantastic articles and latest updates.</p>
        </div>

        <div className={styles.linksSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">
                <span className={styles.link}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className={styles.link}>Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className={styles.link}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

       
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
