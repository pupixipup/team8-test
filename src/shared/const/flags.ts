import { FC, SVGProps } from 'react';
import { UA } from './../assets/UA';
import { RO } from './../assets/RO';

// FC<SVGProps<SVGSVGElement>>
export const flags: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
  UA,
  RO,
};
