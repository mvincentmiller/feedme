
import { useQuery } from '@apollo/client';
import { ORDERS, } from '../gql'



export const DisplayData = (props: any) => {
  
  if (props.stuff !== 'orders') return <div>We cannot complete your request.</div>
else {
  const { loading, error, data } = useQuery(ORDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return data.orders.map(({ ship_city, ship_country }) => (
      <div className="box">
      <div key={ship_city}>
        <p>
          {ship_city}, {ship_country}
        </p>
      </div>
      </div>
    ));  
  }
}

