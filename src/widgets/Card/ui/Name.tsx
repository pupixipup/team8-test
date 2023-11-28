import { ReactElement, ReactNode } from 'react';
import styles from './Card.module.scss';
import { flags } from '@/shared/const/flags';
import Image from 'next/image';
import { NameProps } from '../Card';

export function Name({ name, country }: NameProps) {
  const Icon = flags[country];

  return (
    <div className={styles.nameContainer}>
      <span className={styles.name}>
        {name.first} {name.last}
      </span>
      <Icon />
    </div>
  );
}
