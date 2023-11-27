import { StackCard } from "./StackCard"
import styles from "./Card.module.scss"

export function Stack({ stack }: { stack: string[] }) {

  let displayedStack = stack;
  if (displayedStack.length > 4) {
    
    displayedStack = displayedStack.slice(0, 3);
    displayedStack.push("+ " + (stack.length - 4));
  }

  let className = styles.stackContainer;
  if (displayedStack.length === 3) {
    className += " " + styles.containerTriple;
  }

  if (displayedStack.length === 2) {
    className += " " + styles.containerDouble;
  }

  if (displayedStack.length === 4) {
    className += " " + styles.containerFour;
  }
  return (
    <div className={className}>
      {displayedStack.map(((element, i) => <StackCard style={{gridArea: ("item" + i).toString()}} key={element} stackName={element} />))}
    </div>
  )
}