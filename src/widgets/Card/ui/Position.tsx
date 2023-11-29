import styles from './Card.module.scss';
import { PositionProps } from '../types';

export function Position({ children }: PositionProps) {
  return <span className={styles.position}> {children} </span>;
}
