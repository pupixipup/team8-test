'use client';

import styles from './page.module.css';
import { Card } from '@/widgets/Card/Card';

const users = [
  {
    id: '1',
    languages: ['js'],
    stack: ['React.js', 'Angular', 'Django', 'GraphQL', 'Laravel'],
  },
  {
    id: '2',
    languages: ['js', 'python'],
    stack: ['React.js', 'Angular', 'Django'],
  },
  {
    id: '3',
    languages: ['js', 'python', 'jdas', 'dadadgmblbp'],
    stack: ['React.js'],
  },
  {
    id: '4',
    languages: ['js'],
    stack: ['React.js', 'Angular', 'Django', 'GraphQL'],
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {users.map((user) => (
        <Card
          key={user.id}
          languages={user.languages}
          stack={user.stack}
          userId={user.id}
        />
      ))}
    </main>
  );
}
