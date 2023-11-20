"use client"

import styles from './page.module.css'
import Card from '@/widgets/Card/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <Card userId={"1"} />
      <Card userId={"2"} />
      <Card userId={"3"} />
    </main>
  )
}
