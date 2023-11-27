import { useUser } from './action/useUser';
import { Loading } from './ui/Loading';
import { Error } from './ui/Error';
import { CardContainer } from './ui/CardContainer';

export function Card({
  userId,
  languages,
  stack,
}: {
  userId: string;
  languages: string[];
  stack: string[];
}) {
  const { data, isLoading, isError } = useUser(userId);

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return <CardContainer languages={languages} stack={stack} data={data} />;
}
