import { useUser } from './action/useUser';
import { Loading } from './ui/Loading';
import { Error } from './ui/Error';
import { CardContainer } from './ui/CardContainer';
import React from 'react';

export function Card({
  userId,
  languages,
  isLeader,
  stack,
}: {
  userId: string;
  languages: string[];
  stack: string[];
  isLeader: Boolean;
}) {
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
