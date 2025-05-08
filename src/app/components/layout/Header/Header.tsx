import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../modules/Logo/Logo';
import Navigation from '../../modules/Navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;