import { User } from '@/shared/model/User';
import { Avatar } from './Avatar';
import styles from './Card.module.scss';
import { Langs } from './Langs';
import { Name } from './Name';
import { Position } from './Position';
import { Stack } from './Stack';
import { CardContainerProps } from '../Card';

export function CardContainer({ data, languages, stack }: CardContainerProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.topContainer}>
        <div className={styles.upperContainer}>
          <Avatar
            name={data.results[0].name.first}
            avatarUrl={data.results[0].picture.medium}
          />
          <Langs languages={languages} />
        </div>
        <Name name={data.results[0].name} country={'UA'} />
        <div className={styles.nameSpacer}></div>
        <Position>Data Scientist</Position>
      </div>
      <div className={styles.bottomContainer}>
        <Stack stack={stack} />
      </div>
    </div>
  );
}
