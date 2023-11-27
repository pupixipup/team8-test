import { ReactNode } from 'react';
import styles from './Card.module.scss';

export function Position({ children }: { children: ReactNode }) {
  return <span className={styles.position}> {children} </span>;
}
