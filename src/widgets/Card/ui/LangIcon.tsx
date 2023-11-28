import styles from './Card.module.scss';
import { langs } from '@/shared/const/langs';
import { LangIconProps } from '../types';
import { ReactNode } from 'react';

export function LangIcon({ icon, text }: LangIconProps) {
  let Element: ReactNode | null | string = null;
  if (text) {
    Element = text;
  } else if (icon) {
    const InvokedComponent = langs[icon];
    Element = <InvokedComponent />;
  }
  return <div className={styles.langIcon}>{Element}</div>;
}
