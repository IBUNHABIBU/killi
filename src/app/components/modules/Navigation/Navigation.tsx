import React from 'react'
import styles from './Navigation.module.scss';
import Link from 'next/link';

const Navigation: React.FC = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' },
      ];

  return (
    <nav className={styles.nav}>
        <ul className={styles.nav__list}>
        {navItems.map((item) => (
          <li key={item.path} className={styles.nav__item}>
            <Link href={item.path} className={styles.nav__link}>
              {item.name}
            </Link>
          </li>
        ))}
        </ul>
    </nav>
  )
}

export default Navigation