import { ReactNode } from "react"
import styles from "./Card.module.scss"
import { flags } from "@/shared/const/flags"
import Image from "next/image"

interface IName {
  title: string
  first: string
  last: string
}
export function Name( { name, country }: { name: IName, country: string }) {
  
  country = Math.random() > 0.5 ? "UA" : "RO"

  return (
    <div className={styles.nameContainer}>
       <span className={styles.name}>{name.first + " " + name.last }</span>
    <Image src={flags[country]} alt={country} width={20} height={20} />
    </div>
  )
}