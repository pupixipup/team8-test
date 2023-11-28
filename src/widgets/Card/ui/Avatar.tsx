import Image from 'next/image';
import styles from './Card.module.scss';
import { Crown } from '@/shared/assets/Crown';
import { AvatarProps } from '../Card';

export function Avatar({ isLeader, avatarUrl, name }: AvatarProps) {
  return (
    <div className={styles.avatarContainer}>
      {isLeader && <Crown className={styles.leaderIcon} />}
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
