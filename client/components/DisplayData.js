import { useQuery, gql } from '@apollo/client';

const ORDERS = gql`
{
  orders {
    order_id
    customer_id
    employee_id
    order_date
    required_date
    shipped_date
    ship_via
    freight
    ship_name
    ship_address
    ship_city
    ship_region
    ship_postal_code
    ship_country
  }
}
`
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