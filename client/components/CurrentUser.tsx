import { useQuery } from '@apollo/client';
import { ME } from '../gql'


export const CurrentUser = (props: any) => {
  const { loading, error, data } = useQuery(ME);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't get username: {error.message}</p>;
  return <p>{data.username}</p>
}