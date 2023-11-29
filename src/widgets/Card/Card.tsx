import { useUser } from './action/useUser';
import { Loading } from './ui/Loading';
import { Error } from './ui/Error';
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

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <CardContainer
      isLeader={isLeader}
      languages={languages}
      stack={stack}
      data={data}
    />
  );
}
