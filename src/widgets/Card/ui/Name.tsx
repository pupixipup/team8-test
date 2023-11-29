import styles from './Card.module.scss';
import { flags } from '@/shared/const/flags';
import { NameProps } from '../types';

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
