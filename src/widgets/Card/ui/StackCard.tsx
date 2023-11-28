import { stack } from '@/shared/const/stack';
import styles from './Card.module.scss';
import { StackCardProps } from '../types';

export function StackCard({ stackName, style }: StackCardProps) {
  const stackColor = stack[stackName.toLowerCase()] ?? '#3a3f49';
  return (
    <div
      className={styles.stackCard}
      style={{ background: stackColor, gridArea: style.gridArea }}
    >
      {stackName}
    </div>
  );
}
