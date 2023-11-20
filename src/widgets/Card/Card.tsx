import useUser from "./model/useUser";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import CardContainer from "./ui/CardContainer";

function Card({ userId }: { userId: string }) {

  const { data, isLoading, isError } = useUser(userId);
  if (isLoading) return <Loading />
  if (isError || !data) return <Error />

  return (
      <CardContainer 
      languages={["js", "python", "jdas"]}
      stack={["React.js", "Angular", "Django", "GraphQL", "Laravel"]}
      data={data} />
      )
}

export default Card