import Image from 'next/image';
import styles from './Card.module.scss';
import crown from '@/shared/assets/crown.svg';
import { AvatarProps } from '../Card';

export function Avatar({ isLeader = false, avatarUrl, name }: AvatarProps) {
  return (
    <div className={styles.avatarContainer}>
      {isLeader && (
        <Image className={styles.leaderIcon} src={crown} alt='Leader' />
      )}
      <Image
        className={styles.avatar}
        src={avatarUrl}
        alt={name}
        width={70}
        height={70}
      />
    </div>
  );
}
