import styles from '../ui/Card.module.scss';

export function getGridClass(array: string[]): string {
  if (array.length === 3) {
    return styles.containerTriple;
  }
  if (array.length === 2) {
    return styles.containerDouble;
  }
  if (array.length === 4) {
    return styles.containerFour;
  }
  return styles.stackContainer;
}
