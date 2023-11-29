import { useUser } from './action/useUser';
import { Loading } from './ui/Loading';
import Err from '@/app/error';
import { CardContainer } from './ui/CardContainer';
import React from 'react';
import { CardProps } from './types';

export default function Card({
  userId,
  languages,
  isLeader,
  stack,
}: CardProps) {
  const { data, isLoading, isError } = useUser(userId);

  if (isLoading || !data) return <Loading />;

  return (
    <CardContainer
      isLeader={isLeader}
      languages={languages}
      stack={stack}
      data={data}
    />
  );
}
