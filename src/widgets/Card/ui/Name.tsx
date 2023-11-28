import { ReactNode } from 'react';
import styles from './Card.module.scss';
import { flags } from '@/shared/const/flags';
import Image from 'next/image';
import { NameProps } from '../Card';

export function Name({ name, country }: NameProps) {
  country = Math.random() > 0.5 ? 'UA' : 'RO';

  return (
    <div className={styles.nameContainer}>
      <span className={styles.name}>{name.first + ' ' + name.last}</span>
      <Image src={flags[country]} alt={country} width={20} height={20} />
    </div>
  );
}
