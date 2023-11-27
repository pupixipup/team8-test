'use client';

import styles from './page.module.css';
import { Card } from '@/widgets/Card/Card';

export default function Home() {
  return (
    <main className={styles.main}>
      <Card
        languages={['js']}
        stack={['React.js', 'Angular', 'Django', 'GraphQL', 'Laravel']}
        userId={'1'}
      />
      <Card
        languages={['js', 'python']}
        stack={['React.js', 'Angular', 'Django']}
        userId={'2'}
      />
      <Card
        languages={['js', 'python', 'jdas', 'dadadgmblbp']}
        stack={['React.js']}
        userId={'3'}
      />
      <Card
        languages={['js']}
        stack={['React.js', 'Angular', 'Django', 'GraphQL']}
        userId={'4'}
      />
    </main>
  );
}
