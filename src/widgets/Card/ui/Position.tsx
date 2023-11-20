import { ReactNode } from "react"
import styles from "./Card.module.scss"

function Position({ children }: { children: ReactNode}) {
  return (
    <span className={styles.position}> {children} </span>
  )
}

export default Position