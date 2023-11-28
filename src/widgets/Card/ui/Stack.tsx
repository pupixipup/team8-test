import { StackCard } from './StackCard';
import styles from './Card.module.scss';
import { StackProps } from '../types';
import { getGridClass } from '../lib/getGridClass';

export function Stack({ stack }: StackProps) {
  let displayedStack = stack;

  if (displayedStack.length > 4) {
    displayedStack = displayedStack.slice(0, 3);
    displayedStack.push('+ ' + (stack.length - 3));
  }

  let className = getGridClass(displayedStack);

  return (
    <div className={`${styles.stackContainer} ${className}`}>
      {displayedStack.map((element, i) => (
        <StackCard
          style={{ gridArea: ('item' + i).toString() }}
          key={element}
          stackName={element}
        />
      ))}
    </div>
  );
}
