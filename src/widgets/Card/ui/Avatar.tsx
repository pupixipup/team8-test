import Image from 'next/image';
import styles from './Card.module.scss';
import { Crown } from '@/shared/assets/Crown';
import { AvatarProps } from '../Card';

export function Avatar({ isLeader = false, avatarUrl, name }: AvatarProps) {
  return (
    <div className={styles.avatarContainer}>
      {isLeader && <Crown />}
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
