'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';
import { FaBars, FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Trekking", path: "/treking" },
    { name: "Wild Life Safary Experience", path: "/Wild Life Safary Experience" },
    { name: "Day trips", path: "/Day trips" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" }
  ];

   const socialMedia = [
    { id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61554214025733" },
    { id: 3, icon: <FaInstagram />, url: "https://www.instagram.com/kilihappy_tanzania_adventures/" },
    ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__container}>
        {/* Logo */}
        <div className={styles.navigation__logo}>
          <Image 
            src="/images/logo.jpg" 
            alt="Adventure Tourism Logo" 
            width={150} 
            height={150}
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Items */}
        <ul className={`${styles.navigation__list} ${mobileMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className={styles.navigation__item}>
              <Link
                href={item.path}
                className={styles.navigation__link}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className={styles.navigation__social}>
          {socialMedia.map((platform) => (
            <a 
              key={platform.id}
              href={platform.url}
              className={styles.navigation__socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit us on ${platform}`}
            >
             {platform.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;