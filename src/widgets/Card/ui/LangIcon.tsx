import Image from 'next/image';
import styles from './Card.module.scss';
import { langs } from '@/shared/const/langs';

export function LangIcon({ icon, text }: { icon?: string; text?: string }) {
  return (
    <div className={styles.langIcon}>
      {text ? text : icon ? <Image alt={icon} src={langs[icon]} /> : ''}
    </div>
  );
}
