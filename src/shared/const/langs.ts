import { JS } from '@/shared/assets/JS';
import { Python } from '@/shared/assets/Python';
import { FC, SVGProps } from 'react';

export const langs: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
  python: Python,
  js: JS,
};
