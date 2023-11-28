'use client';

import styles from './page.module.css';
import { Card } from '@/widgets/Card/Card';

const users = [
  {
    id: '1',
    languages: ['js'],
    isLeader: true,
    stack: ['React.js', 'Angular', 'Django', 'GraphQL', 'Laravel'],
  },
  {
    id: '2',
    languages: ['js', 'python'],
    isLeader: false,
    stack: ['React.js', 'Angular', 'Django'],
  },
  {
    id: '3',
    languages: ['js', 'python', 'jdas', 'dadadgmblbp'],
    isLeader: true,
    stack: ['React.js'],
  },
  {
    id: '4',
    languages: ['js'],
    isLeader: false,
    stack: ['React.js', 'Angular', 'Django', 'GraphQL'],
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {users.map((user) => (
        <Card
          isLeader={user.isLeader}
          key={user.id}
          languages={user.languages}
          stack={user.stack}
          userId={user.id}
        />
      ))}
    </main>
  );
}
