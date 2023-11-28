import { ReactNode } from 'react';
import styles from './Card.module.scss';
import { PositionProps } from '../Card';

export function Position({ children }: PositionProps) {
  return <span className={styles.position}> {children} </span>;
}
