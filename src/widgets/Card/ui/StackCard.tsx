import { stack } from '@/shared/const/stack';
import styles from './Card.module.scss';

export function StackCard({
  stackName,
  style,
}: {
  stackName: string;
  style: Partial<CSSStyleDeclaration>;
}) {
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
