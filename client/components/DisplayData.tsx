
import { useQuery } from '@apollo/client';
import { USERS } from '../gql'


export const DisplayData = (props: any) => {
  
  if (props.stuff !== 'orders') return <div>We cannot complete your request.</div>
else {
  const { loading, error, data } = useQuery(USERS);
   

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return data.users.map(({ username, email }) => (
      <div className="box">
      <div key={username + Math.random() * 10}>
        <p>
          {username} | {email}
        </p>
      </div>
      </div>
    ));  
  }
}

