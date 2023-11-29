import { Avatar } from './Avatar';
import styles from './Card.module.scss';
import { Langs } from './Langs';
import { Name } from './Name';
import { Position } from './Position';
import { Stack } from './Stack';
import { CardContainerProps } from '../types';

export function CardContainer({
  data,
  languages,
  stack,
  isLeader,
}: CardContainerProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.topContainer}>
        <div className={styles.upperContainer}>
          <Avatar
            isLeader={isLeader}
            name={data.results[0].name.first}
            avatarUrl={data.results[0].picture.medium}
          />
          <Langs languages={languages} />
        </div>
        <div className={styles.title}>
          <Name name={data.results[0].name} country={'UA'} />
          <Position>Data Scientist</Position>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Stack stack={stack} />
      </div>
    </div>
  );
}
