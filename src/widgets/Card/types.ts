import { User } from '@/shared/model/User';
import { ReactNode } from 'react';

export interface AvatarProps {
  isLeader: Boolean;
  avatarUrl: string;
  name: string;
}

export interface CardContainerProps {
  data: User;
  languages: string[];
  stack: string[];
  isLeader: Boolean;
}

export interface LangIconProps {
  icon?: string;
  text?: string;
}

export interface StackCardProps {
  stackName: string;
  style: Partial<CSSStyleDeclaration>;
}

export interface StackProps {
  stack: string[];
}

export interface PositionProps {
  children: ReactNode;
}

interface IName {
  title: string;
  first: string;
  last: string;
}

export interface NameProps {
  name: IName;
  country: string;
}

export interface LangsProps {
  languages: string[];
}
