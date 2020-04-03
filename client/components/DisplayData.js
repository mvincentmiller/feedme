import { useQuery } from '@apollo/client';
import { ORDERS } from '../gql'

export const DisplayData = () => {
  const { loading, error, data } = useQuery(ORDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {console.log(data)}  
  return data.orders.map(({ ship_city, ship_country }) => (
    <div key={ship_city}>
      <p>
        {ship_city}, {ship_country}
      </p>
    </div>
  ));
}