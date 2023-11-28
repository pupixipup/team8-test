import Image from 'next/image';
import styles from './Card.module.scss';
import { langs } from '@/shared/const/langs';
import { LangIconProps } from '../Card';

export function LangIcon({ icon, text }: LangIconProps) {
  return (
    <div className={styles.langIcon}>
      {text ? text : icon ? <Image alt={icon} src={langs[icon]} /> : ''}
    </div>
  );
}
