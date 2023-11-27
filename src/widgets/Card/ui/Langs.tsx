import { LangIcon } from "./LangIcon"
import styles from "./Card.module.scss"

export function Langs( { languages }: { languages: string[] }) {

  let displayedLangs = languages.map((lang) => <LangIcon key={lang} icon={lang} />);

  if (languages.length > 2) {
    let langsLeft = languages.length - 1;
    displayedLangs = [<LangIcon key={languages[0]} icon={languages[0]} />, <LangIcon text={"+ " + langsLeft} key={langsLeft} />]
  }
  return (
    <div className={styles.langsContainer}>
      {displayedLangs}
    </div>
  )
}
