// src/app/components/Button/Button.tsx
'use client';

import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export const Button = ({ href, children, variant = 'primary', className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
    >
      {children}
    </Link>
  );
};